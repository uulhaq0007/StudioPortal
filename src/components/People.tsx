import { User } from 'lucide-react';

const mockPeople = [
  { id: 1, name: 'Sarah Johnson', date: 'Jan 3, 2026', roles: ['Instructor'] },
  { id: 2, name: 'Mike Chen', date: 'Jan 4, 2026', roles: [] },
  { id: 3, name: 'Emma Davis', date: 'Jan 5, 2026', roles: ['Co-host'] },
  { id: 4, name: 'Carlos Rodriguez', date: 'Jan 5, 2026', roles: ['DJ', 'Instructor'] },
  { id: 5, name: 'Lisa Anderson', date: 'Jan 6, 2026', roles: ['Host'] },
  { id: 6, name: 'David Wilson', date: 'Jan 6, 2026', roles: [] },
];

export function People() {
  return (
    <div className="space-y-6 max-w-5xl">
      <div className="bg-[#252538] rounded-xl p-6 border border-[#2d2d42]">
        <h2 className="text-xl mb-6">People ({mockPeople.length})</h2>
        <div className="space-y-3">
          {mockPeople.map((person) => (
            <div
              key={person.id}
              className="flex items-center justify-between p-4 bg-[#1a1a2e] rounded-lg border border-[#2d2d42] hover:border-[#8b5cf6] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#8b5cf6]/20 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-[#8b5cf6]" />
                </div>
                <div>
                  <h4>{person.name}</h4>
                  <p className="text-sm text-[#a0a0b8]">Joined {person.date}</p>
                </div>
              </div>
              {person.roles.length > 0 && (
                <div className="flex gap-2">
                  {person.roles.map((role) => (
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
    </div>
  );
}
