import React, { useState } from 'react';
import { Store, MapPin, Phone, Globe, Star, Plus, Check } from 'lucide-react';
import { Business } from '../../types/community';
import BusinessForm from './forms/BusinessForm';

interface BusinessDirectoryProps {
  region: string;
}

export default function BusinessDirectory({ region }: BusinessDirectoryProps) {
  const [showBusinessForm, setShowBusinessForm] = useState(false);
  const [businesses, setBusinesses] = useState<Business[]>([]); // In real app, fetch from API

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Business Directory</h2>
        <button
          onClick={() => setShowBusinessForm(true)}
          className="flex items-center space-x-2 bg-gold text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Add Business</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((business) => (
          <div key={business.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={business.image}
              alt={business.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gold text-sm font-semibold">{business.category}</span>
                {business.isVerified && (
                  <span className="flex items-center text-green-600 text-sm">
                    <Check className="w-4 h-4 mr-1" />
                    Verified
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold">{business.name}</h3>
              <p className="text-gray-600 mt-2">{business.description}</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{business.address}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{business.phone}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Globe className="w-4 h-4 mr-2" />
                  <a href={business.website} className="text-gold hover:underline">
                    Visit Website
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-gold mr-1" />
                    <span>{business.rating} ({business.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Business Submission Form Modal */}
      {showBusinessForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <BusinessForm onClose={() => setShowBusinessForm(false)} onSubmit={(data) => {
              // Handle business submission
              setShowBusinessForm(false);
            }} />
          </div>
        </div>
      )}
    </div>
  );
}