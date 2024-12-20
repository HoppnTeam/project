import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  className?: string;
  label?: string;
}

export default function BackButton({ className = '', label = 'Back' }: BackButtonProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className={`flex items-center space-x-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors ${className}`}
      aria-label="Go back to previous page"
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </button>
  );
}