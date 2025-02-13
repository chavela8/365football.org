import React from 'react';
import { MessageCircle, Clock } from 'lucide-react';

interface NewsCardProps {
  title: string;
  content: string;
  image?: string;
  source: string;
  commentsCount: number;
  timeAgo: string;
}

function NewsCard({ title, content, image, source, commentsCount, timeAgo }: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4">
        {image && (
          <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
        )}
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">{content}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <span>{source}</span>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{timeAgo}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <MessageCircle className="w-4 h-4" />
            <span>{commentsCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;