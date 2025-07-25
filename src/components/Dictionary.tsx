import React, { useState } from 'react';
import { Search, Filter, Play, BookOpen, Star } from 'lucide-react';

export const Dictionary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = [
    { id: 'all', name: 'All Signs', count: 1250 },
    { id: 'basics', name: 'Basics', count: 120 },
    { id: 'numbers', name: 'Numbers', count: 50 },
    { id: 'family', name: 'Family', count: 80 },
    { id: 'emotions', name: 'Emotions', count: 60 },
    { id: 'food', name: 'Food', count: 150 },
    { id: 'colors', name: 'Colors', count: 25 },
    { id: 'animals', name: 'Animals', count: 100 },
  ];

  const signs = [
    { id: 1, word: 'Hello', category: 'basics', difficulty: 'Beginner', isFavorite: true, description: 'Common greeting sign' },
    { id: 2, word: 'Thank You', category: 'basics', difficulty: 'Beginner', isFavorite: false, description: 'Express gratitude' },
    { id: 3, word: 'Family', category: 'family', difficulty: 'Beginner', isFavorite: true, description: 'Group of related people' },
    { id: 4, word: 'Happy', category: 'emotions', difficulty: 'Beginner', isFavorite: false, description: 'Feeling of joy' },
    { id: 5, word: 'Mother', category: 'family', difficulty: 'Beginner', isFavorite: false, description: 'Female parent' },
    { id: 6, word: 'Water', category: 'food', difficulty: 'Beginner', isFavorite: false, description: 'Clear liquid for drinking' },
    { id: 7, word: 'Red', category: 'colors', difficulty: 'Beginner', isFavorite: true, description: 'Primary color' },
    { id: 8, word: 'Cat', category: 'animals', difficulty: 'Beginner', isFavorite: false, description: 'Domestic feline animal' },
    { id: 9, word: 'One', category: 'numbers', difficulty: 'Beginner', isFavorite: false, description: 'Number 1' },
    { id: 10, word: 'Please', category: 'basics', difficulty: 'Beginner', isFavorite: false, description: 'Polite request' },
  ];

  const filteredSigns = signs.filter(sign => {
    const matchesSearch = sign.word.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || sign.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || sign.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-[#10B981] bg-[#10B981]/20';
      case 'Intermediate': return 'text-[#FFDA00] bg-[#FFDA00]/20';
      case 'Advanced': return 'text-[#EF4444] bg-[#EF4444]/20';
      default: return 'text-[#E0E0E0] bg-gray-700';
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-white mb-2">SignMate Dictionary</h1>
        <p className="text-[#E0E0E0]">Explore thousands of ISL signs with detailed demonstrations</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#E0E0E0]" />
          <input
            type="text"
            placeholder="Search signs in SignMate dictionary..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#1E1E1E] border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-white placeholder-[#E0E0E0] focus:border-[#0ABFBC] focus:ring-1 focus:ring-[#0ABFBC] focus:outline-none transition-all duration-200"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-[#E0E0E0]" />
            <span className="text-[#E0E0E0] font-medium">Filters:</span>
          </div>
          
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-[#1E1E1E] border border-gray-800 rounded-lg px-3 py-2 text-white focus:border-[#0ABFBC] focus:outline-none"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name} ({category.count})
              </option>
            ))}
          </select>

          {/* Difficulty Filter */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="bg-[#1E1E1E] border border-gray-800 rounded-lg px-3 py-2 text-white focus:border-[#0ABFBC] focus:outline-none"
          >
            <option value="all">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-[#E0E0E0]">
          Showing {filteredSigns.length} signs {searchTerm && `for "${searchTerm}"`}
        </p>
      </div>

      {/* Signs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredSigns.map((sign) => (
          <div
            key={sign.id}
            className="bg-[#1E1E1E] rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 hover:scale-105 transition-all duration-200 cursor-pointer group"
          >
            {/* Sign Demo Area */}
            <div className="relative h-48 bg-gradient-to-br from-[#0ABFBC]/20 to-[#FFDA00]/20 flex items-center justify-center">
              <Play className="w-12 h-12 text-[#0ABFBC] group-hover:scale-110 transition-transform duration-200" />
              
              {/* Favorite Button */}
              <button className="absolute top-3 right-3 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200">
                <Star className={`w-4 h-4 ${sign.isFavorite ? 'text-[#FFDA00] fill-current' : 'text-white'}`} />
              </button>
              
              {/* SignMate Badge */}
              <div className="absolute bottom-3 left-3 bg-[#0ABFBC] text-[#121212] text-xs px-2 py-1 rounded flex items-center space-x-1">
                <BookOpen className="w-3 h-3" />
                <span>SignMate</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold text-lg">{sign.word}</h3>
                <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(sign.difficulty)}`}>
                  {sign.difficulty}
                </span>
              </div>
              
              <p className="text-[#E0E0E0] text-sm mb-4">{sign.description}</p>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-[#0ABFBC] text-[#121212] py-2 rounded-lg font-medium hover:bg-[#0ABFBC]/90 transition-colors duration-200">
                  Watch Demo
                </button>
                <button className="px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200">
                  <BookOpen className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredSigns.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-[#E0E0E0] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No signs found</h3>
          <p className="text-[#E0E0E0]">
            Try adjusting your search or filters to find more signs in the SignMate dictionary.
          </p>
        </div>
      )}

      {/* Featured Categories */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-white mb-6">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.slice(1, 5).map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="bg-[#1E1E1E] border border-gray-800 rounded-xl p-4 hover:border-gray-700 hover:scale-105 transition-all duration-200 text-center"
            >
              <h3 className="text-white font-semibold mb-1">{category.name}</h3>
              <p className="text-[#0ABFBC] text-sm">{category.count} signs</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};