#!/Users/nico/opt/anaconda3/envs/crypto/bin/python
import cv2
import os
from PKI.RSA import RSA, KeyPair
from Hasher.Hasher import Hasher
import cProfile
import pstats
import csv
import json
from Steganography.LSB import LSBCoder


class Tester:
    def __init__(self, profile: bool = True, file_path: str = "_input/test.jpg"):
        image = cv2.imread(file_path)

        #  Zero out all the LSBs
        self.image = image & 0b11111110

        self.profile = profile

    def profiled_method(self, method, *args, **kwargs):
        result = [None]

        def wrapper():
            nonlocal result
            result[0] = method(*args, **kwargs)

        if self.profile:
            profiler = cProfile.Profile()
            profiler.enable()
            wrapper()
            profiler.disable()
            stats = pstats.Stats(profiler)

            path = os.path.join(os.getcwd(), '_profile')
            if not os.path.exists(path):
                os.makedirs(path)

            csv_filename = os.path.join(path, f'{method.__name__}.csv')
            with open(csv_filename, 'w', newline='') as csvfile:
                csvwriter = csv.writer(csvfile)
                csvwriter.writerow(
                    ['ncalls', 'tottime', 'percall', 'cumtime', 'percall', 'filename:lineno(function)'])
                for row in stats.stats.values():
                    csvwriter.writerow(row[:6])

            return result[0]
        else:
            return method(*args, **kwargs)

    def hash_image(self):
        return self.profiled_method(Hasher.hash_image, self.image)

    def generate_keys(self):
        return self.profiled_method(RSA.generate_keys)

    def sign(self, private_key, data):
        return self.profiled_method(RSA.sign, private_key, data)

    def verify(self, public_key, data, signature):
        return self.profiled_method(RSA.verify, public_key, data, signature)

    def encode(self, image, data):
        coder = LSBCoder()
        return self.profiled_method(coder.encode, image, data)

    def decode(self, image):
        coder = LSBCoder()
        return self.profiled_method(coder.decode, image)

    def test(self):
        image_hash = self.hash_image()
        public_key, private_key = self.generate_keys()
        signed_hash = self.sign(private_key, image_hash)

        encoded_image = self.encode(self.image, signed_hash)

        cv2.imwrite("_output/encoded_image.jpg", encoded_image)

        image = cv2.imread("_output/encoded_image.jpg")
        decoded_data = self.decode(image)
        print(signed_hash.hex() == decoded_data.hex())


def main():
    tester = Tester()
    tester.test()


if __name__ == "__main__":
    main()
