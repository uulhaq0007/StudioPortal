import { useLocation } from 'react-router-dom';
import { Menu, Bell, Search } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const pageTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/projects': 'Projects',
  '/projects/new': 'New Project',
  '/clients': 'Clients',
  '/clients/new': 'New Client',
  '/tasks': 'Tasks',
  '/settings': 'Settings',
};

export function Header({ onMenuClick }: HeaderProps) {
  const location = useLocation();
  const pageTitle = pageTitles[location.pathname] || 'Studio Portal';

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-30">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-xl">{pageTitle}</h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <div className="text-right">
              <p className="text-sm">John Doe</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
              JD
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
