import React, { useState } from 'react';
import { Shield, UserX, CheckCircle, Filter } from 'lucide-react';

export default function UserModeration() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">User Moderation</h2>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
        <Filter className="w-5 h-5 text-gray-500" />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
        >
          <option value="all">All Users</option>
          <option value="active">Active</option>
          <option value="suspended">Suspended</option>
          <option value="reported">Reported</option>
        </select>
      </div>

      {/* Users List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reports</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[1, 2, 3].map((item) => (
              <tr key={item} className="hover:bg-gray-50">
                <td className="px-6 py-4 flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32"
                    alt=""
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-900">John Doe</div>
                    <div className="text-sm text-gray-500">john@example.com</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">2024-01-15</td>
                <td className="px-6 py-4 text-sm text-gray-500">0</td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <button className="text-gold hover:text-black">
                      <Shield className="w-5 h-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <UserX className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}