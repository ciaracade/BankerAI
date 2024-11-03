import OpenAI from 'openai';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 5000;

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


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
        if (error.code === "insufficient_quota") {
            console.error('Error calling OpenAI API:', error);
            res.status(429).json({ error: 'Rate limit exceeded' });
        } else {
            console.error('Error calling OpenAI API:', error);
            res.status(500).json({ error: 'An error occurred with the OpenAI API' });
        }
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
