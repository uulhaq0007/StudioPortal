import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarViewProps {
  events: any[];
}

export function CalendarView({ events }: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 1)); // March 2026

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const getEventsForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(event => event.date === dateStr);
  };

  return (
    <div className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42]">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={prevMonth}
            className="p-2 bg-[#1a1a2e] rounded-lg hover:bg-[#2d2d42] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 bg-[#1a1a2e] rounded-lg hover:bg-[#2d2d42] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {/* Day Names */}
        {dayNames.map((day) => (
          <div key={day} className="text-center text-sm text-[#a0a0b8] py-2">
            {day}
          </div>
        ))}

        {/* Empty cells for days before month starts */}
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} className="aspect-square" />
        ))}

        {/* Calendar Days */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const dayEvents = getEventsForDate(day);
          const hasEvents = dayEvents.length > 0;

          return (
            <div
              key={day}
              className={`aspect-square p-2 rounded-lg border border-[#2d2d42] ${
                hasEvents ? 'bg-[#1a1a2e]' : 'bg-transparent'
              }`}
            >
              <div className="text-sm mb-1">{day}</div>
              {hasEvents && (
                <div className="space-y-1">
                  {dayEvents.slice(0, 2).map((event, idx) => (
                    <div
                      key={idx}
                      className="text-xs px-1 py-0.5 bg-[#8b5cf6] rounded truncate"
                      title={event.name}
                    >
                      {event.name}
                    </div>
                  ))}
                  {dayEvents.length > 2 && (
                    <div className="text-xs text-[#a0a0b8] px-1">
                      +{dayEvents.length - 2} more
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
