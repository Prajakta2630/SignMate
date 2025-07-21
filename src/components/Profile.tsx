import React, { useState } from 'react';
import { User, Award, Calendar, TrendingUp, Settings, Bell, BookOpen, Users, Star, ChevronRight } from 'lucide-react';

export const Profile: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const achievements = [
    { id: 1, title: 'First Steps', description: 'Completed your first lesson', icon: BookOpen, earned: true, date: '2 weeks ago' },
    { id: 2, title: 'Consistent Learner', description: '7-day learning streak', icon: Calendar, earned: true, date: '1 week ago' },
    { id: 3, title: 'Community Helper', description: 'Helped 5 fellow learners', icon: Users, earned: true, date: '3 days ago' },
    { id: 4, title: 'Sign Master', description: 'Mastered 100 signs', icon: Star, earned: false, progress: 85 },
    { id: 5, title: 'Perfect Score', description: 'Achieved 100% in a quiz', icon: Award, earned: false, progress: 95 },
  ];

  const learningStats = [
    { label: 'Total Signs Learned', value: '127', change: '+12 this week' },
    { label: 'Practice Sessions', value: '24', change: '+3 this week' },
    { label: 'Quiz Average', value: '85%', change: '+8% improvement' },
    { label: 'Community Rank', value: '#245', change: '+50 positions' },
  ];

  const recentActivity = [
    { action: 'Completed Quiz', item: 'Basic Emotions', time: '2 hours ago', points: 85 },
    { action: 'Practiced Signs', item: 'Family Members', time: '1 day ago', points: 12 },
    { action: 'Helped User', item: 'Community Question', time: '2 days ago', points: 5 },
    { action: 'Lesson Complete', item: 'Advanced Greetings', time: '3 days ago', points: 25 },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0ABFBC] to-[#FFDA00] rounded-full flex items-center justify-center text-2xl font-bold text-[#121212]">
              AS
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-white">Arjun Sharma</h1>
              <p className="text-[#0ABFBC] font-medium">SignMate Learner since March 2024</p>
            </div>
          </div>
          <button className="bg-[#1E1E1E] border border-gray-800 rounded-xl p-3 hover:border-gray-700 transition-colors duration-200">
            <Settings className="w-6 h-6 text-[#E0E0E0]" />
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-8">
        <div className="flex space-x-1 bg-[#1E1E1E] p-1 rounded-xl">
          <button
            onClick={() => setActiveSection('overview')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              activeSection === 'overview'
                ? 'bg-[#0ABFBC] text-[#121212]'
                : 'text-[#E0E0E0] hover:text-white'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveSection('achievements')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              activeSection === 'achievements'
                ? 'bg-[#0ABFBC] text-[#121212]'
                : 'text-[#E0E0E0] hover:text-white'
            }`}
          >
            Achievements
          </button>
          <button
            onClick={() => setActiveSection('settings')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              activeSection === 'settings'
                ? 'bg-[#0ABFBC] text-[#121212]'
                : 'text-[#E0E0E0] hover:text-white'
            }`}
          >
            Settings
          </button>
        </div>
      </div>

      {/* Overview Section */}
      {activeSection === 'overview' && (
        <div className="space-y-8">
          {/* Learning Stats */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Your SignMate Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {learningStats.map((stat, index) => (
                <div key={index} className="bg-[#1E1E1E] rounded-xl p-6 border border-gray-800">
                  <p className="text-[#E0E0E0] text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
                  <p className="text-[#10B981] text-sm mt-2">{stat.change}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
            <div className="bg-[#1E1E1E] rounded-xl border border-gray-800 p-6">
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-[#0ABFBC] rounded-full"></div>
                      <div>
                        <p className="text-white">
                          <span className="text-[#E0E0E0]">{activity.action}</span> {activity.item}
                        </p>
                        <p className="text-[#E0E0E0] text-sm">{activity.time}</p>
                      </div>
                    </div>
                    <div className="text-[#FFDA00] font-semibold">
                      +{activity.points} pts
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Learning Progress */}
            <div className="bg-[#1E1E1E] rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Learning Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#E0E0E0]">Basic Signs</span>
                    <span className="text-[#0ABFBC] font-semibold">100%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#0ABFBC] h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#E0E0E0]">Numbers</span>
                    <span className="text-[#FFDA00] font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#FFDA00] h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#E0E0E0]">Family & Friends</span>
                    <span className="text-[#10B981] font-semibold">70%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#10B981] h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-[#1E1E1E] rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Community Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-[#0ABFBC]" />
                    <span className="text-[#E0E0E0]">People Helped</span>
                  </div>
                  <span className="text-white font-semibold">15</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-[#FFDA00]" />
                    <span className="text-[#E0E0E0]">Community Points</span>
                  </div>
                  <span className="text-white font-semibold">2,340</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-[#10B981]" />
                    <span className="text-[#E0E0E0]">Rank</span>
                  </div>
                  <span className="text-white font-semibold">#245</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Achievements Section */}
      {activeSection === 'achievements' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">SignMate Achievements</h2>
            <p className="text-[#E0E0E0]">Track your progress and unlock new badges</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={achievement.id}
                  className={`bg-[#1E1E1E] rounded-xl border p-6 ${
                    achievement.earned 
                      ? 'border-[#0ABFBC] bg-[#0ABFBC]/5' 
                      : 'border-gray-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      achievement.earned 
                        ? 'bg-[#0ABFBC] text-[#121212]' 
                        : 'bg-gray-700 text-[#E0E0E0]'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {achievement.earned && (
                      <span className="text-xs bg-[#10B981] text-white px-2 py-1 rounded">
                        Earned
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-white font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-[#E0E0E0] text-sm mb-4">{achievement.description}</p>
                  
                  {achievement.earned ? (
                    <p className="text-[#0ABFBC] text-sm font-medium">{achievement.date}</p>
                  ) : (
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-[#E0E0E0]">Progress</span>
                        <span className="text-[#FFDA00]">{achievement.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-[#FFDA00] h-2 rounded-full" 
                          style={{ width: `${achievement.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Settings Section */}
      {activeSection === 'settings' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Account Settings</h2>
            <p className="text-[#E0E0E0]">Manage your SignMate preferences</p>
          </div>

          {/* Settings Options */}
          <div className="space-y-4">
            <div className="bg-[#1E1E1E] rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Profile Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-[#E0E0E0] font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    value="Prajakta Gadhave"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#0ABFBC] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#E0E0E0] font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value="arjun@example.com"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#0ABFBC] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#1E1E1E] rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Learning Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Daily Practice Reminders</p>
                    <p className="text-[#E0E0E0] text-sm">Get notified about your practice sessions</p>
                  </div>
                  <button className="w-12 h-6 bg-[#0ABFBC] rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Community Updates</p>
                    <p className="text-[#E0E0E0] text-sm">Stay updated with community activities</p>
                  </div>
                  <button className="w-12 h-6 bg-gray-600 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Achievement Notifications</p>
                    <p className="text-[#E0E0E0] text-sm">Celebrate your learning milestones</p>
                  </div>
                  <button className="w-12 h-6 bg-[#0ABFBC] rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[#1E1E1E] rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Privacy & Security</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 hover:bg-gray-800 rounded-lg transition-colors duration-200">
                  <span className="text-white">Change Password</span>
                  <ChevronRight className="w-5 h-5 text-[#E0E0E0]" />
                </button>
                <button className="w-full flex items-center justify-between p-3 hover:bg-gray-800 rounded-lg transition-colors duration-200">
                  <span className="text-white">Download My Data</span>
                  <ChevronRight className="w-5 h-5 text-[#E0E0E0]" />
                </button>
                <button className="w-full flex items-center justify-between p-3 hover:bg-gray-800 rounded-lg transition-colors duration-200">
                  <span className="text-white">Privacy Settings</span>
                  <ChevronRight className="w-5 h-5 text-[#E0E0E0]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};