import express from 'express';
import newsRoutes from './routes/news';
import { errorHandler } from './middleware/errorHandler';

const app = express();

// Routes
app.use('/api/news', newsRoutes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});