import React, { useState } from 'react';
import { Search } from 'lucide-react';
import type { Medicine } from '../types';
import PrescriptionUpload from '../components/PrescriptionUpload'; // Import the component

const mockMedicines: Medicine[] = [
  {
    id: '1',
    name: 'Paracetamol 500mg',
    price: 5.99,
    description: 'Pain relief and fever reduction',
    image:
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    category: 'Pain Relief',
    inStock: true,
  },
  {
    id: '2',
    name: 'Vitamin C 1000mg',
    price: 12.99,
    description: 'Immune system support',
    image:
      'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=800',
    category: 'Vitamins',
    inStock: true,
  },
];

const MedicineStore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  const filteredMedicines = mockMedicines.filter((medicine) => {
    const matchesSearch = medicine.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || medicine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(mockMedicines.map((m) => m.category)));

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Medicine Store</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search medicines..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>

        <select
          className="px-4 py-2 border rounded-lg"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={openModal}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
      >
        Upload Prescription
      </button>

      <PrescriptionUpload isOpen={isModalOpen} onClose={closeModal} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMedicines.map((medicine) => (
          <div
            key={medicine.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={medicine.image}
              alt={medicine.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{medicine.name}</h2>
              <p className="text-gray-600 mb-2">{medicine.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-blue-600">
                  ${medicine.price}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    medicine.inStock
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {medicine.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicineStore;
