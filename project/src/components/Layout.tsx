import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Header from './Header';
import ChatButton from './ChatButton';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setIsMenuOpen(!isMenuOpen)} />
      <div className="flex flex-col md:flex-row">
        <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <main className="flex-1 p-4 md:p-6 pt-4">
          <Outlet />
        </main>
      </div>
      <ChatButton />
    </div>
  );
};

export default Layout;