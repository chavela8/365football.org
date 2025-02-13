import React from 'react';
import { Trophy } from 'lucide-react';

interface CountryRating {
  position: number;
  country: string;
  flag: string;
  points: number;
  previousPoints: number;
  change: number;
  coefficients: {
    current: string;
    next: string;
  }[];
}

interface RatingTableProps {
  ratings: CountryRating[];
  season: string;
}

function RatingTable({ ratings, season }: RatingTableProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Рейтинг УЕФА</h2>
          <span className="text-sm text-gray-600">{season}</span>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Позиция
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Страна
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Очки
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Изменение
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Коэффициенты
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {ratings.map((rating) => (
              <tr key={rating.country} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-900">{rating.position}</span>
                    {rating.position <= 3 && (
                      <Trophy className="w-4 h-4 ml-1 text-yellow-400" />
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <img 
                      src={rating.flag} 
                      alt={rating.country}
                      className="w-5 h-4 mr-2"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {rating.country}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-900">
                  {rating.points.toFixed(3)}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-center">
                  <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                    rating.change > 0 
                      ? 'bg-green-100 text-green-800'
                      : rating.change < 0
                      ? 'bg-red-100 text-red-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {rating.change > 0 ? '+' : ''}{rating.change}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                  <div className="flex items-center justify-center space-x-2">
                    {rating.coefficients.map((coef, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-gray-600">{coef.current}</span>
                        <span className="mx-1 text-gray-400">/</span>
                        <span className="text-gray-900">{coef.next}</span>
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RatingTable;