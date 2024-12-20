import React from 'react';
import BackButton from '../ui/BackButton';

interface PageHeaderProps {
  title: string;
  showBack?: boolean;
  children?: React.ReactNode;
}

export default function PageHeader({ title, showBack = true, children }: PageHeaderProps) {
  return (
    <div className="mb-6">
      {showBack && (
        <div className="mb-4">
          <BackButton />
        </div>
      )}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        {children}
      </div>
    </div>
  );
}