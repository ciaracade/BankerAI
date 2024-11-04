// openai is the OpenAI API client instance
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables from .env file from "openai";

// openai is the OpenAI API client instance
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default openai;