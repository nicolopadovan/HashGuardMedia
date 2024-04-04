#!/Users/nico/opt/anaconda3/envs/crypto/bin/python

import cv2
from Hasher.Hasher import Hasher
from PKI.CryptoSigner import CryptoSigner
from Steg.DCT import DCT
import os


hasher = Hasher()
crypto_signer = CryptoSigner()
coder = DCT()

image_path = "test.jpg"
image = cv2.imread(image_path)

if image is None:
    raise ValueError("Invalid image path")

image_hash = hasher.hash_image(image)

crypto_signer.generate_keys()
signed_hash = crypto_signer.sign_hash(image_hash)

encoded_image = coder.encode(image, signed_hash)

output_path = os.path.join("output", "encoded_image.jpg")
cv2.imwrite(output_path, encoded_image)

decoded_message = coder.decode(encoded_image)

# For each byte in the decoded message, calculate its distance from the original hash
distance = 0
for i in range(len(image_hash)):
    distance += abs(image_hash[i] - decoded_message[i])

print(f"Distance: {distance}")
