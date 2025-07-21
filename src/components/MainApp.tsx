import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { Dashboard } from './Dashboard';
import { Lessons } from './Lessons';
import { Dictionary } from './Dictionary';
import { Upload } from './Upload';
import { Profile } from './Profile';

export const MainApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard />;
      case 'lessons':
        return <Lessons />;
      case 'dictionary':
        return <Dictionary />;
      case 'upload':
        return <Upload />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] pb-20 lg:pb-0">
      <div className="lg:flex lg:min-h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block lg:w-64 lg:bg-[#1E1E1E] lg:border-r lg:border-gray-800">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-[#0ABFBC] rounded-lg flex items-center justify-center text-[#121212] font-bold">
                SM
              </div>
              <h1 className="text-xl font-semibold text-white">SignMate</h1>
            </div>
            <Navigation 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
              variant="desktop" 
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:overflow-y-auto">
          {renderContent()}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <Navigation 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          variant="mobile" 
        />
      </div>
    </div>
  );
};