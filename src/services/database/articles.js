// In-memory storage for demo purposes
const articles = new Map();

export async function saveArticle(article) {
  try {
    const id = Date.now().toString();
    const processedArticle = {
      ...article,
      id,
      createdAt: new Date().toISOString(),
      views: Math.floor(Math.random() * 1000), // Demo views count
      readingTime: Math.ceil((article.content?.length || 0) / 1000) || 5
    };

    articles.set(id, processedArticle);
    console.log(`Saved article: ${processedArticle.title}`);
    return id;
  } catch (error) {
    console.error('Error saving article:', error);
    throw error;
  }
}

export async function getArticles(category, region) {
  try {
    let filtered = Array.from(articles.values());
    
    if (category) {
      filtered = filtered.filter(article => 
        article.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    if (region) {
      filtered = filtered.filter(article => 
        article.region.toLowerCase() === region.toLowerCase()
      );
    }
    
    return filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } catch (error) {
    console.error('Error getting articles:', error);
    return [];
  }
}

export async function getArticleById(id) {
  try {
    return articles.get(id) || null;
  } catch (error) {
    console.error('Error getting article by ID:', error);
    return null;
  }
}