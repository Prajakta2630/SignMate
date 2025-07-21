import React from 'react';
import { Home, BookOpen, Book, Upload, User } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  variant: 'mobile' | 'desktop';
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab, variant }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'lessons', label: 'Lessons', icon: BookOpen },
    { id: 'dictionary', label: 'Dictionary', icon: Book },
    { id: 'upload', label: 'Practice', icon: Upload },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  if (variant === 'mobile') {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-[#1E1E1E] border-t border-gray-800 z-50">
        <div className="flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex-1 py-3 px-2 flex flex-col items-center space-y-1 transition-colors duration-200 ${
                  isActive ? 'text-[#0ABFBC]' : 'text-[#E0E0E0] hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <nav className="space-y-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              isActive 
                ? 'bg-[#0ABFBC] text-[#121212] font-semibold' 
                : 'text-[#E0E0E0] hover:bg-gray-800 hover:text-white'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};