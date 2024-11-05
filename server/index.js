import OpenAI from 'openai';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import connectDB from './config/db.js';
import articleRoutes from './routes/article.js';

// I have no idea why i need this here but okay
dotenv.config();

// The port in which the backend server will run OR 5000 if no port is specified
const PORT = process.env.PORT || 5000;

// app is an instance of express (This is like the Flask equivalent of app = Flask(__name__))
const app = express();

// idek what this is but the tutorial said to add it
app.use(cors());
app.use(express.json());

// Initialize and connect to the MongoDB database :)
connectDB();

// Temporary route to test the OpenAI API
app.use('/bankerai', articleRoutes)

app.get('/', (req, res) => {
    res.send('Yes, I work!');
});

// Starts the server on the specified port
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
