import React from 'react';
import { Play, TrendingUp, Award, Users, Calendar, ChevronRight, Brain, Clock, Star } from 'lucide-react';

interface DashboardProps {
  setActiveTab: (tab: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ setActiveTab }) => {
  const currentTime = new Date().getHours();
  const greeting = currentTime < 12 ? 'Good morning' : currentTime < 18 ? 'Good afternoon' : 'Good evening';

  const stats = [
    { label: 'Signs Learned', value: '127', icon: Award, color: 'text-[#10B981]' },
    { label: 'Streak Days', value: '12', icon: TrendingUp, color: 'text-[#FFDA00]' },
    { label: 'Quiz Score', value: '85%', icon: Play, color: 'text-[#0ABFBC]' },
  ];

  const recentActivities = [
    { action: 'Completed', item: 'Basic Greetings Quiz', time: '2 hours ago', type: 'quiz' },
    { action: 'Learned', item: 'Family Signs Collection', time: '1 day ago', type: 'lesson' },
    { action: 'Practiced', item: 'Numbers 1-20', time: '2 days ago', type: 'practice' },
    { action: 'Joined', item: 'Community Challenge', time: '3 days ago', type: 'community' },
  ];

  const quickActions = [
    { 
      title: 'Continue Learning', 
      subtitle: 'Basic Emotions', 
      icon: Play, 
      bg: 'bg-[#0ABFBC]',
      action: () => setActiveTab('lessons')
    },
    { 
      title: 'Daily Quiz', 
      subtitle: 'Test your skills', 
      icon: Award, 
      bg: 'bg-[#FFDA00]',
      action: () => {} // Will be handled by the daily quiz modal
    },
    { 
      title: 'Practice Session', 
      subtitle: 'Record & improve', 
      icon: TrendingUp, 
      bg: 'bg-[#10B981]',
      action: () => setActiveTab('upload')
    },
  ];

  const [showDailyQuiz, setShowDailyQuiz] = React.useState(false);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(null);
  const [quizCompleted, setQuizCompleted] = React.useState(false);
  const [score, setScore] = React.useState(0);

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

  const handleQuickAction = (action: () => void, title: string) => {
    if (title === 'Daily Quiz') {
      setShowDailyQuiz(true);
    } else {
      action();
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-white mb-2">
          {greeting}! Ready to learn with SignMate?
        </h1>
        <p className="text-[#E0E0E0]">Continue your ISL learning journey today</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-[#1E1E1E] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#E0E0E0] text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
                </div>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                onClick={() => handleQuickAction(action.action, action.title)}
                className="bg-[#1E1E1E] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-200 hover:scale-105 group text-left"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-12 h-12 ${action.bg} rounded-lg flex items-center justify-center text-[#121212]`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#E0E0E0] group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-white font-semibold mb-1">{action.title}</h3>
                <p className="text-[#E0E0E0] text-sm">{action.subtitle}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Your SignMate Journey */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Progress Section */}
        <div className="bg-[#1E1E1E] rounded-xl p-6 border border-gray-800">
          <h2 className="text-xl font-semibold text-white mb-4">Your SignMate Progress</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#E0E0E0] font-medium">Basic Signs</span>
                <span className="text-[#0ABFBC] font-semibold">85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-[#0ABFBC] h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#E0E0E0] font-medium">Numbers</span>
                <span className="text-[#FFDA00] font-semibold">70%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-[#FFDA00] h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#E0E0E0] font-medium">Family</span>
                <span className="text-[#10B981] font-semibold">60%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-[#10B981] h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-[#1E1E1E] rounded-xl p-6 border border-gray-800">
          <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  activity.type === 'quiz' ? 'bg-[#0ABFBC]' :
                  activity.type === 'lesson' ? 'bg-[#FFDA00]' :
                  activity.type === 'practice' ? 'bg-[#10B981]' :
                  'bg-purple-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-white text-sm">
                    <span className="text-[#E0E0E0]">{activity.action}</span> {activity.item}
                  </p>
                  <p className="text-[#E0E0E0] text-xs">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
                    className="text-[#E0E0E0] hover:text-white transition-colors duration-200"
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
                        className={`w-full p-4 rounded-lg border text-left transition-all duration-200 ${
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
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
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
                  <p className="text-[#E0E0E0] text-sm">
                    Come back tomorrow for a new daily challenge!
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={() => setActiveTab('lessons')}
                    className="flex-1 bg-[#0ABFBC] text-[#121212] py-3 rounded-lg font-semibold hover:bg-[#0ABFBC]/90 transition-colors duration-200"
                  >
                    Continue Learning
                  </button>
                  <button
                    onClick={resetQuiz}
                    className="flex-1 bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};