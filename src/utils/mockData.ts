import { ArticleFull, Comment } from '../types/article';

export const mockArticle: ArticleFull = {
  id: 1,
  title: "Global Climate Summit Reaches Historic Agreement",
  category: "News & Politics",
  region: "Europe",
  image: "https://images.unsplash.com/photo-1623177623442-979c1e42c255?auto=format&fit=crop&w=1920",
  excerpt: "World leaders unite in unprecedented commitment to combat climate change...",
  date: "2024-03-15",
  content: `
    <p>In a historic moment for global climate action, world leaders from over 190 countries have reached a groundbreaking agreement at the latest Climate Summit. The unprecedented accord sets ambitious targets for reducing greenhouse gas emissions and establishes a framework for international cooperation in addressing the climate crisis.</p>

    <blockquote>
      "This is a defining moment in humanity's fight against climate change. The agreement demonstrates our collective commitment to preserving our planet for future generations." - UN Secretary-General
    </blockquote>

    <h2>Key Points of the Agreement</h2>
    <p>The agreement includes several groundbreaking commitments:</p>
    <ul>
      <li>50% reduction in global emissions by 2030</li>
      <li>Establishment of a $100 billion climate fund</li>
      <li>Mandatory carbon pricing mechanisms</li>
      <li>Investment in renewable energy infrastructure</li>
    </ul>

    <figure>
      <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1920" alt="Renewable Energy Installation" />
      <figcaption>Solar and wind farms will play a crucial role in meeting the new emissions targets</figcaption>
    </figure>
  `,
  author: {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150",
    bio: "Award-winning environmental journalist with over a decade of experience covering climate policy and sustainable development.",
    role: "Senior Environmental Correspondent"
  },
  readingTime: 8,
  tags: ["Climate Change", "Global Politics", "Environment", "Sustainability"],
  relatedArticles: [
    {
      id: 2,
      title: "Renewable Energy Investment Reaches All-Time High",
      category: "Business",
      region: "Americas",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800",
      excerpt: "Global investment in renewable energy projects surpasses fossil fuels...",
      date: "2024-03-14"
    },
    {
      id: 3,
      title: "New Technology Could Revolutionize Carbon Capture",
      category: "Technology",
      region: "Europe",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",
      excerpt: "Breakthrough in carbon capture technology promises to accelerate climate action...",
      date: "2024-03-13"
    }
  ],
  publishedAt: "2024-03-15T09:00:00Z",
  updatedAt: "2024-03-15T11:30:00Z"
};

export const mockComments: Comment[] = [
  {
    id: 1,
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150"
    },
    content: "This is a significant step forward in our fight against climate change. The commitment to renewable energy is particularly promising.",
    createdAt: "2024-03-15T10:30:00Z",
    likes: 24,
    replies: []
  },
  {
    id: 2,
    author: {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150"
    },
    content: "While the agreement is promising, we need to ensure proper implementation and accountability mechanisms are in place.",
    createdAt: "2024-03-15T11:15:00Z",
    likes: 18,
    replies: []
  }
];