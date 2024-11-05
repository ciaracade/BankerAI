import express from 'express';
import { createArticle } from '../controllers/article.js';

const router = express.Router();

// Define the route for creating an article
router.post('/articles', createArticle);

export default router;