import React, { useState, useEffect } from 'react';
import { 
  Play, 
  BookOpen, 
  Brain, 
  Search, 
  User, 
  ChevronRight, 
  Heart,
  Users,
  Award,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

interface HomePageProps {
  onGetStarted: () => void;
  user?: {name: string, email: string} | null;
}

export const HomePage: React.FC<HomePageProps> = ({ onGetStarted, user }) => {
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    setAnimateHero(true);
  }, []);

  const quickNavCards = [
    {
      id: 'lessons',
      title: 'Lessons',
      description: 'Learn ISL alphabets, numbers, words, and phrases',
      icon: BookOpen,
      color: 'from-[#0ABFBC] to-[#0ABFBC]/80',
      iconBg: 'bg-[#0ABFBC]'
    },
    {
      id: 'quiz',
      title: 'Quiz',
      description: 'Test your knowledge with interactive challenges',
      icon: Brain,
      color: 'from-[#FFDA00] to-[#FFDA00]/80',
      iconBg: 'bg-[#FFDA00]'
    },
    {
      id: 'dictionary',
      title: 'Dictionary',
      description: 'Quick reference for ISL signs and meanings',
      icon: Search,
      color: 'from-[#10B981] to-[#10B981]/80',
      iconBg: 'bg-[#10B981]'
    }
  ];

  const stats = [
    { label: 'Active Learners', value: '10,000+', icon: Users },
    { label: 'ISL Signs', value: '1,250+', icon: BookOpen },
    { label: 'Success Rate', value: '95%', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-[#121212]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#0ABFBC] rounded-lg flex items-center justify-center text-[#121212] font-bold text-lg">
                SM
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">SignMate</h1>
                <p className="text-xs text-[#0ABFBC] font-medium">Learn ISL Easily</p>
              </div>
            </div>

            {/* User Info or Get Started */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#0ABFBC] to-[#FFDA00] rounded-full flex items-center justify-center text-sm font-bold text-[#121212]">
                    {user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                  </div>
                  <span className="text-[#E0E0E0] hidden sm:block">Welcome, {user.name.split(' ')[0]}!</span>
                </div>
              ) : (
                <button
                  onClick={onGetStarted}
                  className="bg-[#0ABFBC] text-[#121212] px-4 py-2 rounded-lg font-semibold hover:bg-[#0ABFBC]/90 transition-colors duration-200"
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className={`space-y-8 ${animateHero ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white">SignMate</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#0ABFBC] to-[#FFDA00] bg-clip-text text-transparent">
                    Learn Indian Sign Language Easily
                  </span>
                </h1>
                
                <p className="text-xl text-[#E0E0E0] leading-relaxed max-w-2xl">
                  Master ISL with step-by-step lessons, interactive quizzes, and progress tracking—your gateway to inclusive communication.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onGetStarted}
                  className="bg-[#0ABFBC] text-[#121212] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#0ABFBC]/90 transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Start Learning</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <button className="border border-[#0ABFBC] text-[#0ABFBC] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#0ABFBC]/10 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-2">
                        <Icon className="w-6 h-6 text-[#0ABFBC]" />
                      </div>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-[#E0E0E0] text-sm">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hero Illustration */}
            <div className={`relative ${animateHero ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-[#0ABFBC]/20 to-[#FFDA00]/20 rounded-3xl flex items-center justify-center overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-[#0ABFBC]/30 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#FFDA00]/30 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-[#10B981]/30 rounded-full animate-pulse delay-500"></div>
                </div>
                
                {/* Central Illustration */}
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#0ABFBC] to-[#FFDA00] rounded-full flex items-center justify-center mb-6 mx-auto">
                    <div className="text-4xl">👋</div>
                  </div>
                  <p className="text-[#E0E0E0] font-medium">Hello in ISL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-16 bg-[#1E1E1E]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Start Your SignMate Journey</h2>
            <p className="text-[#E0E0E0] text-lg max-w-2xl mx-auto">
              Choose your learning path and begin mastering Indian Sign Language today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickNavCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="group bg-[#1E1E1E] rounded-2xl border border-gray-800 p-8 hover:border-gray-700 hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={onGetStarted}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 ${card.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-[#121212]" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                    <p className="text-[#E0E0E0] leading-relaxed mb-6">{card.description}</p>
                    
                    <div className="flex items-center justify-center text-[#0ABFBC] font-medium group-hover:text-[#0ABFBC]/80 transition-colors duration-200">
                      <span>Explore</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Progress Snapshot (for logged-in users) */}
      {user && (
        <section className="py-12 bg-[#121212]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#0ABFBC]/20 to-[#FFDA00]/20 rounded-2xl p-8 border border-gray-800">
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Welcome back, {user.name.split(' ')[0]}!
                  </h3>
                  <p className="text-[#E0E0E0] mb-4">Continue your SignMate learning journey</p>
                  
                  {/* Progress Bar */}
                  <div className="w-full lg:w-80">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#E0E0E0] text-sm">Overall Progress</span>
                      <span className="text-[#0ABFBC] font-semibold">68%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-[#0ABFBC] to-[#FFDA00] h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: '68%' }}
                      ></div>
                    </div>
                    <p className="text-[#E0E0E0] text-sm mt-2">You've learned 85 signs so far!</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={onGetStarted}
                    className="bg-[#0ABFBC] text-[#121212] px-6 py-3 rounded-xl font-semibold hover:bg-[#0ABFBC]/90 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span>Continue Learning</span>
                    <Play className="w-4 h-4" />
                  </button>
                  
                  <button className="border border-[#0ABFBC] text-[#0ABFBC] px-6 py-3 rounded-xl font-semibold hover:bg-[#0ABFBC]/10 transition-colors duration-200">
                    View Progress
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Learn ISL Section */}
      <section className="py-16 bg-[#1E1E1E]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0ABFBC] to-[#FFDA00] rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-[#121212]" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-6">Why Learn ISL?</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl text-[#E0E0E0] leading-relaxed">
                Empower connections with the Deaf community. Learning ISL fosters inclusion and bridges communication gaps.
              </p>
              <p className="text-lg text-[#E0E0E0] leading-relaxed">
                Join thousands of learners building a more inclusive world through the beautiful language of signs.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#0ABFBC]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-[#0ABFBC]" />
                </div>
                <h3 className="text-white font-semibold mb-2">Structured Learning</h3>
                <p className="text-[#E0E0E0] text-sm">Step-by-step lessons designed by ISL experts</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#FFDA00]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-[#FFDA00]" />
                </div>
                <h3 className="text-white font-semibold mb-2">Track Progress</h3>
                <p className="text-[#E0E0E0] text-sm">Monitor your learning journey with detailed analytics</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#10B981]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-[#10B981]" />
                </div>
                <h3 className="text-white font-semibold mb-2">Join Community</h3>
                <p className="text-[#E0E0E0] text-sm">Connect with fellow learners and native signers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {!user && (
        <section className="py-16 bg-[#121212]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-[#0ABFBC]/10 to-[#FFDA00]/10 rounded-3xl p-8 lg:p-12 border border-gray-800">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Start Your SignMate Journey?
              </h2>
              <p className="text-[#E0E0E0] text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of learners who are already mastering ISL with SignMate's innovative learning platform.
              </p>
              
              <button
                onClick={onGetStarted}
                className="bg-[#0ABFBC] text-[#121212] px-10 py-4 rounded-xl font-bold text-xl hover:bg-[#0ABFBC]/90 transition-all duration-200 hover:scale-105 inline-flex items-center space-x-3"
              >
                <span>Begin Learning Now</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Footer Navigation */}
      <footer className="bg-[#1E1E1E] border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Footer */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#0ABFBC] rounded-lg flex items-center justify-center text-[#121212] font-bold text-sm">
                SM
              </div>
              <span className="text-white font-semibold">SignMate</span>
              <span className="text-[#E0E0E0] text-sm">© 2025 SignMate. Empowering ISL learning.</span>
            </div>
            
            <div className="flex items-center space-x-8">
              <button className="text-[#E0E0E0] hover:text-white transition-colors duration-200">
                About
              </button>
              <button className="text-[#E0E0E0] hover:text-white transition-colors duration-200">
                Contact
              </button>
              <button className="text-[#E0E0E0] hover:text-white transition-colors duration-200">
                Privacy
              </button>
            </div>
          </div>

          {/* Mobile Footer Navigation */}
          <div className="md:hidden">
            <div className="grid grid-cols-5 gap-1">
              {[
                { id: 'home', label: 'Home', icon: BookOpen, active: true },
                { id: 'lessons', label: 'Lessons', icon: BookOpen, active: false },
                { id: 'dictionary', label: 'Dictionary', icon: Search, active: false },
                { id: 'practice', label: 'Practice', icon: Play, active: false },
                { id: 'profile', label: 'Profile', icon: User, active: false }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={onGetStarted}
                    className={`py-3 px-2 flex flex-col items-center space-y-1 transition-colors duration-200 ${
                      item.active ? 'text-[#0ABFBC]' : 'text-[#E0E0E0] hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.2s forwards;
        }
      `}</style>
    </div>
  );
};