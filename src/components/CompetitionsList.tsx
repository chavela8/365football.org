import React from 'react';
import { Trophy, Globe, Star, FolderRoot as Football } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Competition {
  id: string;
  name: string;
  type: 'international' | 'league' | 'cup';
  country?: {
    name: string;
    flag: string;
  };
  icon?: React.ReactNode;
}

interface CompetitionsListProps {
  competitions: Competition[];
}

const getCompetitionIcon = (type: Competition['type']) => {
  switch (type) {
    case 'international':
      return <Globe className="w-5 h-5" />;
    case 'league':
      return <Trophy className="w-5 h-5" />;
    case 'cup':
      return <Star className="w-5 h-5" />;
    default:
      return <Football className="w-5 h-5" />;
  }
};

function CompetitionsList({ competitions }: CompetitionsListProps) {
  const groupedCompetitions = competitions.reduce((acc, competition) => {
    const type = competition.type;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(competition);
    return acc;
  }, {} as Record<Competition['type'], Competition[]>);

  return (
    <div className="space-y-6">
      {Object.entries(groupedCompetitions).map(([type, comps]) => (
        <div key={type} className="bg-white rounded-lg shadow-sm">
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 capitalize">
              {type === 'international' ? 'Международные турниры' :
               type === 'league' ? 'Национальные чемпионаты' :
               'Кубковые турниры'}
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            {comps.map((competition) => (
              <Link
                key={competition.id}
                to={`/tournament/${competition.id}`}
                className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3 flex-1">
                  {competition.icon || getCompetitionIcon(competition.type)}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {competition.name}
                    </h3>
                    {competition.country && (
                      <div className="flex items-center mt-1">
                        <img
                          src={competition.country.flag}
                          alt={competition.country.name}
                          className="w-4 h-3 mr-1"
                        />
                        <span className="text-xs text-gray-500">
                          {competition.country.name}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CompetitionsList;