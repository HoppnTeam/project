import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Bell, Clock, Filter } from 'lucide-react';

interface Notification {
  id: number;
  type: 'breaking' | 'update' | 'follow';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: 1,
    type: 'breaking',
    title: 'Breaking News',
    message: 'Global Climate Summit reaches historic agreement',
    timestamp: '2024-03-15T10:00:00Z',
    read: false,
  },
  {
    id: 2,
    type: 'update',
    title: 'Article Update',
    message: 'New developments in the tech industry story',
    timestamp: '2024-03-15T09:30:00Z',
    read: true,
  },
  {
    id: 3,
    type: 'follow',
    title: 'New Article',
    message: 'New article in Technology category',
    timestamp: '2024-03-15T09:00:00Z',
    read: true,
  },
];

export default function NotificationsPage() {
  const { user } = useAuth0();
  const [filter, setFilter] = React.useState<'all' | 'unread'>('all');
  const [notifications, setNotifications] = React.useState(mockNotifications);

  const filteredNotifications = filter === 'all'
    ? notifications
    : notifications.filter(n => !n.read);

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(n => ({ ...n, read: true }))
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <Bell className="w-6 h-6 text-gold" />
            <h1 className="text-3xl font-bold">Notifications</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                className="px-3 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                value={filter}
                onChange={(e) => setFilter(e.target.value as 'all' | 'unread')}
              >
                <option value="all">All</option>
                <option value="unread">Unread</option>
              </select>
            </div>
            <button
              onClick={markAllAsRead}
              className="text-gold hover:text-black transition-colors"
            >
              Mark all as read
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`bg-white rounded-lg shadow-lg p-4 ${
                !notification.read ? 'border-l-4 border-gold' : ''
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold">{notification.title}</span>
                    {!notification.read && (
                      <span className="bg-gold text-black text-xs px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">{notification.message}</p>
                  <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{new Date(notification.timestamp).toLocaleString()}</span>
                  </div>
                </div>
                {!notification.read && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="text-gold hover:text-black transition-colors text-sm"
                  >
                    Mark as read
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}