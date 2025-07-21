import React from 'react';
import { Play, TrendingUp, Award, Users, Calendar, ChevronRight } from 'lucide-react';

export const Dashboard: React.FC = () => {
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
    { title: 'Continue Learning', subtitle: 'Basic Emotions', icon: Play, bg: 'bg-[#0ABFBC]' },
    { title: 'Daily Quiz', subtitle: 'Test your skills', icon: Award, bg: 'bg-[#FFDA00]' },
    { title: 'Practice Session', subtitle: 'Record & improve', icon: TrendingUp, bg: 'bg-[#10B981]' },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
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
    </div>
  );
};