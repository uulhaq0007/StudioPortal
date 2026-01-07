import { useState } from 'react';
import { X } from 'lucide-react';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event?: any;
}

const danceStyles = ['Salsa', 'Bachata', 'Kizomba', 'Zouk', 'Tango', 'Swing', 'Merengue', 'Hustle'];

export function EventModal({ isOpen, onClose, event }: EventModalProps) {
  const [formData, setFormData] = useState({
    name: event?.name || '',
    startDate: event?.date || '',
    startTime: event?.time || '',
    endDate: '',
    endTime: '',
    location: event?.location || '',
    styles: event?.styles || [],
    eventType: 'single',
    repeatType: 'week',
    level: event?.level || '',
    capacity: event?.capacity || '',
    cost: event?.cost || '',
    rsvpRequired: true,
    description: event?.description || '',
  });

  const [showDiscardConfirm, setShowDiscardConfirm] = useState(false);

  if (!isOpen) return null;

  const handleStyleToggle = (style: string) => {
    setFormData({
      ...formData,
      styles: formData.styles.includes(style)
        ? formData.styles.filter((s: string) => s !== style)
        : [...formData.styles, style],
    });
  };

  const handleSave = () => {
    // Mock save as draft
    onClose();
  };

  const handlePost = () => {
    // Mock publish event
    onClose();
  };

  const handleDiscard = () => {
    setShowDiscardConfirm(true);
  };

  const confirmDiscard = () => {
    setShowDiscardConfirm(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      
      <div className="relative bg-[#252538] rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#2d2d42]">
        <div className="sticky top-0 bg-[#252538] border-b border-[#2d2d42] px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-xl">{event ? 'Edit Event' : 'Create New Event'}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#1a1a2e] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Event Name */}
          <div>
            <label className="block text-sm text-[#a0a0b8] mb-2">
              Event Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 bg-[#1a1a2e] border border-[#2d2d42] rounded-lg focus:outline-none focus:border-[#8b5cf6] text-white"
              placeholder="Enter event name"
              required
            />
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#a0a0b8] mb-2">
                Start Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#1a1a2e] border border-[#2d2d42] rounded-lg focus:outline-none focus:border-[#8b5cf6] text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-[#a0a0b8] mb-2">
                Start Time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                value={formData.startTime}
                onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#1a1a2e] border border-[#2d2d42] rounded-lg focus:outline-none focus:border-[#8b5cf6] text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-[#a0a0b8] mb-2">End Date</label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#1a1a2e] border border-[#2d2d42] rounded-lg focus:outline-none focus:border-[#8b5cf6] text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-[#a0a0b8] mb-2">End Time</label>
              <input
                type="time"
                value={formData.endTime}
                onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#1a1a2e] border border-[#2d2d42] rounded-lg focus:outline-none focus:border-[#8b5cf6] text-white"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm text-[#a0a0b8] mb-2">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-2.5 bg-[#1a1a2e] border border-[#2d2d42] rounded-lg focus:outline-none focus:border-[#8b5cf6] text-white"
              placeholder="Enter location"
              required
            />
          </div>

          {/* Dance Styles */}
          <div>
            <label className="block text-sm text-[#a0a0b8] mb-2">Dance Styles</label>
            <div className="flex flex-wrap gap-2">
              {danceStyles.map((style) => (
                <button
                  key={style}
                  type="button"
                  onClick={() => handleStyleToggle(style)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    formData.styles.includes(style)
                      ? 'bg-[#8b5cf6] text-white'
                      : 'bg-[#1a1a2e] text-[#a0a0b8] hover:bg-[#2d2d42]'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Event Type */}
          <div>
            <label className="block text-sm text-[#a0a0b8] mb-2">Event Type</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="single"
                  checked={formData.eventType === 'single'}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="accent-[#8b5cf6]"
                />
                <span>Single</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="recurring"
                  checked={formData.eventType === 'recurring'}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="accent-[#8b5cf6]"
                />
                <span>Recurring</span>
              </label>
            </div>
          </div>

          {/* Repeat Options (only if recurring) */}
          {formData.eventType === 'recurring' && (
            <div>
              <label className="block text-sm text-[#a0a0b8] mb-2">Repeat</label>
              <select
                value={formData.repeatType}
                onChange={(e) => setFormData({ ...formData, repeatType: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#1a1a2e] border border-[#2d2d42] rounded-lg focus:outline-none focus:border-[#8b5cf6] text-white"
              >
                <option value="day">Daily</option>
                <option value="week">Weekly</option>
                <option value="month">Monthly</option>
                <option value="year">Annually</option>
              </select>
            </div>
          )}

          {/* Additional Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-[#a0a0b8] mb-2">Level</label>
              <input
                type="text"
                value={formData.level}
                onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#1a1a2e] border border-[#2d2d42] rounded-lg focus:outline-none focus:border-[#8b5cf6] text-white"
                placeholder="e.g., Beginner"
              />
            </div>
            <div>
              <label className="block text-sm text-[#a0a0b8] mb-2">Capacity</label>
              <input
                type="number"
                value={formData.capacity}
                onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#1a1a2e] border border-[#2d2d42] rounded-lg focus:outline-none focus:border-[#8b5cf6] text-white"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm text-[#a0a0b8] mb-2">Cost</label>
              <input
                type="text"
                value={formData.cost}
                onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#1a1a2e] border border-[#2d2d42] rounded-lg focus:outline-none focus:border-[#8b5cf6] text-white"
                placeholder="$0"
              />
            </div>
          </div>

          {/* RSVP Required */}
          <div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.rsvpRequired}
                onChange={(e) => setFormData({ ...formData, rsvpRequired: e.target.checked })}
                className="w-4 h-4 accent-[#8b5cf6]"
              />
              <span className="text-sm">RSVP Required</span>
            </label>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-[#a0a0b8] mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-2.5 bg-[#1a1a2e] border border-[#2d2d42] rounded-lg focus:outline-none focus:border-[#8b5cf6] text-white resize-none"
              placeholder="Enter event description"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="sticky bottom-0 bg-[#252538] border-t border-[#2d2d42] px-6 py-4 flex justify-end gap-3">
          <button
            onClick={handleDiscard}
            className="px-4 py-2 bg-[#1a1a2e] text-[#a0a0b8] rounded-lg hover:bg-[#2d2d42] transition-colors"
          >
            DISCARD
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[#252538] text-white border border-[#8b5cf6] rounded-lg hover:bg-[#8b5cf6]/10 transition-colors"
          >
            SAVE
          </button>
          <button
            onClick={handlePost}
            className="px-4 py-2 bg-[#8b5cf6] text-white rounded-lg hover:bg-[#7c3aed] transition-colors"
          >
            POST
          </button>
        </div>
      </div>

      {/* Discard Confirmation */}
      {showDiscardConfirm && (
        <div className="absolute inset-0 z-60 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowDiscardConfirm(false)} />
          <div className="relative bg-[#252538] rounded-xl shadow-xl max-w-md w-full p-6 border border-[#2d2d42]">
            <h3 className="text-lg mb-4">Discard Changes?</h3>
            <p className="text-[#a0a0b8] mb-6">
              Are you sure you want to discard all changes? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDiscardConfirm(false)}
                className="px-4 py-2 bg-[#1a1a2e] text-[#a0a0b8] rounded-lg hover:bg-[#2d2d42] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDiscard}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
