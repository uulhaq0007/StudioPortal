import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Calendar as CalendarIcon, List } from 'lucide-react';
import { EventModal } from './EventModal';
import { CalendarView } from './CalendarView';

const mockEvents = [
  {
    id: 1,
    name: 'Salsa Night - Beginner Friendly Social Dance',
    date: '2026-03-15',
    time: '7:00 PM',
    rsvps: 24,
    capacity: 36,
    styles: ['Salsa', 'Bachata'],
    isDraft: true,
  },
  {
    id: 2,
    name: 'Bachata Bootcamp Weekend Workshop',
    date: '2026-03-20',
    time: '2:00 PM',
    rsvps: 18,
    capacity: 25,
    styles: ['Bachata'],
    isDraft: false,
  },
  {
    id: 3,
    name: 'Kizomba Fusion Friday',
    date: '2026-03-22',
    time: '8:00 PM',
    rsvps: 32,
    capacity: 40,
    styles: ['Kizomba', 'Zouk'],
    isDraft: false,
  },
  {
    id: 4,
    name: 'Latin Dance Social',
    date: '2026-03-25',
    time: '7:30 PM',
    rsvps: 15,
    capacity: 30,
    styles: ['Salsa', 'Bachata', 'Merengue'],
    isDraft: false,
  },
];

export function Events() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'recent'>('all');
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredEvents = mockEvents.filter((event) => {
    if (filter === 'all') return true;
    if (filter === 'upcoming') return new Date(event.date) >= new Date();
    if (filter === 'recent') return new Date(event.date) < new Date();
    return true;
  });

  return (
    <div className="space-y-6 max-w-7xl">
      {/* Filters and Actions */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'all'
                ? 'bg-[#8b5cf6] text-white'
                : 'bg-[#252538] text-[#a0a0b8] hover:bg-[#1a1a2e]'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'upcoming'
                ? 'bg-[#8b5cf6] text-white'
                : 'bg-[#252538] text-[#a0a0b8] hover:bg-[#1a1a2e]'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setFilter('recent')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'recent'
                ? 'bg-[#8b5cf6] text-white'
                : 'bg-[#252538] text-[#a0a0b8] hover:bg-[#1a1a2e]'
            }`}
          >
            Most Recent
          </button>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'list'
                ? 'bg-[#8b5cf6] text-white'
                : 'bg-[#252538] text-[#a0a0b8] hover:bg-[#1a1a2e]'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('calendar')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'calendar'
                ? 'bg-[#8b5cf6] text-white'
                : 'bg-[#252538] text-[#a0a0b8] hover:bg-[#1a1a2e]'
            }`}
          >
            <CalendarIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#8b5cf6] text-white rounded-lg hover:bg-[#7c3aed] transition-colors"
          >
            <Plus className="w-4 h-4" />
            New
          </button>
        </div>
      </div>

      {/* Event List or Calendar */}
      {viewMode === 'list' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              onClick={() => navigate(`/events/${event.id}`)}
              className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42] hover:border-[#8b5cf6] transition-colors cursor-pointer"
            >
              {event.isDraft && (
                <span className="inline-block px-2 py-0.5 bg-[#8b5cf6]/20 text-[#8b5cf6] text-xs rounded mb-3">
                  DRAFT
                </span>
              )}
              <h3 className="mb-3 line-clamp-3 min-h-[4.5rem]">{event.name}</h3>
              <p className="text-sm text-[#a0a0b8] mb-3">
                {event.date} • {event.time}
              </p>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-[#a0a0b8]">
                  RSVPs: {event.rsvps} / {event.capacity}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {event.styles.map((style) => (
                  <span
                    key={style}
                    className="px-2 py-1 bg-[#8b5cf6]/20 text-[#8b5cf6] rounded text-xs"
                  >
                    {style}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CalendarView events={mockEvents} />
      )}

      {/* Event Modal */}
      <EventModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
