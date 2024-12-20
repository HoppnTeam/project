import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from './components/Header';
import MainNav from './components/navigation/MainNav';
import BreakingNews from './components/BreakingNews';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { useThemeStore } from './stores/useThemeStore';

export default function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors duration-200`}>
        <Header />
        <MainNav />
        <BreakingNews />
        <AppRoutes />
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}