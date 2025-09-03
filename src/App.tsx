import React, { useState } from 'react';
import { HomePage } from './components/HomePage';
import { Onboarding } from './components/Onboarding';
import { Auth } from './components/Auth';
import { MainApp } from './components/MainApp';

function App() {
  const [showHomePage, setShowHomePage] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState<{name: string, email: string} | null>(null);

  const handleGetStarted = () => {
    setShowHomePage(false);
    setShowOnboarding(true);
  };

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    setShowAuth(true);
  };

  const handleAuthComplete = (userData: {name: string, email: string}) => {
    setUser(userData);
    setShowAuth(false);
  };

  const handleBackToOnboarding = () => {
    setShowAuth(false);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {showHomePage ? (
        <HomePage onGetStarted={handleGetStarted} user={user} />
      ) : showOnboarding ? (
        <Onboarding onComplete={handleOnboardingComplete} />
      ) : showAuth ? (
        <Auth onAuthComplete={handleAuthComplete} onBack={handleBackToOnboarding} />
      ) : (
        <MainApp user={user} />
      )}
    </div>
  );
}

export default App;