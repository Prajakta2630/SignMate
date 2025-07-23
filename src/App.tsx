import React, { useState } from 'react';
import { Onboarding } from './components/Onboarding';
import { Auth } from './components/Auth';
import { MainApp } from './components/MainApp';

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [showAuth, setShowAuth] = useState(false);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    setShowAuth(true);
  };

  const handleAuthComplete = () => {
    setShowAuth(false);
  };

  const handleBackToOnboarding = () => {
    setShowAuth(false);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {showOnboarding ? (
        <Onboarding onComplete={handleOnboardingComplete} />
      ) : showAuth ? (
        <Auth onAuthComplete={handleAuthComplete} onBack={handleBackToOnboarding} />
      ) : (
        <MainApp />
      )}
    </div>
  );
}

export default App;