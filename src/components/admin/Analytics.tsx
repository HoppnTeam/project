import React from 'react';
import { BarChart, TrendingUp, Users, Clock } from 'lucide-react';

export default function Analytics() {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Views</p>
              <h3 className="text-2xl font-bold">2.4M</h3>
            </div>
            <BarChart className="w-8 h-8 text-gold" />
          </div>
          <p className="text-green-500 text-sm mt-2">+12.5% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Active Users</p>
              <h3 className="text-2xl font-bold">45.2K</h3>
            </div>
            <Users className="w-8 h-8 text-gold" />
          </div>
          <p className="text-green-500 text-sm mt-2">+8.1% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Engagement Rate</p>
              <h3 className="text-2xl font-bold">18.6%</h3>
            </div>
            <TrendingUp className="w-8 h-8 text-gold" />
          </div>
          <p className="text-red-500 text-sm mt-2">-2.3% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Avg. Session</p>
              <h3 className="text-2xl font-bold">4:32</h3>
            </div>
            <Clock className="w-8 h-8 text-gold" />
          </div>
          <p className="text-green-500 text-sm mt-2">+1.2% from last month</p>
        </div>
      </div>

      {/* Traffic Sources */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Traffic Sources</h3>
        <div className="space-y-4">
          {[
            { source: 'Direct', percentage: 35 },
            { source: 'Social Media', percentage: 28 },
            { source: 'Search', percentage: 22 },
            { source: 'Referral', percentage: 15 },
          ].map((source) => (
            <div key={source.source}>
              <div className="flex justify-between mb-1">
                <span>{source.source}</span>
                <span>{source.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gold rounded-full h-2"
                  style={{ width: `${source.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Content */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Popular Content</h3>
        <div className="space-y-4">
          {[
            { title: 'Global Climate Summit Reaches Historic Agreement', views: '125K', engagement: '32K' },
            { title: 'Tech Innovation Transforms Healthcare', views: '98K', engagement: '28K' },
            { title: 'Cultural Festival Draws Record Crowds', views: '76K', engagement: '21K' },
          ].map((content, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b">
              <div>
                <h4 className="font-semibold">{content.title}</h4>
                <div className="flex space-x-4 text-sm text-gray-500">
                  <span>{content.views} views</span>
                  <span>{content.engagement} engagements</span>
                </div>
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}