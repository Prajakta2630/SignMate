import React, { useState } from 'react';
import { Onboarding } from './components/Onboarding';
import { MainApp } from './components/MainApp';

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {showOnboarding ? (
        <Onboarding onComplete={handleOnboardingComplete} />
      ) : (
        <MainApp />
      )}
    </div>
  );
}

export default App;