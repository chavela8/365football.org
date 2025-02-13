import React from 'react';
import { Calendar, Users, Trophy } from 'lucide-react';

interface SeasonStatsProps {
  season: string;
  totalTeams: number;
  matchesPlayed: number;
  totalMatches: number;
  averageGoals: number;
  topScorer: {
    name: string;
    team: string;
    goals: number;
    image?: string;
  };
}

function SeasonStats({
  season,
  totalTeams,
  matchesPlayed,
  totalMatches,
  averageGoals,
  topScorer
}: SeasonStatsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Статистика сезона</h2>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-1" />
            {season}
          </div>
        </div>
      </div>
      
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <div className="flex items-center text-sm text-gray-600 mb-1">
              <Users className="w-4 h-4 mr-1" />
              Команды
            </div>
            <p className="text-2xl font-semibold text-gray-900">{totalTeams}</p>
          </div>
          
          <div>
            <div className="text-sm text-gray-600 mb-1">Сыграно матчей</div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-semibold text-gray-900">{matchesPlayed}</span>
              <span className="text-sm text-gray-500">из {totalMatches}</span>
            </div>
          </div>
          
          <div>
            <div className="text-sm text-gray-600 mb-1">Среднее количество голов</div>
            <p className="text-2xl font-semibold text-gray-900">{averageGoals.toFixed(2)}</p>
          </div>
        </div>
        
        <div className="border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-6">
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <Trophy className="w-4 h-4 mr-1" />
            Лучший бомбардир
          </div>
          
          <div className="flex items-center space-x-3">
            {topScorer.image ? (
              <img
                src={topScorer.image}
                alt={topScorer.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                <Users className="w-8 h-8 text-gray-400" />
              </div>
            )}
            
            <div>
              <h3 className="font-medium text-gray-900">{topScorer.name}</h3>
              <p className="text-sm text-gray-600">{topScorer.team}</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                {topScorer.goals} голов
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeasonStats;