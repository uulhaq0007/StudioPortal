import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit2, User } from 'lucide-react';
import { EventModal } from './EventModal';

const mockEvent = {
  id: 1,
  name: 'Salsa Night - Beginner Friendly Social Dance',
  date: '2026-03-15',
  time: '7:00 PM - 11:00 PM',
  location: 'Downtown Dance Studio, 123 Main St, New York, NY',
  styles: ['Salsa', 'Bachata'],
  isDraft: true,
  type: 'Single',
  level: 'Beginner',
  capacity: 36,
  cost: '$15',
  rsvpRequired: true,
  description: 'Join us for an unforgettable night of Salsa dancing! This event is perfect for beginners and experienced dancers alike. Our professional instructors will guide you through the basics and help you master new moves. The evening includes a beginner lesson from 7-8 PM, followed by open social dancing until 11 PM. Come solo or bring friends - everyone is welcome!',
};

const mockRSVPs = [
  { id: 1, name: 'Sarah Johnson', date: 'Jan 3, 2026', roles: ['Instructor'] },
  { id: 2, name: 'Mike Chen', date: 'Jan 4, 2026', roles: [] },
  { id: 3, name: 'Emma Davis', date: 'Jan 5, 2026', roles: ['Co-host'] },
  { id: 4, name: 'Carlos Rodriguez', date: 'Jan 5, 2026', roles: ['DJ'] },
];

export function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'updates', label: 'Updates' },
    { id: 'photos', label: 'Photos' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'rsvps', label: 'RSVPs' },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      <button
        onClick={() => navigate('/events')}
        className="flex items-center gap-2 text-[#a0a0b8] hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Events
      </button>

      {/* Event Header */}
      <div className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42]">
        <div className="flex items-start justify-between mb-4">
          <div>
            {mockEvent.isDraft && (
              <span className="inline-block px-2 py-0.5 bg-[#8b5cf6]/20 text-[#8b5cf6] text-xs rounded mb-2">
                DRAFT
              </span>
            )}
            <h1 className="text-2xl mb-2">{mockEvent.name}</h1>
            <p className="text-[#a0a0b8]">{mockEvent.date} • {mockEvent.time}</p>
          </div>
          <button
            onClick={() => setIsEditModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#8b5cf6] text-white rounded-lg hover:bg-[#7c3aed] transition-colors"
          >
            <Edit2 className="w-4 h-4" />
            EDIT
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-[#2d2d42] -mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 relative transition-colors ${
                activeTab === tab.id ? 'text-white' : 'text-[#a0a0b8] hover:text-white'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8b5cf6]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42] space-y-6">
          <div>
            <h3 className="text-sm text-[#a0a0b8] mb-2">Location</h3>
            <p>{mockEvent.location}</p>
          </div>

          <div>
            <h3 className="text-sm text-[#a0a0b8] mb-2">Dance Styles</h3>
            <div className="flex flex-wrap gap-2">
              {mockEvent.styles.map((style) => (
                <span
                  key={style}
                  className="px-3 py-1.5 bg-[#8b5cf6]/20 text-[#8b5cf6] rounded-full text-sm"
                >
                  {style}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm text-[#a0a0b8] mb-2">Event Type</h3>
            <p>{mockEvent.type}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm text-[#a0a0b8] mb-2">Level</h3>
              <p>{mockEvent.level}</p>
            </div>
            <div>
              <h3 className="text-sm text-[#a0a0b8] mb-2">Capacity</h3>
              <p>{mockEvent.capacity}</p>
            </div>
            <div>
              <h3 className="text-sm text-[#a0a0b8] mb-2">Cost</h3>
              <p>{mockEvent.cost}</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm text-[#a0a0b8] mb-2">RSVP Required</h3>
            <p>{mockEvent.rsvpRequired ? 'Yes' : 'No'}</p>
          </div>

          <div>
            <h3 className="text-sm text-[#a0a0b8] mb-2">Description</h3>
            <p className="text-[#a0a0b8] leading-relaxed">{mockEvent.description}</p>
          </div>
        </div>
      )}

      {activeTab === 'rsvps' && (
        <div className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42]">
          <h2 className="text-xl mb-6">RSVPs ({mockRSVPs.length})</h2>
          <div className="space-y-4">
            {mockRSVPs.map((rsvp) => (
              <div
                key={rsvp.id}
                className="flex items-center justify-between p-4 bg-[#1a1a2e] rounded-lg border border-[#2d2d42]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#8b5cf6]/20 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-[#8b5cf6]" />
                  </div>
                  <div>
                    <h4>{rsvp.name}</h4>
                    <p className="text-sm text-[#a0a0b8]">{rsvp.date}</p>
                  </div>
                </div>
                {rsvp.roles.length > 0 && (
                  <div className="flex gap-2">
                    {rsvp.roles.map((role) => (
                      <span
                        key={role}
                        className="px-2 py-1 bg-[#8b5cf6]/20 text-[#8b5cf6] rounded text-xs"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'updates' && (
        <div className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42]">
          <p className="text-center text-[#a0a0b8] py-8">No updates yet</p>
        </div>
      )}

      {activeTab === 'photos' && (
        <div className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42]">
          <p className="text-center text-[#a0a0b8] py-8">No photos yet</p>
        </div>
      )}

      {activeTab === 'reviews' && (
        <div className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42]">
          <p className="text-center text-[#a0a0b8] py-8">No reviews yet</p>
        </div>
      )}

      <EventModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        event={mockEvent}
      />
    </div>
  );
}
