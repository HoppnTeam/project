import React from 'react';

export default function BreakingNews() {
  return (
    <div className="bg-red text-white py-2 px-4">
      <div className="container mx-auto">
        <div className="flex items-center space-x-4">
          <span className="font-bold uppercase tracking-wider">Breaking News</span>
          <span className="animate-pulse">●</span>
          <p className="truncate">Global Summit Reaches Historic Climate Agreement - World Leaders Pledge Immediate Action</p>
        </div>
      </div>
    </div>
  );
}