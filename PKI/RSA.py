from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import padding, rsa
from cryptography.exceptions import InvalidSignature


class KeyPair:
    def __init__(self, public_key, private_key):
        self.public_key = public_key
        self.private_key = private_key

    def __iter__(self):
        return iter([self.public_key, self.private_key])


class RSA:
    @staticmethod
    def generate_keys(key_size=2048):
        try:  # Encapsulate key generation in a try-except block
            private_key = rsa.generate_private_key(
                public_exponent=65537,
                key_size=key_size
            )
            public_key = private_key.public_key()
            return KeyPair(public_key, private_key)
        except Exception as e:  # Catch potential exceptions
            raise RSAError(f"Error generating RSA keys: {e}") from e

    @staticmethod
    def sign(private_key, data):
        if not private_key:
            raise ValueError(
                "Private key not generated. Call generate_keys() first.")

        try:
            signature = private_key.sign(
                data,
                padding.PSS(
                    mgf=padding.MGF1(hashes.SHA256()),
                    salt_length=padding.PSS.MAX_LENGTH
                ),
                hashes.SHA256()
            )
            return signature
        except Exception as e:
            raise RSAError(f"Error signing data: {e}") from e

    @staticmethod
    def verify(public_key, data, signature):
        if not public_key:
            raise ValueError(
                "Public key not generated. Call generate_keys() first.")

        try:
            public_key.verify(
                signature,
                data,
                padding.PSS(
                    mgf=padding.MGF1(hashes.SHA256()),
                    salt_length=padding.PSS.MAX_LENGTH
                ),
                hashes.SHA256()
            )
            return True
        except InvalidSignature:  # Catch specific verification errors
            raise RSAVerificationError("Invalid signature")
        except Exception as e:
            raise RSAError(f"Error verifying signature: {e}") from e


class RSAError(Exception):
    pass


class RSAVerificationError(RSAError):
    pass
