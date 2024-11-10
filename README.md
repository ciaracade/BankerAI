# Saving the refined documentation as a Markdown file named `README.md`.

documentation = """
# BankerAI 🏦
An AI-powered application designed to assist bankers in navigating the Banking Management Knowledge System for the University of Michigan's +Tech Innovation Jam.

## What is BankerAI?
BankerAI is a versatile banking tool designed for use by professionals at multiple levels within banking institutions. By leveraging AI, it enables users to efficiently search and retrieve relevant banking knowledge, providing quick access to key information and supporting decision-making processes.

---

## Project Setup

### Prerequisites
1. **Node.js and npm**: Make sure you have Node.js and npm installed. You can download them from [https://nodejs.org](https://nodejs.org/).
2. **MongoDB Database**: Set up a MongoDB database. You can use MongoDB Atlas for a cloud solution or run MongoDB locally.
3. **OpenAI API Key**: Register on [OpenAI](https://platform.openai.com/) and create an API key.

### Backend Setup

1. **Create a `.env` file** in the `server` directory and add the following environment variables:

   ```plaintext
   OPENAI_API_KEY=your_openai_api_key_here
   MONGO_DB_URI=your_mongo_db_uri_here
   PORT=5001  # Or any other port of your choice
