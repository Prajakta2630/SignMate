import React, { useState } from 'react';
import { ChevronRight, Play, Book, Users, Upload, Award } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Welcome to SignMate",
      subtitle: "Your companion for mastering Indian Sign Language",
      icon: <div className="w-20 h-20 bg-[#0ABFBC] rounded-full flex items-center justify-center text-2xl font-bold">SM</div>,
      description: "Begin your journey to learn ISL with personalized lessons and interactive practice sessions."
    },
    {
      title: "Learn with Interactive Lessons",
      subtitle: "Master ISL step by step",
      icon: <Play className="w-16 h-16 text-[#0ABFBC]" />,
      description: "Follow structured video lessons designed by ISL experts, with clear demonstrations and practice exercises."
    },
    {
      title: "Comprehensive Dictionary",
      subtitle: "Explore thousands of signs",
      icon: <Book className="w-16 h-16 text-[#0ABFBC]" />,
      description: "Access our extensive ISL dictionary with search filters, categories, and detailed sign demonstrations."
    },
    {
      title: "Practice & Get Feedback",
      subtitle: "Upload and improve your skills",
      icon: <Upload className="w-16 h-16 text-[#0ABFBC]" />,
      description: "Record your practice sessions and receive AI-powered feedback to perfect your signing technique."
    },
    {
      title: "Join the Community",
      subtitle: "Connect with fellow learners",
      icon: <Users className="w-16 h-16 text-[#0ABFBC]" />,
      description: "Share your progress, participate in challenges, and learn together with the SignMate community."
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const skipToMain = () => {
    onComplete();
  };

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md mx-auto text-center">
        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index <= currentStep ? 'bg-[#0ABFBC]' : 'bg-[#1E1E1E]'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            {steps[currentStep].icon}
          </div>
          
          <h1 className="text-3xl font-semibold mb-3 text-white">
            {steps[currentStep].title}
          </h1>
          
          <p className="text-[#0ABFBC] text-lg mb-4 font-medium">
            {steps[currentStep].subtitle}
          </p>
          
          <p className="text-[#E0E0E0] leading-relaxed">
            {steps[currentStep].description}
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <button
            onClick={nextStep}
            className="w-full bg-[#0ABFBC] text-[#121212] py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:bg-[#0ABFBC]/90 transition-all duration-200"
          >
            <span>{currentStep === steps.length - 1 ? 'Get Started' : 'Continue'}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
          
          {currentStep > 0 && (
            <button
              onClick={skipToMain}
              className="w-full text-[#E0E0E0] py-3 rounded-xl font-medium hover:text-white transition-colors duration-200"
            >
              Skip to SignMate
            </button>
          )}
        </div>
      </div>
    </div>
  );
};