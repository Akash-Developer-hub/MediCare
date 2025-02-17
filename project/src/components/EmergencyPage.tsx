import React from 'react';
import { Video } from 'lucide-react';

export function EmergencyPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="flex-shrink-0 mb-4 sm:mb-0">
              <Video className="h-8 w-8 text-indigo-600" />
            </div>
            <div className="ml-0 sm:ml-4 text-center sm:text-left">
              <h4 className="text-lg font-medium text-gray-900">Urgent Video Consultation</h4>
              <p className="mt-1 text-sm text-gray-500">
                Connect with an available doctor immediately
              </p>
            </div>
          </div>
          <div className="mt-6">
            <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Start Emergency Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
