import { useState } from 'react';
import { Star, MessageCircle, User } from 'lucide-react';

const mockReviews = [
  {
    id: 1,
    reviewer: 'Sarah Johnson',
    date: 'Jan 5, 2026',
    time: '2:30 PM',
    rating: 5,
    text: 'Amazing experience! The instructors were patient and knowledgeable. The venue was perfect and the atmosphere was welcoming. I learned so much and can\'t wait to come back for more classes.',
  },
  {
    id: 2,
    reviewer: 'Mike Chen',
    date: 'Jan 3, 2026',
    time: '10:15 AM',
    rating: 5,
    text: 'Best dance studio in the city! Great music, friendly people, and top-notch instruction. Highly recommend for anyone looking to learn or improve their dancing.',
  },
  {
    id: 3,
    reviewer: 'Emma Davis',
    date: 'Dec 28, 2025',
    time: '4:45 PM',
    rating: 4,
    text: 'Really enjoyed my time here. The instructors are skilled and the community is supportive. Only minor issue was parking can be difficult during peak hours.',
  },
  {
    id: 4,
    reviewer: 'Carlos Rodriguez',
    date: 'Dec 20, 2025',
    time: '1:20 PM',
    rating: 5,
    text: 'Fantastic events and wonderful people. I\'ve been coming here for months and every session is better than the last. The variety of dance styles offered is impressive.',
  },
];

export function Reviews() {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const filteredReviews = mockReviews.filter((review) => {
    if (filter === 'all') return true;
    return review.rating === parseInt(filter);
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === 'oldest') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortBy === 'highest') {
      return b.rating - a.rating;
    } else {
      return a.rating - b.rating;
    }
  });

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Filters */}
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
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => setFilter(rating.toString())}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                filter === rating.toString()
                  ? 'bg-[#8b5cf6] text-white'
                  : 'bg-[#252538] text-[#a0a0b8] hover:bg-[#1a1a2e]'
              }`}
            >
              <Star className="w-4 h-4" />
              {rating}
            </button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 bg-[#252538] border border-[#2d2d42] rounded-lg text-white focus:outline-none focus:border-[#8b5cf6]"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="highest">Highest Rating</option>
          <option value="lowest">Lowest Rating</option>
        </select>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {sortedReviews.map((review) => (
          <div
            key={review.id}
            className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42]"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#8b5cf6]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-[#8b5cf6]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4>{review.reviewer}</h4>
                  <span className="text-sm text-[#a0a0b8]">
                    {review.date} • {review.time}
                  </span>
                </div>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating
                          ? 'fill-[#8b5cf6] text-[#8b5cf6]'
                          : 'text-[#2d2d42]'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-[#a0a0b8] mb-4">{review.text}</p>
                <button className="flex items-center gap-2 text-[#8b5cf6] hover:text-[#7c3aed] transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  Message Reviewer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
