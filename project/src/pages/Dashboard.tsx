import React from 'react';
import { UserCircle, Calendar, Pill, Building2, Activity } from 'lucide-react';
import DashboardCard from '../components/DashboardCard';

const Dashboard: React.FC = () => {
  const cards = [
    {
      icon: UserCircle,
      title: 'User Profile',
      description: 'View and manage your personal health information',
      to: '/userprofile',
    },
    {
      icon: Calendar,
      title: 'Appointments',
      description: 'Schedule and manage your medical appointments',
      to: '/appointment-booking',
    },
    {
      icon: Pill,
      title: 'Medicine Store',
      description: 'Browse and order prescribed medications',
      to: '/medicine',
    },
    {
      icon: Building2,
      title: 'Hospital Locations',
      description: 'Find nearby hospitals and medical facilities',
      to: '/hospital',
    },
    {
      icon: Activity,
      title: 'Wellness Review',
      description: 'Track your health metrics and wellness journey',
      to: '/wellnessreview',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
        Dashboard
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {cards.map((card) => (
          <DashboardCard key={card.to} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
