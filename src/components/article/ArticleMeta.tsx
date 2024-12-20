import React from 'react';
import { Clock, Eye, Calendar } from 'lucide-react';
import { formatDate } from '../../utils/dateUtils';
import { formatReadingTime } from '../../utils/textUtils';

interface ArticleMetaProps {
  date: string;
  readingTime: number;
  views?: number;
  className?: string;
}

export default function ArticleMeta({ date, readingTime, views, className = '' }: ArticleMetaProps) {
  return (
    <div className={`flex items-center space-x-4 text-sm text-gray-500 ${className}`}>
      <div className="flex items-center space-x-1">
        <Calendar className="w-4 h-4" />
        <span>{formatDate(date)}</span>
      </div>
      <div className="flex items-center space-x-1">
        <Clock className="w-4 h-4" />
        <span>{formatReadingTime(readingTime)}</span>
      </div>
      {views !== undefined && (
        <div className="flex items-center space-x-1">
          <Eye className="w-4 h-4" />
          <span>{views.toLocaleString()} views</span>
        </div>
      )}
    </div>
  );
}