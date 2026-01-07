import { useState } from 'react';
import { Plus, Edit2, Trash2, Share2 } from 'lucide-react';

const mockUpdates = [
  {
    id: 1,
    message: 'Exciting news! We\'re adding two new Bachata classes starting next month. Perfect for intermediate dancers looking to level up their skills.',
    date: 'Jan 6, 2026',
    time: '3:15 PM',
    author: 'Studio Admin',
    isDraft: false,
  },
  {
    id: 2,
    message: 'Thank you to everyone who attended our New Year\'s Eve Salsa Social! What an incredible night with over 100 dancers. See you at the next event!',
    date: 'Jan 2, 2026',
    time: '11:30 AM',
    author: 'Studio Admin',
    isDraft: false,
  },
  {
    id: 3,
    message: 'Reminder: Studio will be closed this Sunday for maintenance. Regular classes resume Monday.',
    date: 'Dec 30, 2025',
    time: '9:00 AM',
    author: 'Studio Admin',
    isDraft: true,
  },
];

export function Updates() {
  const [updates, setUpdates] = useState(mockUpdates);
  const [newUpdate, setNewUpdate] = useState('');
  const [isComposing, setIsComposing] = useState(false);

  const handlePost = () => {
    if (newUpdate.trim()) {
      const update = {
        id: updates.length + 1,
        message: newUpdate,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
        author: 'Studio Admin',
        isDraft: false,
      };
      setUpdates([update, ...updates]);
      setNewUpdate('');
      setIsComposing(false);
    }
  };

  const handleSaveDraft = () => {
    if (newUpdate.trim()) {
      const update = {
        id: updates.length + 1,
        message: newUpdate,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
        author: 'Studio Admin',
        isDraft: true,
      };
      setUpdates([update, ...updates]);
      setNewUpdate('');
      setIsComposing(false);
    }
  };

  return (
    <div className="space-y-6 max-w-3xl">
      {/* New Update Composer */}
      {!isComposing ? (
        <button
          onClick={() => setIsComposing(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#8b5cf6] text-white rounded-lg hover:bg-[#7c3aed] transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Update
        </button>
      ) : (
        <div className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42]">
          <textarea
            value={newUpdate}
            onChange={(e) => setNewUpdate(e.target.value)}
            placeholder="Share an update with your followers..."
            rows={4}
            className="w-full px-4 py-2.5 bg-[#1a1a2e] border border-[#2d2d42] rounded-lg focus:outline-none focus:border-[#8b5cf6] text-white resize-none mb-4"
            autoFocus
          />
          <div className="flex justify-end gap-3">
            <button
              onClick={() => {
                setIsComposing(false);
                setNewUpdate('');
              }}
              className="px-4 py-2 bg-[#1a1a2e] text-[#a0a0b8] rounded-lg hover:bg-[#2d2d42] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveDraft}
              className="px-4 py-2 bg-[#252538] text-white border border-[#8b5cf6] rounded-lg hover:bg-[#8b5cf6]/10 transition-colors"
            >
              Save as Draft
            </button>
            <button
              onClick={handlePost}
              className="px-4 py-2 bg-[#8b5cf6] text-white rounded-lg hover:bg-[#7c3aed] transition-colors"
            >
              Post
            </button>
          </div>
        </div>
      )}

      {/* Updates List */}
      <div className="space-y-4">
        {updates.map((update) => (
          <div
            key={update.id}
            className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42]"
          >
            {update.isDraft && (
              <span className="inline-block px-2 py-0.5 bg-[#8b5cf6]/20 text-[#8b5cf6] text-xs rounded mb-3">
                DRAFT
              </span>
            )}
            <p className="mb-4 text-[#a0a0b8]">{update.message}</p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-[#a0a0b8]">
                Posted by {update.author} • {update.date} at {update.time}
              </div>
              <div className="flex gap-2">
                <button
                  className="p-2 hover:bg-[#1a1a2e] rounded-lg transition-colors"
                  title="Edit"
                >
                  <Edit2 className="w-4 h-4 text-[#8b5cf6]" />
                </button>
                <button
                  className="p-2 hover:bg-[#1a1a2e] rounded-lg transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </button>
                <button
                  className="p-2 hover:bg-[#1a1a2e] rounded-lg transition-colors"
                  title="Repost"
                >
                  <Share2 className="w-4 h-4 text-[#8b5cf6]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
