import React, { useState } from 'react';
import { Play, Clock, Award, CheckCircle, Lock, ChevronRight } from 'lucide-react';

export const Lessons: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('basics');

  const categories = [
    { id: 'basics', name: 'Basics', count: 12 },
    { id: 'numbers', name: 'Numbers', count: 8 },
    { id: 'family', name: 'Family', count: 15 },
    { id: 'emotions', name: 'Emotions', count: 10 },
    { id: 'daily', name: 'Daily Life', count: 20 },
  ];

  const lessons = {
    basics: [
      { id: 1, title: 'Hello & Goodbye', duration: '5 min', completed: true, locked: false, difficulty: 'Beginner' },
      { id: 2, title: 'Thank You & Please', duration: '4 min', completed: true, locked: false, difficulty: 'Beginner' },
      { id: 3, title: 'Yes & No', duration: '3 min', completed: true, locked: false, difficulty: 'Beginner' },
      { id: 4, title: 'My Name Is...', duration: '6 min', completed: false, locked: false, difficulty: 'Beginner' },
      { id: 5, title: 'Basic Questions', duration: '8 min', completed: false, locked: true, difficulty: 'Intermediate' },
    ],
    numbers: [
      { id: 6, title: 'Numbers 1-10', duration: '7 min', completed: true, locked: false, difficulty: 'Beginner' },
      { id: 7, title: 'Numbers 11-20', duration: '6 min', completed: false, locked: false, difficulty: 'Beginner' },
      { id: 8, title: 'Counting Practice', duration: '5 min', completed: false, locked: true, difficulty: 'Intermediate' },
    ],
    family: [
      { id: 9, title: 'Parents & Siblings', duration: '8 min', completed: false, locked: false, difficulty: 'Beginner' },
      { id: 10, title: 'Extended Family', duration: '10 min', completed: false, locked: true, difficulty: 'Intermediate' },
    ],
    emotions: [
      { id: 11, title: 'Happy & Sad', duration: '5 min', completed: false, locked: false, difficulty: 'Beginner' },
      { id: 12, title: 'Angry & Surprised', duration: '6 min', completed: false, locked: true, difficulty: 'Beginner' },
    ],
    daily: [
      { id: 13, title: 'Food & Drinks', duration: '12 min', completed: false, locked: false, difficulty: 'Beginner' },
      { id: 14, title: 'Home & Furniture', duration: '15 min', completed: false, locked: true, difficulty: 'Intermediate' },
    ],
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-[#CF8DFD] bg-[#CF8DFD]/20';
      case 'Intermediate': return 'text-[#CF8DFD] bg-[#CF8DFD]/20';
      case 'Advanced': return 'text-[#CF8DFD] bg-[#CF8DFD]/20';
      default: return 'text-[#5F5D61] bg-[#5F5D61]/20';
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-black mb-2">SignMate Lessons</h1>
        <p className="text-[#5F5D61]">Master ISL with structured video lessons</p>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-[#CF8DFD] text-white'
                  : 'bg-[#E1CDEE] text-[#5F5D61] hover:bg-[#CF8DFD]/20 hover:text-black'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons[selectedCategory as keyof typeof lessons]?.map((lesson) => (
          <div
            key={lesson.id}
            className={`bg-[#E1CDEE] rounded-xl border border-[#5F5D61] overflow-hidden hover:border-[#CF8DFD] transition-all duration-200 ${
              !lesson.locked ? 'hover:scale-105 cursor-pointer' : 'opacity-60'
            }`}
          >
            {/* Video Thumbnail */}
            <div className="relative h-48 bg-gradient-to-br from-[#CF8DFD]/20 to-[#E1CDEE]/40 flex items-center justify-center">
              {lesson.locked ? (
                <Lock className="w-12 h-12 text-[#5F5D61]" />
              ) : lesson.completed ? (
                <CheckCircle className="w-12 h-12 text-[#CF8DFD]" />
              ) : (
                <Play className="w-12 h-12 text-[#CF8DFD]" />
              )}
              
              {/* Duration Badge */}
              <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{lesson.duration}</span>
              </div>
              
              {/* Completion Badge */}
              {lesson.completed && (
                <div className="absolute top-3 left-3 bg-[#CF8DFD] text-white text-xs px-2 py-1 rounded flex items-center space-x-1">
                  <CheckCircle className="w-3 h-3" />
                  <span>Completed</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(lesson.difficulty)}`}>
                  {lesson.difficulty}
                </span>
                {!lesson.locked && (
                  <ChevronRight className="w-5 h-5 text-[#5F5D61]" />
                )}
              </div>
              
              <h3 className="text-black font-semibold mb-2">{lesson.title}</h3>
              
              <p className="text-[#5F5D61] text-sm mb-4">
                {lesson.locked 
                  ? 'Complete previous lessons to unlock' 
                  : lesson.completed 
                    ? 'Review this lesson anytime'
                    : 'Continue with SignMate guidance'
                }
              </p>
              
              <button
                disabled={lesson.locked}
                className={`w-full py-2 rounded-lg font-medium transition-colors duration-200 ${
                  lesson.locked
                    ? 'bg-[#5F5D61] text-white cursor-not-allowed'
                    : lesson.completed
                      ? 'bg-[#5F5D61] text-white hover:bg-[#5F5D61]/80'
                      : 'bg-[#CF8DFD] text-white hover:bg-[#CF8DFD]/90'
                }`}
              >
                {lesson.locked ? 'Locked' : lesson.completed ? 'Review' : 'Start Lesson'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Continue Learning Section */}
      <div className="mt-12 bg-gradient-to-r from-[#CF8DFD]/20 to-[#E1CDEE]/40 rounded-xl p-6 border border-[#5F5D61]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-black mb-2">Continue Your SignMate Journey</h2>
            <p className="text-[#5F5D61]">You're doing great! Keep practicing to master ISL.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#CF8DFD]">85%</p>
              <p className="text-[#5F5D61] text-sm">Progress</p>
            </div>
            <button className="bg-[#CF8DFD] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#CF8DFD]/90 transition-colors duration-200">
              Continue Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};