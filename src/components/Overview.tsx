import { Star, Users, Calendar, TrendingUp, MapPin } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts';

const eventsData = [
  { month: 'Dec', count: 8 },
  { month: 'Jan', count: 12 },
  { month: 'Feb', count: 10 },
  { month: 'Mar', count: 14 },
];

const reviewsData = [
  { month: 'Dec', count: 15 },
  { month: 'Jan', count: 22 },
  { month: 'Feb', count: 18 },
  { month: 'Mar', count: 25 },
];

const locations = [
  { name: 'New York', count: 45 },
  { name: 'Los Angeles', count: 32 },
  { name: 'Chicago', count: 28 },
  { name: 'Miami', count: 14 },
];

const danceStyles = [
  'Salsa', 'Bachata', 'Kizomba', 'Zouk', 'West Coast Swing', 'Tango', 'Hustle'
];

const instructors = [
  { id: 1, name: 'Maria Rodriguez', location: 'New York, NY', count: 24 },
  { id: 2, name: 'Carlos Santos', location: 'Miami, FL', count: 18 },
  { id: 3, name: 'Elena Martinez', location: 'Los Angeles, CA', count: 15 },
  { id: 4, name: 'Diego Lopez', location: 'Chicago, IL', count: 12 },
];

export function Overview() {
  return (
    <div className="space-y-8 max-w-7xl">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42]">
          <div className="flex items-center gap-3 mb-2">
            <Star className="w-5 h-5 text-[#8b5cf6]" />
            <span className="text-[#a0a0b8] text-sm">Reviews</span>
          </div>
          <p className="text-4xl mb-1">4.5</p>
        </div>

        <div className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42]">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-[#8b5cf6]" />
            <span className="text-[#a0a0b8] text-sm">Followers</span>
          </div>
          <p className="text-4xl mb-1">119</p>
        </div>

        <div className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42]">
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-[#8b5cf6]/20 text-[#8b5cf6] text-xs rounded">
                DRAFT
              </span>
            </div>
            <p className="text-sm text-[#a0a0b8]">March 15, 2026</p>
            <h3 className="mt-1 line-clamp-3">
              Salsa Night - Beginner Friendly Social Dance
            </h3>
          </div>
        </div>
      </div>

      {/* 6 Month Change */}
      <div className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42]">
        <h2 className="text-xl mb-6">6 Month Change</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-[#a0a0b8] text-sm mb-2">Reviews</p>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="text-2xl">+12</span>
            </div>
          </div>
          <div>
            <p className="text-[#a0a0b8] text-sm mb-2">RSVP Count</p>
            <span className="text-2xl">36</span>
          </div>
          <div>
            <p className="text-[#a0a0b8] text-sm mb-2">Events</p>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="text-2xl">+2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42]">
          <h3 className="mb-6">Events by Month</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={eventsData}>
              <XAxis dataKey="month" stroke="#a0a0b8" />
              <YAxis stroke="#a0a0b8" />
              <Bar dataKey="count" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42]">
          <h3 className="mb-6">Reviews per Month</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={reviewsData}>
              <XAxis dataKey="month" stroke="#a0a0b8" />
              <YAxis stroke="#a0a0b8" />
              <Line type="monotone" dataKey="count" stroke="#8b5cf6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Locations and Dance Styles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42]">
          <h3 className="mb-4">Followers' Locations</h3>
          <div className="space-y-3">
            {locations.map((loc) => (
              <div key={loc.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8b5cf6]" />
                  <span className="text-[#a0a0b8]">{loc.name}</span>
                </div>
                <span>{loc.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42]">
          <h3 className="mb-4">Followers' Dance Styles</h3>
          <div className="flex flex-wrap gap-2">
            {danceStyles.map((style) => (
              <span
                key={style}
                className="px-3 py-1.5 bg-[#8b5cf6]/20 text-[#8b5cf6] rounded-full text-sm"
              >
                {style}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Instructors */}
      <div className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42]">
        <h2 className="text-xl mb-6">Instructors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="bg-[#1a1a2e] rounded-lg p-4 border border-[#2d2d42]">
              <div className="w-12 h-12 bg-[#8b5cf6]/20 rounded-full flex items-center justify-center mb-3">
                <User className="w-6 h-6 text-[#8b5cf6]" />
              </div>
              <h4 className="mb-1">{instructor.name}</h4>
              <p className="text-sm text-[#a0a0b8] mb-2">{instructor.location}</p>
              <span className="text-xs text-[#8b5cf6]">{instructor.count} events</span>
            </div>
          ))}
        </div>
      </div>

      {/* Most Recent Review */}
      <div className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42]">
        <h2 className="text-xl mb-4">Most Recent Review</h2>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-[#8b5cf6]/20 rounded-full flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-[#8b5cf6]" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h4>Sarah Johnson</h4>
              <span className="text-sm text-[#a0a0b8]">Jan 5, 2026 • 2:30 PM</span>
            </div>
            <div className="flex gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-[#8b5cf6] text-[#8b5cf6]" />
              ))}
            </div>
            <p className="text-[#a0a0b8]">
              Amazing experience! The instructors were patient and knowledgeable. The venue was perfect
              and the atmosphere was welcoming. I learned so much and can't wait to come back for more classes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
