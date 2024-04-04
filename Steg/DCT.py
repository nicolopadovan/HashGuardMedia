#!/Users/nico/opt/anaconda3/envs/crypto/bin/python
import numpy as np
import cv2


class DCT:
    def encode(self, image, data: bytes):
        # Load image
        rows, cols, _ = image.shape
        blue = image[:, :, 0]
        green = image[:, :, 1]
        red = image[:, :, 2]

        # Prepare the data for embedding
        header = len(data).to_bytes(4, byteorder='big')
        data_with_header = header + data

        data = np.frombuffer(data_with_header, dtype=np.uint8)
        binary_data = np.unpackbits(data)

        # Convert the image into 8x8 blocks
        blue_blocks = self.__convert_to_blocks(blue)
        green_blocks = self.__convert_to_blocks(green)
        red_blocks = self.__convert_to_blocks(red)

        # Calculate the DCT coefficients
        blue_dct = self.__calculate_coefficients(blue_blocks)
        green_dct = self.__calculate_coefficients(green_blocks)
        red_dct = self.__calculate_coefficients(red_blocks)

        channels = np.array([blue_dct, green_dct, red_dct])

        # Embed the data into the DCT coefficients
        embedded_data = self.__embed_data(channels, binary_data)

        # Inverse DCT
        blue_blocks = self.__calculate_inverse(embedded_data[0])
        green_blocks = self.__calculate_inverse(embedded_data[1])
        red_blocks = self.__calculate_inverse(embedded_data[2])

        # Rebuild the image
        blue = self.__rebuild_image(blue_blocks, rows, cols)
        green = self.__rebuild_image(green_blocks, rows, cols)
        red = self.__rebuild_image(red_blocks, rows, cols)

        result = cv2.merge([blue, green, red])
        return result

    def decode(self, image) -> bytes:
        blue = image[:, :, 0]
        green = image[:, :, 1]
        red = image[:, :, 2]

        blue_blocks = self.__convert_to_blocks(blue)
        green_blocks = self.__convert_to_blocks(green)
        red_blocks = self.__convert_to_blocks(red)

        blue_dct = self.__calculate_coefficients(blue_blocks)
        green_dct = self.__calculate_coefficients(green_blocks)
        red_dct = self.__calculate_coefficients(red_blocks)

        channels = np.array([blue_dct, green_dct, red_dct])

        extracted_binary_data = self.__extract_data(channels)

        extracted_data = np.packbits(extracted_binary_data)
        extracted_data = extracted_data.tobytes()

        message_length = int.from_bytes(extracted_data[:4], byteorder='big')
        extracted_data = extracted_data[4:4 + message_length]

        return extracted_data

    def __embed_data(self, dct_channels, binary_data):
        bit_index = 0

        channels, rows, cols, width, height = dct_channels.shape

        embedding_pattern = self._embedding_pattern()
        for channel in range(channels):
            for row in range(rows):
                for col in range(cols):
                    for i in range(width):
                        for j in range(height):
                            if embedding_pattern[i, j] == 1 and bit_index < len(binary_data):
                                coef = dct_channels[channel, row, col, i, j]
                                coef_int = int(coef)
                                coef_int = (
                                    coef_int & ~1) | binary_data[bit_index]
                                dct_channels[channel, row,
                                             col, i, j] = coef_int
                                bit_index += 1

        return dct_channels

    def __extract_data(self, dct_channels):
        bit_index = 0
        extracted_bits = []

        channels, rows, cols, width, height = dct_channels.shape
        embedding_pattern = self._embedding_pattern()

        for channel in range(channels):
            for row in range(rows):
                for col in range(cols):
                    for i in range(width):
                        for j in range(height):
                            if embedding_pattern[i, j] == 1:
                                coef = dct_channels[channel, row, col, i, j]
                                bit = int(coef) & 1
                                extracted_bits.append(bit)
                                bit_index += 1

        return np.array(extracted_bits)

    def __convert_to_blocks(self, channel):
        rows, cols = channel.shape
        rows_cut = rows - (rows % 8)
        cols_cut = cols - (cols % 8)
        channel_cut = channel[:rows_cut, :cols_cut]

        # Reshape into 8x8 blocks
        blocks = channel_cut.reshape(
            rows_cut // 8, 8, cols_cut // 8, 8).swapaxes(1, 2)
        return blocks

    def __calculate_coefficients(self, blocks):
        num_blocks_height, num_blocks_width, _, _ = blocks.shape
        dct_blocks = np.zeros_like(blocks, dtype=np.float32)

        for i in range(num_blocks_height):
            for j in range(num_blocks_width):
                block_float = blocks[i, j].astype(np.float32)
                dct_blocks[i, j] = cv2.dct(block_float)

        return dct_blocks

    def __calculate_inverse(self, dct_blocks):
        num_blocks_height, num_blocks_width, _, _ = dct_blocks.shape
        blocks = np.zeros_like(dct_blocks, dtype=np.float32)

        for i in range(num_blocks_height):
            for j in range(num_blocks_width):
                block = dct_blocks[i, j]
                blocks[i, j] = cv2.idct(block)

        return blocks

    def __rebuild_image(self, blocks, rows, cols):
        num_blocks_height, num_blocks_width, _, _ = blocks.shape
        channel = np.zeros((rows, cols), dtype=np.uint8)

        for i in range(num_blocks_height):
            for j in range(num_blocks_width):
                y = i * 8
                x = j * 8
                channel[y:y + 8, x:x + 8] = blocks[i, j]

        return channel

    def _embedding_pattern(self):
        return np.array([[1, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0]])
