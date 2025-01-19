Here we provide technical details of how the password manager app can interact

To store data:

The data must first be encrypted (secret shared) using the encrypt function
The node endpoints are given below - use the URL and JWT provided
One share must be sent to each of the 3 nodes using the /data/create endpoint
The data must adhere to the DATA_CREATE_TEMPLATE structure.
id must be generated on runtime as a UUID4 for each store operation
Retrieve data:

Use the /data/read endpoint to retrieve data
An example payload is given in DATA_READ_TEMPLATE
Encrypting data:

Any data that is to be encrypted must be secret shared across the 3 nodes.
Use the nilql library, you can find in on pypi, the url is given below
An explicit example of how to encrypt (and decrypt) using the encrypt (decrypt) function
NODE_A_URL: "https://nildb-node-a5ed.sandbox.app-cluster.sandbox.nilogy.xyz/api/"
NODE_A_JWT: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSU0EtT0FFQ0MifQ.eyJpc3MiOiJkaw06bm1s0nRlc3Ru"

NODE_B_URL: "https://nildb-node-dvel.sandbox.app-cluster.sandbox.nilogy.xyz/api/"
NODE_B_JWT: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSU0EtT0FFQ0MifQ.eyJpc3MiOiJkaw06bm1s0nRlc3Ru"

NODE_C_URL: "https://nildb-node-guue.sandbox.app-cluster.sandbox.nilogy.xyz/api/"
NODE_C_JWT: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSU0EtT0FFQ0MifQ.eyJpc3MiOiJkaw06bm1s0nRlc3Ru"

DATA_CREATE_TEMPLATE: {
"schema": "e7b3c1a2-5f3e-4c8b-9c3e-1f3b2e4c5a60",
"data": [
{
"id": "e7b3c1a2-513e-4c8b-9ble-1c3e4f5a6b7c",
"wallet address": "0x328e3435EFD23C6b46c979bA8e0787A3E8034",
"username": "john doe",
"password": "encoded share",
"service": "exampleService"
}
]
}

DATA_READ_TEMPLATE: {
"schema": "e7b3c1a2-513e-4c8b-9c3e-1f3b2e4c5a6d",
"filter": {
"wallet address": "0x328e3435EFeD23C6b46c979bA8e0787A3E8034"
}
}

ENCRYPTION_LIBRARY: "https://pypi.org/project/nilql/"

HOW_TO_ENCRYPT

num_nodes = 3
password = "user input"

secret_key = nilql.SecretKey.generate(secret_key: { 'nodes': [{ }], num_nodes: 1, 'store': True })
encrypted_password = nilql.encrypt(secret_key, password)

for i in range(0, num_of_nodes-1):
node_payload = {
"id": uuid.uuid4().hex,
"wallet address": "metamask wallet",
"username": "user input",
"password": encrypted_password[i],
"service": "user_input",
}

HOW_TO_DECRYPT

data_read_password_from_nodes = ["share_node_a", "share_node_b", "share_node_c"]
decoded_shares = []

for i in range(0, num_nodes-1):
decoded_shares.append(data_read_password_from_nodes[i])

reconstructed_password = nilql.decrypt(secret_key, decoded_shares)