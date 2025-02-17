import React, { useState } from 'react';
import { Search } from 'lucide-react';
import type { Hospital } from '../types';

const mockHospitals: Hospital[] = [
  {
    id: '1',
    name: 'Central Medical Center',
    image:
      'https://images.unsplash.com/photo-1587351021759-3e566b35a3e7?auto=format&fit=crop&q=80&w=800',
    specializations: ['Cardiology', 'Neurology', 'Orthopedics'],
    address: '123 Healthcare Ave, Medical District',
    rating: 4.5,
  },
  {
    id: '2',
    name: 'City General Hospital',
    image:
      'https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&q=80&w=800',
    specializations: ['Pediatrics', 'Surgery', 'Oncology'],
    address: '456 Wellness Blvd, Health Square',
    rating: 4.8,
  },
];

const HospitalLocations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');

  const filteredHospitals = mockHospitals.filter((hospital) => {
    const matchesSearch = hospital.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSpecialization =
      !selectedSpecialization ||
      hospital.specializations.includes(selectedSpecialization);
    return matchesSearch && matchesSpecialization;
  });

  const allSpecializations = Array.from(
    new Set(mockHospitals.flatMap((h) => h.specializations))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Find Hospitals</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search hospitals..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>

        <select
          className="px-4 py-2 border rounded-lg"
          value={selectedSpecialization}
          onChange={(e) => setSelectedSpecialization(e.target.value)}
        >
          <option value="">All Specializations</option>
          {allSpecializations.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHospitals.map((hospital) => (
          <div
            key={hospital.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={hospital.image}
              alt={hospital.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{hospital.name}</h2>
              <p className="text-gray-600 mb-2">{hospital.address}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {hospital.specializations.map((spec) => (
                  <span
                    key={spec}
                    className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1">{hospital.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalLocations;
