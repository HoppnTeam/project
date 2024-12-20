import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="text-center py-8 text-red-600">
      <div className="flex items-center justify-center space-x-2">
        <AlertCircle className="w-5 h-5" />
        <p>{message}</p>
      </div>
    </div>
  );
}