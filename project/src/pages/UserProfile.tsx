import React from 'react';
import { User, Phone, Mail, FileText, Calendar } from 'lucide-react';
import type { UserProfile } from '../types';

const mockUser: UserProfile = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 234 567 8900',
  avatar:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  medicalHistory: ['Allergies', 'Annual Checkup - 2024'],
  appointments: ['Dental Checkup - March 15, 2025'],
  prescriptions: ['Prescription #123 - Feb 10, 2025'],
};

const UserProfilePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 p-6">
            <div className="flex items-center">
              <img
                src={mockUser.avatar}
                alt={mockUser.name}
                className="w-24 h-24 rounded-full border-4 border-white"
              />
              <div className="ml-6">
                <h1 className="text-2xl font-bold text-white">
                  {mockUser.name}
                </h1>
                <p className="text-blue-100">Patient ID: {mockUser.id}</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">
                  Personal Information
                </h2>

                <div className="flex items-center">
                  <Mail className="text-gray-400 mr-3" size={20} />
                  <span>{mockUser.email}</span>
                </div>

                <div className="flex items-center">
                  <Phone className="text-gray-400 mr-3" size={20} />
                  <span>{mockUser.phone}</span>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Medical History</h2>
                <ul className="space-y-2">
                  {mockUser.medicalHistory?.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <FileText className="text-gray-400 mr-3" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">
                Upcoming Appointments
              </h2>
              <div className="space-y-3">
                {mockUser.appointments?.map((appointment, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-blue-50 p-3 rounded-lg"
                  >
                    <Calendar className="text-blue-500 mr-3" size={20} />
                    <span>{appointment}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">
                Recent Prescriptions
              </h2>
              <div className="space-y-3">
                {mockUser.prescriptions?.map((prescription, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-green-50 p-3 rounded-lg"
                  >
                    <FileText className="text-green-500 mr-3" size={20} />
                    <span>{prescription}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
