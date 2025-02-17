import React, { useState } from 'react';
import { Star } from 'lucide-react';
import type { Review } from '../types';

const mockReviews: Review[] = [
  {
    id: '1',
    userId: 'user1',
    entityId: '1',
    entityType: 'hospital',
    rating: 4,
    comment: 'Excellent facilities and caring staff',
    createdAt: '2025-02-15T10:00:00Z',
  },
  {
    id: '2',
    userId: 'user2',
    entityId: '2',
    entityType: 'doctor',
    rating: 5,
    comment: 'Very professional and knowledgeable',
    createdAt: '2025-02-14T15:30:00Z',
  },
];

const WellnessReviews = () => {
  const [filter, setFilter] = useState<'all' | 'hospital' | 'doctor'>('all');

  const filteredReviews = mockReviews.filter(
    (review) => filter === 'all' || review.entityType === filter
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Wellness Reviews</h1>

      <div className="mb-6">
        <select
          className="px-4 py-2 border rounded-lg"
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value as 'all' | 'hospital' | 'doctor')
          }
        >
          <option value="all">All Reviews</option>
          <option value="hospital">Hospital Reviews</option>
          <option value="doctor">Doctor Reviews</option>
        </select>
      </div>

      <div className="space-y-6">
        {filteredReviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < review.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }
                  />
                ))}
              </div>
              <span className="text-gray-500">
                {new Date(review.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700 mb-2">{review.comment}</p>
            <div className="text-sm text-gray-500">
              Review for:{' '}
              {review.entityType.charAt(0).toUpperCase() +
                review.entityType.slice(1)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WellnessReviews;
