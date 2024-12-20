import { Router } from 'express';
import { getRegionalNews } from '../services/news/aggregator';
import { REGIONS } from '../services/news/config/regions';

const router = Router();

// Get news by region
router.get('/:region', async (req, res, next) => {
  try {
    const { region } = req.params;
    const { limit = '50', language = 'en', hours = '24' } = req.query;

    // Validate region
    if (!REGIONS.find(r => r.id === region)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid region'
      });
    }

    const news = await getRegionalNews(region);
    
    // Apply filters
    const filteredNews = news
      .filter(item => {
        const itemDate = new Date(item.publishedAt);
        const cutoff = new Date(Date.now() - parseInt(hours as string) * 60 * 60 * 1000);
        return itemDate >= cutoff;
      })
      .slice(0, parseInt(limit as string));

    res.json({
      success: true,
      data: filteredNews
    });
  } catch (error) {
    next(error);
  }
});

export default router;