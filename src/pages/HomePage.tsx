import React from 'react';
import NewsGrid from '../components/NewsGrid';
import TrendingSidebar from '../components/TrendingSidebar';
import DiscoverSection from '../components/discover/DiscoverSection';

export default function HomePage() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6">Featured Stories</h2>
            <NewsGrid />
          </div>
          <div className="lg:col-span-1">
            <TrendingSidebar />
          </div>
        </div>
      </div>
      <DiscoverSection />
    </>
  );
}