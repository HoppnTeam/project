import React, { useState } from 'react';
import { Calendar as CalendarIcon, MapPin, Clock, Users, Plus } from 'lucide-react';
import { Event } from '../../types/community';
import EventForm from './forms/EventForm';

interface EventsCalendarProps {
  region: string;
}

export default function EventsCalendar({ region }: EventsCalendarProps) {
  const [showEventForm, setShowEventForm] = useState(false);
  const [events, setEvents] = useState<Event[]>([]); // In real app, fetch from API

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Community Events</h2>
        <button
          onClick={() => setShowEventForm(true)}
          className="flex items-center space-x-2 bg-gold text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Submit Event</span>
        </button>
      </div>

      {/* Featured Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {events.filter(event => event.isFeatured).map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-gold text-sm font-semibold">{event.category}</span>
              <h3 className="text-xl font-bold mt-2">{event.title}</h3>
              <p className="text-gray-600 mt-2">{event.description}</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-500">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{event.attendees} attending</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Event Submission Form Modal */}
      {showEventForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <EventForm onClose={() => setShowEventForm(false)} onSubmit={(data) => {
              // Handle event submission
              setShowEventForm(false);
            }} />
          </div>
        </div>
      )}
    </div>
  );
}