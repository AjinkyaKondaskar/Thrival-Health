from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from dotenv import load_dotenv
from azure.cosmos import CosmosClient, exceptions
import uuid

import traceback

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend requests

# Cosmos DB Connection
COSMOS_URI = os.getenv("COSMOS_URI")
COSMOS_KEY = os.getenv("COSMOS_KEY")
DATABASE_NAME = os.getenv("DATABASE_NAME")
CONTAINER_NAME = os.getenv("CONTAINER_NAME")

client = CosmosClient(COSMOS_URI, credential=COSMOS_KEY)
database = client.get_database_client(DATABASE_NAME)
container = database.get_container_client(CONTAINER_NAME)

@app.route("/api/users", methods=["POST"])
def add_user():
    try:
        data = request.json  # ✅ Ensure JSON data is received
        print("Received Data:", data)  # ✅ Log received data

        new_user = {
            "id": str(uuid.uuid4()),  # ✅ Unique ID
            "name": data["name"],
            "email": data["email"],
            "age": data["age"]
        }
        print("User to Insert:", new_user)  # ✅ Log before insertion

        container.create_item(new_user)  # ✅ Insert into CosmosDB
        print("User Added Successfully")  # ✅ Log success

        return jsonify({"message": "User added successfully", "user": new_user}), 201
    except Exception as e:
        print("Error in /api/users:", str(e))  # ✅ Log error
        traceback.print_exc()  # ✅ Show full error details
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)