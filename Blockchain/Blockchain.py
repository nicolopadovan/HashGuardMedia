from web3 import Web3


class Blockchain:
    def __init__(self, provider_url):
        self.web3 = Web3(Web3.HTTPProvider(provider_url))
        self.account = None

    def connect(self):
        return self.web3.isConnected()

    def set_account(self, account_address, private_key):
        self.account = self.web3.eth.account.privateKeyToAccount(private_key)

    def send_transaction(self, to_address, amount_eth):
        if not self.account:
            raise ValueError("Account not set. Call set_account() first.")

        # Convert Ether to Wei
        value = self.web3.toWei(amount_eth, 'ether')

        # Build a transaction
        tx = {
            'nonce': self.web3.eth.getTransactionCount(self.account.address),
            'to': to_address,
            'value': value,
            'gas': 2000000,
            'gasPrice': self.web3.toWei('50', 'gwei')
        }

        # Sign the transaction
        signed_tx = self.account.sign_transaction(tx)

        # Send the transaction
        tx_hash = self.web3.eth.sendRawTransaction(signed_tx.rawTransaction)

        return self.web3.toHex(tx_hash)


# Example usage:
if __name__ == "__main__":
    provider_url = 'YOUR_INFURA_URL'
    private_key = 'YOUR_PRIVATE_KEY'
    account_address = 'YOUR_ACCOUNT_ADDRESS'
    blockchain = Blockchain(provider_url)

    if blockchain.connect():
        print("Connected to Ethereum network")
        blockchain.set_account(account_address, private_key)
        tx_hash = blockchain.send_transaction('RECIPIENT_ADDRESS', 0.01)
        print(f"Transaction sent, tx hash: {tx_hash}")
    else:
        print("Failed to connect to Ethereum network")
