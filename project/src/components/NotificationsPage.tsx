import React from 'react';
import { Bell, Calendar, Clock, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface Notification {
  id: string;
  type: 'appointment' | 'reminder' | 'alert';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'appointment',
    title: 'Upcoming Appointment',
    message: 'Appointment with Sarah Johnson tomorrow at 10:00 AM',
    time: '1 hour ago',
    read: false
  },
  {
    id: '2',
    type: 'reminder',
    title: 'Patient Follow-up',
    message: 'Remember to check test results for Michael Chen',
    time: '2 hours ago',
    read: true
  },
  {
    id: '3',
    type: 'alert',
    title: 'Emergency Consultation Request',
    message: 'Urgent consultation requested by Emma Wilson',
    time: '30 minutes ago',
    read: false
  }
];

export function NotificationsPage() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'appointment':
        return <Calendar className="h-6 w-6 text-blue-500" />;
      case 'reminder':
        return <Clock className="h-6 w-6 text-yellow-500" />;
      case 'alert':
        return <AlertCircle className="h-6 w-6 text-red-500" />;
      default:
        return <Bell className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6 p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
          <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full sm:w-auto">
            <CheckCircle className="h-5 w-5 mr-2" />
            Mark All as Read
          </button>
          <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full sm:w-auto">
            <XCircle className="h-5 w-5 mr-2" />
            Clear All
          </button>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden rounded-md">
        <ul className="divide-y divide-gray-200">
          {mockNotifications.map((notification) => (
            <li
              key={notification.id}
              className={`p-4 hover:bg-gray-50 ${
                !notification.read ? 'bg-indigo-50' : ''
              }`}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-shrink-0">
                  {getIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {notification.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {notification.time}
                  </p>
                </div>
                <div className="flex-shrink-0 flex items-center space-x-2">
                  {!notification.read && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      New
                    </span>
                  )}
                  <button className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Dismiss</span>
                    <XCircle className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
