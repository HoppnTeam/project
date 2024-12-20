import { Article } from '../types/article';

export const mockArticles: Record<string, Article[]> = {
  'news-politics': [
    {
      id: 1,
      title: "Global Climate Summit Reaches Historic Agreement",
      category: "News & Politics",
      region: "Europe",
      image: "https://images.unsplash.com/photo-1623177623442-979c1e42c255?auto=format&fit=crop&w=800",
      excerpt: "World leaders unite in unprecedented commitment to combat climate change...",
      date: "2024-03-15"
    },
    {
      id: 2,
      title: "African Union Announces Major Infrastructure Initiative",
      category: "News & Politics",
      region: "Africa",
      image: "https://images.unsplash.com/photo-1518310952931-b1de897abd40?auto=format&fit=crop&w=800",
      excerpt: "Landmark project to connect major African cities through sustainable infrastructure...",
      date: "2024-03-14"
    },
    {
      id: 3,
      title: "Caribbean Nations Lead Ocean Conservation Effort",
      category: "News & Politics",
      region: "Caribbean",
      image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800",
      excerpt: "New marine protection agreement sets precedent for ocean conservation...",
      date: "2024-03-13"
    }
  ],
  'entertainment': [
    {
      id: 4,
      title: "African Film Festival Celebrates Rising Stars",
      category: "Entertainment",
      region: "Africa",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800",
      excerpt: "Emerging filmmakers showcase groundbreaking narratives at premier festival...",
      date: "2024-03-15"
    },
    {
      id: 5,
      title: "Caribbean Music Awards Make History",
      category: "Entertainment",
      region: "Caribbean",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800",
      excerpt: "Record-breaking viewership for annual celebration of Caribbean music...",
      date: "2024-03-14"
    }
  ],
  'cultures': [
    {
      id: 6,
      title: "Indigenous Art Exhibition Opens in Americas",
      category: "Cultures",
      region: "Americas",
      image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=800",
      excerpt: "Groundbreaking exhibition showcases contemporary indigenous artists...",
      date: "2024-03-15"
    },
    {
      id: 7,
      title: "European Cultural Heritage Sites Get Digital Makeover",
      category: "Cultures",
      region: "Europe",
      image: "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?auto=format&fit=crop&w=800",
      excerpt: "Virtual reality brings historic sites to life for global audience...",
      date: "2024-03-14"
    }
  ],
  'sports': [
    {
      id: 8,
      title: "African Athletes Dominate World Championships",
      category: "Sports",
      region: "Africa",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800",
      excerpt: "Record-breaking performances at international athletics event...",
      date: "2024-03-15"
    },
    {
      id: 9,
      title: "Caribbean Cricket League Expands",
      category: "Sports",
      region: "Caribbean",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800",
      excerpt: "New teams and increased investment mark major expansion...",
      date: "2024-03-14"
    }
  ],
  'technology': [
    {
      id: 10,
      title: "European Tech Hub Launches AI Initiative",
      category: "Technology",
      region: "Europe",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800",
      excerpt: "Major investment in artificial intelligence research and development...",
      date: "2024-03-15"
    },
    {
      id: 11,
      title: "Americas Lead in Quantum Computing Breakthrough",
      category: "Technology",
      region: "Americas",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",
      excerpt: "Revolutionary quantum computing advancement promises new possibilities...",
      date: "2024-03-14"
    }
  ],
  'business': [
    {
      id: 12,
      title: "African Startups Attract Record Investment",
      category: "Business",
      region: "Africa",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800",
      excerpt: "Venture capital funding in African tech sector reaches new heights...",
      date: "2024-03-15"
    },
    {
      id: 13,
      title: "Caribbean Tourism Industry Innovation",
      category: "Business",
      region: "Caribbean",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800",
      excerpt: "Sustainable tourism initiatives transform regional economy...",
      date: "2024-03-14"
    }
  ],
  'travel': [
    {
      id: 14,
      title: "Hidden Gems of the Americas Revealed",
      category: "Travel",
      region: "Americas",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800",
      excerpt: "Undiscovered destinations gaining popularity among travelers...",
      date: "2024-03-15"
    },
    {
      id: 15,
      title: "European Eco-Tourism Revolution",
      category: "Travel",
      region: "Europe",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800",
      excerpt: "Sustainable travel initiatives transform tourism industry...",
      date: "2024-03-14"
    }
  ],
  'youth': [
    {
      id: 16,
      title: "African Youth Lead Climate Innovation",
      category: "Youth",
      region: "Africa",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800",
      excerpt: "Young entrepreneurs pioneer environmental solutions...",
      date: "2024-03-15"
    },
    {
      id: 17,
      title: "Caribbean Youth Digital Skills Program",
      category: "Youth",
      region: "Caribbean",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800",
      excerpt: "Regional initiative boosts tech education accessibility...",
      date: "2024-03-14"
    }
  ]
};