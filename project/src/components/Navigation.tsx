import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  UserCircle,
  Calendar,
  Pill,
  Building2,
  Activity,
  Home,
  X,
} from 'lucide-react';
import { clsx } from 'clsx';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  const navItems = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { icon: UserCircle, label: 'Profile', path: '/userprofile' },
    { icon: Calendar, label: 'Appointments', path: '/appointment-booking' },
    { icon: Pill, label: 'Medicine Store', path: '/medicine' },
    { icon: Building2, label: 'Hospitals', path: '/hospital' },
    { icon: Activity, label: 'Wellness', path: '/wellnessreview' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Navigation menu */}
      <nav
        className={clsx(
          'fixed md:static inset-y-0 left-0 transform md:transform-none',
          'w-64 bg-white border-r border-gray-200 p-4',
          'transition-transform duration-200 ease-in-out z-50',
          'md:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <div className="space-y-2">
          {navItems.map(({ icon: Icon, label, path }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => onClose()}
              className={({ isActive }) =>
                clsx(
                  'flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors',
                  'hover:bg-gray-50 active:bg-gray-100',
                  isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                )
              }
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              <span className="font-medium">{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
