import React, { useState, useEffect } from 'react';
import { 
  Play, 
  BookOpen, 
  Brain, 
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  Star,
  ChevronRight,
  Heart
} from 'lucide-react';

interface DashboardProps {
  setActiveTab: (tab: string) => void;
  user?: {name: string, email: string} | null;
}

export const Dashboard: React.FC<DashboardProps> = ({ setActiveTab, user }) => {
  const [animateHero, setAnimateHero] = useState(false);
  const [showDailyQuiz, setShowDailyQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setAnimateHero(true);
  }, []);

  const currentTime = new Date().getHours();
  const greeting = currentTime < 12 ? 'Good morning' : currentTime < 18 ? 'Good afternoon' : 'Good evening';

  const quickNavCards = [
    {
      id: 'lessons',
      title: 'Lessons',
      description: 'Learn ISL alphabets, numbers, words, phrases',
      icon: BookOpen,
      color: 'from-[#0ABFBC] to-[#0ABFBC]/80',
      iconBg: 'bg-[#0ABFBC]',
      action: () => setActiveTab('lessons')
    },
    {
      id: 'quiz',
      title: 'Quiz',
      description: 'Test your knowledge',
      icon: Brain,
      color: 'from-[#FFDA00] to-[#FFDA00]/80',
      iconBg: 'bg-[#FFDA00]',
      action: () => setShowDailyQuiz(true)
    }
  ];

  const stats = [
    { label: 'Active Learners', value: '10,000+', icon: Users },
    { label: 'ISL Signs', value: '1,250+', icon: BookOpen },
    { label: 'Success Rate', value: '95%', icon: Award }
  ];

  const dailyQuizQuestions = [
    {
      question: "What is the correct sign for 'Hello' in ISL?",
      options: ["Wave with open palm", "Point to yourself", "Thumbs up", "Closed fist"],
      correct: 0,
      explanation: "In ISL, 'Hello' is signed by waving with an open palm facing outward."
    },
    {
      question: "How do you sign 'Thank You' in ISL?",
      options: ["Touch chin and move forward", "Clap hands", "Point upward", "Cross arms"],
      correct: 0,
      explanation: "Touch your chin with your fingertips and move your hand forward to sign 'Thank You'."
    },
    {
      question: "What does the number '5' look like in ISL?",
      options: ["Closed fist", "All fingers extended", "Three fingers up", "Index finger only"],
      correct: 1,
      explanation: "The number '5' in ISL is shown with all five fingers extended and spread apart."
    }
  ];

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === dailyQuizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion < dailyQuizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
    setScore(0);
    setShowDailyQuiz(false);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white relative">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        {/* App Name & Tagline */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">SignMate</span>
            <span className="text-[#E0E0E0] text-2xl sm:text-3xl lg:text-4xl block mt-2">
              Learn Indian Sign Language Easily
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[#E0E0E0] leading-relaxed max-w-4xl mx-auto mt-6">
            Master ISL with step-by-step lessons, interactive quizzes, and progress tracking—your gateway to inclusive communication.
          </p>
        </div>

        {/* Personalized Greeting */}
        {user && (
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-white">
              {greeting}, {user.name.split(' ')[0]}! 👋
            </h2>
            <p className="text-[#0ABFBC] font-medium">Ready to continue your ISL journey?</p>
          </div>
        )}
      </div>

      {/* Hero/Welcome Banner */}
      <section className="relative overflow-hidden mb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className={`space-y-8 ${animateHero ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
                  Your Journey to
                  <span className="bg-gradient-to-r from-[#0ABFBC] to-[#FFDA00] bg-clip-text text-transparent block">
                    Inclusive Communication
                  </span>
                  Starts Here
                </h2>
                
                <p className="text-lg text-[#E0E0E0] leading-relaxed">
                  Join thousands of learners mastering Indian Sign Language through our interactive platform designed for everyone.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-2">
                        <Icon className="w-6 h-6 text-[#0ABFBC]" />
                      </div>
                      <p className="text-xl font-bold text-white">{stat.value}</p>
                      <p className="text-[#E0E0E0] text-sm">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hero Illustration */}
            <div className={`relative ${animateHero ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="relative w-full h-80 lg:h-96 bg-gradient-to-br from-[#0ABFBC]/20 to-[#FFDA00]/20 rounded-3xl flex items-center justify-center overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-8 left-8 w-16 h-16 bg-[#0ABFBC]/30 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 right-8 w-12 h-12 bg-[#FFDA00]/30 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-[#10B981]/30 rounded-full animate-pulse delay-500"></div>
                </div>
                
                {/* Central Illustration */}
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#0ABFBC] to-[#FFDA00] rounded-full flex items-center justify-center mb-4 mx-auto animate-bounce-slow">
                    <div className="text-3xl">👋</div>
                  </div>
                  <p className="text-[#E0E0E0] font-medium text-lg">Hello in ISL</p>
                  <p className="text-[#E0E0E0] text-sm mt-1">Start your learning journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="mb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Start Your Learning Journey</h2>
            <p className="text-[#E0E0E0]">Choose how you'd like to begin with SignMate</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {quickNavCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <button
                  key={card.id}
                  onClick={card.action}
                  className="group bg-[#1E1E1E] rounded-2xl border border-gray-800 p-8 hover:border-gray-700 hover:scale-105 transition-all duration-300 text-left min-h-[200px] flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-16 h-16 ${card.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-[#121212]" />
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-white mb-3">{card.title}</h3>
                    <p className="text-[#E0E0E0] leading-relaxed text-lg">{card.description}</p>
                  </div>
                  
                  <div className="flex items-center text-[#0ABFBC] font-medium mt-6 group-hover:text-[#0ABFBC]/80 transition-colors duration-200">
                    <span>Get Started</span>
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Progress Snapshot (for logged-in users) */}
      {user && (
        <section className="mb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#0ABFBC]/20 to-[#FFDA00]/20 rounded-2xl p-6 lg:p-8 border border-gray-800">
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
                <div className="text-center lg:text-left flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Welcome back, {user.name.split(' ')[0]}! 🌟
                  </h3>
                  <p className="text-[#E0E0E0] mb-4 text-lg">Continue your SignMate learning journey</p>
                  
                  {/* Progress Bar */}
                  <div className="w-full lg:max-w-md">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[#E0E0E0] font-medium">Overall Progress</span>
                      <span className="text-[#0ABFBC] font-bold text-lg">68%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-4">
                      <div 
                        className="bg-gradient-to-r from-[#0ABFBC] to-[#FFDA00] h-4 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: '68%' }}
                      ></div>
                    </div>
                    <p className="text-[#E0E0E0] mt-3 text-lg">You've learned <span className="text-[#0ABFBC] font-semibold">85 signs</span> so far!</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setActiveTab('lessons')}
                    className="bg-[#0ABFBC] text-[#121212] px-6 py-3 rounded-xl font-semibold hover:bg-[#0ABFBC]/90 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span>Continue Learning</span>
                    <Play className="w-4 h-4" />
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('profile')}
                    className="border border-[#0ABFBC] text-[#0ABFBC] px-6 py-3 rounded-xl font-semibold hover:bg-[#0ABFBC]/10 transition-colors duration-200"
                  >
                    View Progress
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Learn ISL Section */}
      <section className="mb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <p className="text-[#E0E0E0]">Step-by-step lessons designed by ISL experts</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#FFDA00]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-[#FFDA00]" />
                </div>
                <h3 className="text-white font-semibold mb-2">Track Progress</h3>
                <p className="text-[#E0E0E0]">Monitor your learning journey with detailed analytics</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#10B981]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-[#10B981]" />
                </div>
                <h3 className="text-white font-semibold mb-2">Join Community</h3>
                <p className="text-[#E0E0E0]">Connect with fellow learners and native signers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Quiz Modal */}
      {showDailyQuiz && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1E1E1E] rounded-xl border border-gray-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {!quizCompleted ? (
              <div className="p-8">
                {/* Quiz Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#FFDA00] rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-[#121212]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-white">Daily SignMate Quiz</h2>
                      <p className="text-[#E0E0E0]">Question {currentQuestion + 1} of {dailyQuizQuestions.length}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowDailyQuiz(false)}
                    className="text-[#E0E0E0] hover:text-white transition-colors duration-200 text-2xl"
                  >
                    ✕
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 mb-8">
                  <div 
                    className="bg-[#FFDA00] h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${((currentQuestion + 1) / dailyQuizQuestions.length) * 100}%` }}
                  ></div>
                </div>

                {/* Question */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    {dailyQuizQuestions[currentQuestion].question}
                  </h3>
                  
                  <div className="space-y-3">
                    {dailyQuizQuestions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuizAnswer(index)}
                        className={`w-full p-4 rounded-lg border text-left transition-all duration-200 min-h-[60px] ${
                          selectedAnswer === index
                            ? 'border-[#FFDA00] bg-[#FFDA00]/10 text-white'
                            : 'border-gray-700 bg-gray-800/50 text-[#E0E0E0] hover:border-gray-600 hover:bg-gray-800'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            selectedAnswer === index
                              ? 'border-[#FFDA00] bg-[#FFDA00]'
                              : 'border-gray-600'
                          }`}>
                            {selectedAnswer === index && (
                              <div className="w-3 h-3 bg-[#121212] rounded-full"></div>
                            )}
                          </div>
                          <span className="font-medium">{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Next Button */}
                <div className="flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    disabled={selectedAnswer === null}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 min-h-[48px] ${
                      selectedAnswer !== null
                        ? 'bg-[#FFDA00] text-[#121212] hover:bg-[#FFDA00]/90'
                        : 'bg-gray-700 text-[#E0E0E0] cursor-not-allowed'
                    }`}
                  >
                    {currentQuestion === dailyQuizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                  </button>
                </div>
              </div>
            ) : (
              /* Quiz Results */
              <div className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-[#10B981] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-semibold text-white mb-2">Quiz Complete!</h2>
                  <p className="text-[#E0E0E0]">Great job on today's SignMate challenge</p>
                </div>

                {/* Score */}
                <div className="bg-[#121212] rounded-xl p-6 mb-6">
                  <div className="text-center">
                    <p className="text-[#E0E0E0] mb-2">Your Score</p>
                    <p className="text-4xl font-bold text-[#FFDA00] mb-2">
                      {score}/{dailyQuizQuestions.length}
                    </p>
                    <p className="text-[#10B981] font-semibold">
                      {Math.round((score / dailyQuizQuestions.length) * 100)}% Correct
                    </p>
                  </div>
                </div>

                {/* Performance Message */}
                <div className="mb-6">
                  <p className="text-white font-medium mb-2">
                    {score === dailyQuizQuestions.length 
                      ? "Perfect! You're mastering ISL with SignMate!" 
                      : score >= dailyQuizQuestions.length * 0.7 
                        ? "Excellent work! Keep practicing with SignMate!" 
                        : "Good effort! Review the lessons and try again tomorrow!"}
                  </p>
                  <p className="text-[#E0E0E0]">
                    Come back tomorrow for a new daily challenge!
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      resetQuiz();
                      setActiveTab('lessons');
                    }}
                    className="flex-1 bg-[#0ABFBC] text-[#121212] py-3 rounded-lg font-semibold hover:bg-[#0ABFBC]/90 transition-colors duration-200 min-h-[48px]"
                  >
                    Continue Learning
                  </button>
                  <button
                    onClick={resetQuiz}
                    className="flex-1 bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-200 min-h-[48px]"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

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
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.2s forwards;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};