{/* Update AppRoutes to include AdminPage */}
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ArticlePage from './pages/ArticlePage';
import DashboardPage from './pages/DashboardPage';
import SettingsPage from './pages/SettingsPage';
import SavedArticlesPage from './pages/SavedArticlesPage';
import NotificationsPage from './pages/NotificationsPage';
import CommunityPage from './pages/CommunityPage';
import MultimediaPage from './pages/MultimediaPage';
import AdminPage from './pages/AdminPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
      <Route path="/article/:slug" element={<ArticlePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/saved-articles" element={<SavedArticlesPage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/multimedia" element={<MultimediaPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}