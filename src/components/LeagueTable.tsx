import React from 'react';

interface TeamStats {
  position: number;
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

interface LeagueTableProps {
  teams: TeamStats[];
  title: string;
}

function LeagueTable({ teams, title }: LeagueTableProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Поз</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Команда</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">И</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">В</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Н</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">П</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ЗМ</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ПМ</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">+/-</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">О</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {teams.map((team) => (
              <tr key={team.name} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{team.position}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{team.name}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-500">{team.played}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-500">{team.won}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-500">{team.drawn}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-500">{team.lost}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-500">{team.goalsFor}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-500">{team.goalsAgainst}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-500">{team.goalDifference}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-center font-medium text-gray-900">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeagueTable;