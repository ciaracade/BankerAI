
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
   ```

   - **OPENAI_API_KEY**: Paste your OpenAI API key here.
   - **MONGO_DB_URI**: Paste the MongoDB connection URI here. This could be from MongoDB Atlas or your local instance.
   - **PORT**: The port number for the backend server (default: `5001`).

2. **Install dependencies**:

   Navigate to the `server` directory and install dependencies:

   ```bash
   cd server
   npm install
   ```

3. **Run the Backend Server**:

   Start the backend server:

   ```bash
   npm run dev
   ```

   The backend server should now be running on `http://localhost:5001`.

### Frontend Setup

1. **Install dependencies**:

   In the `banker-ai` directory (or wherever your frontend code resides), install dependencies:

   ```bash
   cd banker-ai
   npm install
   ```

2. **Run the Frontend Server**:

   Start the frontend development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

### Project Structure

```plaintext
/your-project-root
├── README.md
├── banker-ai             # Frontend (Next.js application)
│   ├── public            # Static files
│   ├── src               # Source code for the frontend
│   ├── .env.local        # Environment variables for frontend (optional)
│   └── ...
├── server                # Backend (Node.js + Express + MongoDB)
│   ├── config            # Configuration files
│   │   ├── db.js         # MongoDB connection setup
│   │   └── openai.js     # OpenAI API setup
│   ├── controllers       # Business logic for handling API requests
│   ├── models            # MongoDB schemas (Mongoose)
│   ├── routes            # Express routes
│   ├── .env              # Environment variables for backend
│   ├── index.js          # Main Express server entry point
│   └── package.json
└── .gitignore            # Ignore unnecessary and sensitive files
```

---

### Team
BankerAI was developed as part of the +Tech Innovation Jam at the University of Michigan Ross School of Business.
