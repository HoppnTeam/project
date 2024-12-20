import express from 'express';
import { getArticles, getArticleById } from '../database/articles.js';

const router = express.Router();

// Get articles with optional filtering
router.get('/articles', async (req, res) => {
  try {
    const { category, region } = req.query;
    const articles = await getArticles(category, region);
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
});

// Get single article by ID
router.get('/articles/:id', async (req, res) => {
  try {
    const article = await getArticleById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch article' });
  }
});

export default router;