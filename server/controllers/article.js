import openai from '../config/openai.js';
import Article from "../models/article.js"
import axios from "axios";
import * as cheerio from "cheerio";


// we are given a link. so, given the link, how we extract all the information we need?
// install axios duhhhhhh

// getArticleContent fetches the HTML content of the article given by the url
const getArticleContent = async (link) => {
    try {
        const response = await axios.get(link);
        return response.data;
    } catch (error) {
        console.error('Error fetching article content:', error);
        return null;
    }
}

// extractArticleContent extracts the article content form the HTML of the article given by the url
const extractArticleContent = (html) => {
    const $ = cheerio.load(html);
    const articleContent = $('article').text();
    return articleContent;
}

// getSummary generates a summary of the article content using the OpenAI API
const getSummary = async (content) => {
    try {
        const userContent = `
            Provide a short, 20 word summary about the problem
         the article addresses and how to solve the issue. Make sure this 
         summary is straight to the point, is around 20 words, and 
         states that problem that is being solved. Do not hallucinate. Here is the article:
         `;
         
         
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are given a url to an article. " },
                { role: "user", content: userContent + content }, // Prompt + article content
            ],
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.error('Error calling OpenAI API for summary:', error);
        throw error;
    }
}

// getVectorEmbeddedData generates a vector embedding of the article summary using the OpenAI API (summary or would content be better?)
const getVectorEmbeddedData = async (summary) => {
    try {
        const embedding = await openai.embeddings.create({
            model: "text-embedding-ada-002", // embedding model
            input: summary,
            encoding_format: "float",
        });

        return embedding.data;

    } catch (error) {
        console.error('Error calling OpenAI API for embedding:', error);
        throw error;
    }
}

// createTitle creates a title for the article using AI
const createTitle = async (summary) => {
   try {
    const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a title maker using summaries " },
                { role: "user", content: "Please make a title starting with 'How to ...' and make it under 10 words and use this summary for reference:" + summary }, // Prompt + article content
            ],
        });

        return completion.choices[0].message.content;

   } catch (error) {
         console.error('Error creating title:', error);
         return 'Untitled';
   }
}

// CreateArticle creates a new article in the database
export const createArticle = async (req, res) => {
    const {link, title}  = req.body; // for front end, dont forget to add a title input

    try {
        // 1. Get article data from the request body
        const articleHTMLContent = await getArticleContent(req.body.link);
        if (!articleHTMLContent) {
            return res.status(404).json({ message: 'Article not found' });
        }

        // 2. Extract the article content from the HTML
        const articleContent = extractArticleContent(articleHTMLContent);
        

        // 3. Generate a summary of the article content and its vector embedding
        // Don't delete await it will break the code UwU
        const summary =  await getSummary(articleContent);
        const embedding =  await getVectorEmbeddedData(summary);

        // 4. Create a new Article instance using the inputted data
        const newArticle = new Article(
            {
                title: title || await createTitle(summary), // Title of the article
                summary: summary , // AI generated summary of the article
                content: articleContent.trim(), // content of the article 
                link: link, // link ot the article
                vectorembedding: embedding, // vector embedding of the article (for semantic search)
                date: new Date(), // date the article was added to the database
            });

        // 5. Save the article to the database
        await newArticle.save();
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}