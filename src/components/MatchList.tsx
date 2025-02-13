import React from 'react';
import { Calendar, Star } from 'lucide-react';

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  time: string;
  tournament: string;
  status: 'scheduled' | 'live' | 'finished';
  stage?: string;
}

interface MatchListProps {
  matches: Match[];
  title?: string;
}

function MatchList({ matches, title }: MatchListProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      {title && (
        <div className="px-4 py-3 border-b border-gray-200">
          <h2 className="text-lg font-semibold flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-green-600" />
            <span>{title}</span>
          </h2>
        </div>
      )}
      
      <div className="divide-y divide-gray-200">
        {matches.map((match) => (
          <div key={match.id} className="px-4 py-3 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">{match.tournament}</span>
                  <Star className="w-4 h-4 text-gray-400 hover:text-yellow-400 cursor-pointer" />
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex-1 text-right">{match.homeTeam}</div>
                  <div className="flex items-center space-x-2">
                    {match.status === 'live' ? (
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm font-medium">
                        {match.homeScore} - {match.awayScore}
                      </span>
                    ) : match.status === 'finished' ? (
                      <span className="text-gray-900 font-medium">
                        {match.homeScore} - {match.awayScore}
                      </span>
                    ) : (
                      <span className="text-gray-600">{match.time}</span>
                    )}
                  </div>
                  <div className="flex-1">{match.awayTeam}</div>
                </div>
                
                {match.stage && (
                  <div className="mt-1 text-sm text-gray-500">{match.stage}</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatchList;