import React from 'react';
import { TrendingUp } from 'lucide-react';

const trendingTopics = [
  {
    id: 1,
    title: "Space Tourism Takes Off: First Commercial Flight Success",
    views: "234K"
  },
  {
    id: 2,
    title: "AI Revolution in Healthcare: New Diagnostic Tools",
    views: "198K"
  },
  {
    id: 3,
    title: "Global Sports Event Sets Viewership Record",
    views: "156K"
  },
  // Add more trending topics
];

export default function TrendingSidebar() {
  return (
    <aside className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <TrendingUp className="text-gold h-6 w-6" />
        <h2 className="text-xl font-bold">Trending Now</h2>
      </div>
      <div className="space-y-4">
        {trendingTopics.map((topic, index) => (
          <div key={topic.id} className="flex items-start space-x-4">
            <span className="text-2xl font-bold text-gold">{index + 1}</span>
            <div>
              <h3 className="font-semibold hover:text-gold cursor-pointer">
                {topic.title}
              </h3>
              <span className="text-sm text-gray-500">{topic.views} views</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}