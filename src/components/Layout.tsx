import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, User, LogOut } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const studios = [
  'Dance Flow Studio',
  'Rhythm House',
  'Studio Momentum',
  'Urban Groove',
];

const navTabs = [
  { path: '/', label: 'Overview' },
  { path: '/reviews', label: 'Reviews' },
  { path: '/events', label: 'Events' },
  { path: '/people', label: 'People', comingSoon: true },
  { path: '/updates', label: 'Updates', comingSoon: true },
  { path: '/info', label: 'Info', comingSoon: true },
];

export function Layout({ children }: LayoutProps) {
  const [activeStudio, setActiveStudio] = useState(studios[0]);
  const [studioMenuOpen, setStudioMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f0f1a]">
      {/* Purple Header */}
      <header className="bg-[#8b5cf6] px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Studio Selector */}
          <div className="relative">
            <button
              onClick={() => setStudioMenuOpen(!studioMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <span className="text-white">{activeStudio}</span>
              <ChevronDown className="w-4 h-4 text-white" />
            </button>
            
            {studioMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#252538] rounded-lg shadow-xl border border-[#2d2d42] py-2 z-50">
                {studios.sort().map((studio) => (
                  <button
                    key={studio}
                    onClick={() => {
                      setActiveStudio(studio);
                      setStudioMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 transition-colors ${
                      studio === activeStudio
                        ? 'bg-[#8b5cf6] text-white'
                        : 'text-[#a0a0b8] hover:bg-[#1a1a2e]'
                    }`}
                  >
                    {studio}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Profile Menu */}
          <div className="relative">
            <button
              onClick={() => setProfileMenuOpen(!profileMenuOpen)}
              className="flex items-center gap-3 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="text-white">John Doe</span>
              <ChevronDown className="w-4 h-4 text-white" />
            </button>

            {profileMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-[#252538] rounded-lg shadow-xl border border-[#2d2d42] py-2 z-50">
                <button className="w-full text-left px-4 py-2 text-[#a0a0b8] hover:bg-[#1a1a2e] flex items-center gap-2">
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-[#1a1a2e] border-b border-[#2d2d42]">
        <div className="px-6 flex gap-1">
          {navTabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              end={tab.path === '/'}
              className={({ isActive }) =>
                `px-6 py-4 relative transition-colors ${
                  tab.comingSoon
                    ? 'text-[#5a5a6e] cursor-not-allowed'
                    : isActive
                    ? 'text-white'
                    : 'text-[#a0a0b8] hover:text-white'
                }`
              }
              onClick={(e) => tab.comingSoon && e.preventDefault()}
            >
              {({ isActive }) => (
                <>
                  {tab.label}
                  {tab.comingSoon && (
                    <span className="ml-2 text-xs text-[#5a5a6e]">(Coming Soon)</span>
                  )}
                  {isActive && !tab.comingSoon && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8b5cf6]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-6 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2d2d42] px-6 py-6 mt-16">
        <p className="text-center text-[#a0a0b8] text-sm">
          © 2025 Kressendo Innovations, LLC
        </p>
      </footer>
    </div>
  );
}
