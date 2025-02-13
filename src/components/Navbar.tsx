import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Timer, Trophy, Video, MessageCircle, Menu, Crown } from 'lucide-react';

function Navbar() {
  return (
    <div className="flex flex-col">
      <nav className="bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="365Football" className="w-8 h-8" />
              <span className="text-xl font-bold">365Football</span>
            </Link>
            
            <div className="flex space-x-6">
              <Link to="/news" className="flex items-center space-x-1 hover:text-green-200 transition-colors">
                <Newspaper className="w-5 h-5" />
                <span>Новости</span>
              </Link>
              
              <Link to="/matches" className="flex items-center space-x-1 hover:text-green-200 transition-colors">
                <Timer className="w-5 h-5" />
                <span>Матчи</span>
              </Link>
              
              <Link to="/tournaments" className="flex items-center space-x-1 hover:text-green-200 transition-colors">
                <Trophy className="w-5 h-5" />
                <span>Соревнования</span>
              </Link>
              
              <Link to="/video" className="flex items-center space-x-1 hover:text-green-200 transition-colors">
                <Video className="w-5 h-5" />
                <span>Видео</span>
              </Link>
              
              <Link to="/community" className="flex items-center space-x-1 hover:text-green-200 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>Общение</span>
              </Link>
              
              <div className="flex items-center space-x-1 hover:text-green-200 transition-colors cursor-pointer">
                <Menu className="w-5 h-5" />
                <span>Разное</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/predictions" className="flex items-center space-x-1 bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition-colors">
                <Crown className="w-5 h-5" />
                <span>Конкурс прогнозов</span>
              </Link>
              
              <button className="px-3 py-1 border border-white rounded hover:bg-green-600 transition-colors">
                Войти
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-blue-600 hover:underline">Soccer365</Link>
            <span>›</span>
            <span className="text-gray-600">Футбол онлайн сегодня</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;