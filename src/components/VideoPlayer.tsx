import React from 'react';
import { Play, Maximize2 } from 'lucide-react';

interface VideoPlayerProps {
  title: string;
  thumbnail: string;
  duration: string;
  views: number;
  date: string;
  rating?: number;
  onPlay: () => void;
}

function VideoPlayer({ title, thumbnail, duration, views, date, rating, onPlay }: VideoPlayerProps) {
  return (
    <div className="group relative rounded-lg overflow-hidden">
      <div className="aspect-video relative">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            onClick={onPlay}
            className="w-12 h-12 rounded-full bg-white bg-opacity-90 flex items-center justify-center"
          >
            <Play className="w-6 h-6 text-gray-900" />
          </button>
        </div>
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black bg-opacity-75 rounded text-white text-sm">
          {duration}
        </div>
      </div>
      
      <div className="p-3">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
          {title}
        </h3>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-2">
            <span>{views.toLocaleString()} просмотров</span>
            <span>•</span>
            <span>{date}</span>
          </div>
          {rating && (
            <div className="px-2 py-1 bg-green-100 text-green-800 rounded">
              {rating.toFixed(1)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;