import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Stethoscope, FileCheck, ClipboardList, MessageSquare, Activity } from 'lucide-react';

export function ConsultationPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <FileText className="h-6 w-6 text-indigo-600" />
              <h3 className="ml-3 text-lg font-medium text-gray-900">View Test Reports</h3>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Access and review patient test results and medical reports
            </p>
            <button
              onClick={() => navigate('/dashboardlayout/view-test-reports')}
              className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              View Reports
            </button>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <MessageSquare className="h-6 w-6 text-indigo-600" />
              <h3 className="ml-3 text-lg font-medium text-gray-900">Patient Chat</h3>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Securely communicate with patients about their health concerns
            </p>
            <button
              onClick={() => navigate('/dashboardlayout/patient-chat')}
              className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Open Chat
            </button>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <ClipboardList className="h-6 w-6 text-indigo-600" />
              <h3 className="ml-3 text-lg font-medium text-gray-900">Medical Notes</h3>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Create and manage detailed consultation notes and observations
            </p>
            <button
              onClick={() => navigate('/dashboardlayout/medical-notes')}
              className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Take Notes
            </button>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <FileCheck className="h-6 w-6 text-indigo-600" />
              <h3 className="ml-3 text-lg font-medium text-gray-900">Update Records</h3>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Update and maintain comprehensive patient health records
            </p>
            <button
              onClick={() => navigate('/dashboardlayout/update-records')}
              className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Update Records
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
