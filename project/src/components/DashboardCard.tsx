import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

interface DashboardCardProps {
  icon: typeof LucideIcon;
  title: string;
  description: string;
  to: string;
  loading?: boolean;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  icon: Icon,
  title,
  description,
  to,
  loading = false,
}) => {
  if (loading) {
    return (
      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm animate-pulse">
        <div className="h-10 w-10 bg-gray-200 rounded-full mb-4" />
        <div className="h-6 bg-gray-200 rounded w-1/2 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-3/4" />
      </div>
    );
  }

  return (
    <Link
      to={to}
      className={clsx(
        "bg-white rounded-xl p-4 md:p-6 shadow-sm",
        "hover:shadow-md transition-shadow group",
        "active:bg-gray-50 touch-none",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      )}
    >
      <Icon className={clsx(
        "h-8 w-8 md:h-10 md:w-10 text-blue-600 mb-3 md:mb-4",
        "group-hover:scale-110 group-active:scale-95",
        "transition-transform duration-200"
      )} />
      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">{title}</h3>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </Link>
  );
};

export default DashboardCard;