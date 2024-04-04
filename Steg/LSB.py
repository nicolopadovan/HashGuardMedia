#!/Users/nico/opt/anaconda3/envs/crypto/bin/python
import numpy as np


class LSBCoderOptimized:

    def __init__(self, header_size=4):
        self.header_size_bytes = header_size

    def encode(self, image, data: bytes):
        if image is None:
            raise ValueError("Invalid image path")

        # The maximum amount of bits that can be encoded in the image
        pixels_in_image = image.size
        channels_in_image = image.shape[2]
        # Convert bits to bytes for comparison
        max_bytes = (pixels_in_image * channels_in_image) // 8

        if len(data) > max_bytes:
            raise ValueError(
                f"Data size too large for image. Max data size: {max_bytes} bytes")

        print(f"Max data size: {max_bytes / 1024 / 1024} Mb"
              f"\nData size: {len(data)} bytes")
        # Aggregate the header and the data into a single byte array
        # Convert to bytes for a consistent header size
        header = np.array([len(data)], dtype=np.uint32).tobytes()
        data_with_header = header + data

        # Convert the data_with_header to binary bits
        data = np.frombuffer(data_with_header, dtype=np.uint8)
        binary_data = np.unpackbits(data)

        # Flatten the image for manipulation
        flat_image = image.flatten()

        # Modify only the portion of the flat_image that corresponds to the binary_data length
        # Mask to clear the least significant bit
        mask = np.ones(len(binary_data), dtype=np.uint8) * 0xFE
        # Apply mask to clear the least significant bit of the corresponding portion of the image
        flat_image[:len(binary_data)] &= mask
        # Set the least significant bit to the binary data
        flat_image[:len(binary_data)] |= binary_data

        # Reshape the image back to its original shape
        image = flat_image.reshape(image.shape)

        return image

    def decode(self, image):
        if image is None:
            raise ValueError("Invalid image path")

        flat_image = image.flatten()
        binary_data = flat_image & 0b00000001

        data = np.packbits(binary_data)
        header = data[:self.header_size_bytes]
        data_size = np.frombuffer(header, dtype=np.uint32)[0]

        data = data[self.header_size_bytes:self.header_size_bytes + data_size]

        return data.tobytes()

    def calculate_max_data_size(self, image):
        return image.size - self.header_size
