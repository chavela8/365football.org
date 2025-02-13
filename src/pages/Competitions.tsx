import React from 'react';
import CompetitionsList from '../components/CompetitionsList';

const mockCompetitions = [
  {
    id: 'world-cup',
    name: 'Чемпионат мира',
    type: 'international' as const,
  },
  {
    id: 'champions-league',
    name: 'Лига чемпионов УЕФА',
    type: 'international' as const,
  },
  {
    id: 'premier-league',
    name: 'Премьер-Лига',
    type: 'league' as const,
    country: {
      name: 'Англия',
      flag: 'https://example.com/flags/england.png'
    }
  },
  {
    id: 'la-liga',
    name: 'Примера',
    type: 'league' as const,
    country: {
      name: 'Испания',
      flag: 'https://example.com/flags/spain.png'
    }
  },
  {
    id: 'bundesliga',
    name: 'Бундеслига',
    type: 'league' as const,
    country: {
      name: 'Германия',
      flag: 'https://example.com/flags/germany.png'
    }
  }
];

function Competitions() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Соревнования</h1>
        <p className="text-gray-600 mt-1">
          Все футбольные турниры, чемпионаты и кубки
        </p>
      </div>
      
      <CompetitionsList competitions={mockCompetitions} />
    </div>
  );
}

export default Competitions;