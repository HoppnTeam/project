import React, { useState } from 'react';
import { Mail, Send, Filter, Download } from 'lucide-react';

export default function NewsletterManagement() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Newsletter Management</h2>
        <button className="flex items-center space-x-2 bg-gold text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
          <Send className="w-5 h-5" />
          <span>New Campaign</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Subscribers</p>
              <h3 className="text-2xl font-bold">12.5K</h3>
            </div>
            <Mail className="w-8 h-8 text-gold" />
          </div>
          <p className="text-green-500 text-sm mt-2">+5.2% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Open Rate</p>
              <h3 className="text-2xl font-bold">68.9%</h3>
            </div>
            <Mail className="w-8 h-8 text-gold" />
          </div>
          <p className="text-green-500 text-sm mt-2">+2.4% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Click Rate</p>
              <h3 className="text-2xl font-bold">24.3%</h3>
            </div>
            <Mail className="w-8 h-8 text-gold" />
          </div>
          <p className="text-red-500 text-sm mt-2">-1.1% from last month</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
        <div className="flex items-center space-x-4">
          <Filter className="w-5 h-5 text-gray-500" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
          >
            <option value="all">All Campaigns</option>
            <option value="draft">Drafts</option>
            <option value="scheduled">Scheduled</option>
            <option value="sent">Sent</option>
          </select>
        </div>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-black">
          <Download className="w-5 h-5" />
          <span>Export Data</span>
        </button>
      </div>

      {/* Campaigns List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipients</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Open Rate</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Click Rate</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[1, 2, 3].map((item) => (
              <tr key={item} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">Weekly Newsletter #45</div>
                  <div className="text-sm text-gray-500">Sent on March 15, 2024</div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Sent
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">12,458</td>
                <td className="px-6 py-4 text-sm text-gray-500">68.9%</td>
                <td className="px-6 py-4 text-sm text-gray-500">24.3%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}