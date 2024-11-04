import OpenAI from 'openai';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import openai from './config/openai.js';
import connectDB from './config/db.js';

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
app.get('/api/hello', async (req, res) => {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                {
                    role: "user",
                    content: "Write a haiku about recursion in programming.",
                },
            ],
        });


        res.json({ message: `${completion.choices[0].message.content}` });
    } catch (error) {
        // Bruh this is probably the most annoying error ever
        // made a new API key and it worked fine
        if (error.code === "insufficient_quota") {
            console.error('Error calling OpenAI API:', error);
            res.status(429).json({ error: 'Rate limit exceeded' });
        } else {
            console.error('Error calling OpenAI API:', error);
            res.status(500).json({ error: 'An error occurred with the OpenAI API' });
        }
    }
});

// Starts the server on the specified port
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
