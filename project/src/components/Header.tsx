import React from 'react';
import { Bell, User, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-blue-600 ">
              <a href="/dashboard"> HealthCare Hub</a>
            </h1>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
            </button>
            <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100">
              <User className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
              <span className="hidden md:inline text-sm font-medium text-gray-700">
                John Doe
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
