import React from 'react';
import { User } from 'lucide-react';

interface Scorer {
  id: string;
  name: string;
  team: string;
  goals: number;
  assists: number;
  matches: number;
  rating: number;
  image?: string;
}

interface TopScorersProps {
  scorers: Scorer[];
  title?: string;
}

function TopScorers({ scorers, title = "Бомбардиры" }: TopScorersProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {scorers.map((scorer) => (
          <div key={scorer.id} className="px-4 py-3 flex items-center space-x-3">
            {scorer.image ? (
              <img 
                src={scorer.image} 
                alt={scorer.name} 
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-gray-400" />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{scorer.name}</h3>
                  <p className="text-sm text-gray-500">{scorer.team}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{scorer.goals} голов</p>
                  <p className="text-xs text-gray-500">{scorer.assists} передач</p>
                </div>
              </div>
              <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
                <span>{scorer.matches} матчей</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                  Рейтинг: {scorer.rating.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopScorers;