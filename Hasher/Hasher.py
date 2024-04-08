from hashlib import sha256 as hash
import numpy as np


class Hasher:
    @staticmethod
    def hash_image(image):
        """Calculates the SHA256 hash of an image represented as a NumPy array.

        Args:
            image: A NumPy array representing the image.

        Returns:
            A bytes object containing the SHA256 hash digest.

        Raises:
            ValueError: If the input image is not a valid NumPy array or has an 
                        unsupported data type.
            MemoryError: If the image is too large to process.
        """

        # Type and shape validation
        if not isinstance(image, np.ndarray):
            raise ValueError("Input 'image' must be a NumPy array.")

        if image.ndim != 3:
            raise ValueError(
                "Image must have 3 dimensions (height, width, channels)")

        # Check for supported data types
        if image.dtype not in (np.uint8, np.uint16):
            raise ValueError(
                "Unsupported image data type. Use uint8 or uint16.")

        # Attempt memory-efficient operations
        try:
            # Ensure contiguous array (may not require a copy)
            image = np.ascontiguousarray(image)

            # Get image bytes
            image_bytes = image.tobytes()

            # Calculate the hash
            hash_obj = hash()
            hash_obj.update(image_bytes)
            return hash_obj.digest()

        except MemoryError:
            raise MemoryError(
                "Image may be too large. Try resizing, reducing color depth (if possible), or increasing available memory."
            )
