// PatientRecordsPage.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, User, Calendar, Activity } from 'lucide-react';

// Export the Patient interface
export interface Patient {
  id: string;
  name: string;
  age: number;
  lastVisit: string;
  condition: string;
}

const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'Emma Thompson',
    age: 32,
    lastVisit: '2024-03-15',
    condition: 'Hypertension'
  },
  {
    id: '2',
    name: 'James Wilson',
    age: 45,
    lastVisit: '2024-03-10',
    condition: 'Diabetes Type 2'
  },
  {
    id: '3',
    name: 'Sophie Chen',
    age: 28,
    lastVisit: '2024-03-18',
    condition: 'Asthma'
  }
];

export function PatientRecordsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [patients] = useState<Patient[]>(mockPatients);
  const navigate = useNavigate();

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (patient: Patient) => {
    navigate('/dashboardlayout/patient-details', { state: { patient } });
  };
  
  return (
    <div className="space-y-6 p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <h3 className="text-lg font-medium text-gray-900">Patient Records</h3>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Search patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full sm:w-auto">
            <Filter className="h-5 w-5 mr-2 text-gray-500" />
            Filter
          </button>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden rounded-md">
        <ul className="divide-y divide-gray-200">
          {filteredPatients.map((patient) => (
            <li key={patient.id} className="block hover:bg-gray-50">
              <div className="block sm:flex items-center sm:items-start px-4 py-4 sm:px-6">
                <div className="flex items-center mb-4 sm:mb-0">
                  <User className="h-8 w-8 rounded-full bg-gray-100 p-1 text-gray-500" />
                  <div className="ml-4">
                    <p className="font-medium text-indigo-600 truncate">{patient.name}</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Age: {patient.age}
                    </p>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                    Last Visit: {patient.lastVisit}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Activity className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                    Condition: {patient.condition}
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-auto flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => handleViewDetails(patient)}
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full sm:w-auto"
                  >
                    View Details
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
