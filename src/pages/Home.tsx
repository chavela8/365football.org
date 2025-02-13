import React from 'react';
import MatchList from '../components/MatchList';
import NewsCard from '../components/NewsCard';
import LeagueTable from '../components/LeagueTable';
import TopScorers from '../components/TopScorers';
import VideoPlayer from '../components/VideoPlayer';

const mockMatches = [
  {
    id: '1',
    homeTeam: 'Реал Мадрид',
    awayTeam: 'Барселона',
    time: '22:00',
    tournament: 'Ла Лига',
    status: 'scheduled' as const,
    stage: '23-й тур'
  },
  {
    id: '2',
    homeTeam: 'Ливерпуль',
    awayTeam: 'Манчестер Сити',
    homeScore: 2,
    awayScore: 1,
    time: '90+3\'',
    tournament: 'Премьер-Лига',
    status: 'live' as const
  }
];

const mockScorers = [
  {
    id: '1',
    name: 'Роберт Левандовски',
    team: 'Барселона',
    goals: 18,
    assists: 2,
    matches: 21,
    rating: 8.2,
    image: 'https://example.com/lewandowski.jpg'
  },
  {
    id: '2',
    name: 'Килиан Мбаппе',
    team: 'ПСЖ',
    goals: 15,
    assists: 5,
    matches: 20,
    rating: 8.5,
    image: 'https://example.com/mbappe.jpg'
  }
];

const mockTeams = [
  {
    position: 1,
    name: 'Реал Мадрид',
    played: 22,
    won: 15,
    drawn: 4,
    lost: 3,
    goalsFor: 50,
    goalsAgainst: 21,
    goalDifference: 29,
    points: 49
  }
];

function Home() {
  const handleVideoPlay = (videoId: string) => {
    console.log('Playing video:', videoId);
    // Здесь будет логика воспроизведения видео
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <MatchList matches={mockMatches} title="Сегодняшние матчи" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NewsCard
              title="УЕФА может отменить дополнительное время в плей-офф Лиги чемпионов"
              content="Союз европейских футбольных ассоциаций (УЕФА) рассматривает вариант с отменой дополнительного времени в матчах плей-офф Лиги чемпионов в случае ничейного результата по сумме двух игр."
              source="sovsport.ru"
              commentsCount={3}
              timeAgo="2 часа назад"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <VideoPlayer
              title="Гол Мбаппе в ворота Реал Мадрида"
              thumbnail="https://example.com/thumbnail.jpg"
              duration="2:30"
              views={15000}
              date="2 часа назад"
              rating={8.5}
              onPlay={() => handleVideoPlay('video1')}
            />
          </div>
        </div>
        
        <div className="lg:col-span-4 space-y-6">
          <LeagueTable teams={mockTeams} title="Ла Лига 2023/24" />
          <TopScorers scorers={mockScorers} />
        </div>
      </div>
    </div>
  );
}

export default Home;