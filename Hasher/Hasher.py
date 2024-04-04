import hashlib
import numpy as np


class Hasher:
    def __init__(self):
        self.hasher = hashlib.sha256()

    def _zero_out_lsb(self, image):
        """Zero out the least significant bit of each pixel in the image."""
        # Use bitwise AND with 254 (11111110 in binary) to zero out the LSB
        zeroed_image = np.bitwise_and(image, 254)
        return zeroed_image

    def hash_image(self, image):
        """Hash the image after zeroing out the LSB."""
        zeroed_image = self._zero_out_lsb(image)
        # Ensure the image data is contiguous in memory
        if not zeroed_image.flags['C_CONTIGUOUS']:
            zeroed_image = np.ascontiguousarray(zeroed_image)
        # Convert the image to bytes
        image_bytes = zeroed_image.tobytes()
        # Create a SHA-256 hash of the image
        hash_obj = hashlib.sha256()
        hash_obj.update(image_bytes)

        # Return the hash as bytes
        return hash_obj.digest()
