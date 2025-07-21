import React, { useState } from 'react';
import { Upload as UploadIcon, Camera, Video, FileText, CheckCircle, AlertCircle, Play } from 'lucide-react';

export const Upload: React.FC = () => {
  const [activeTab, setActiveTab] = useState('record');
  const [isRecording, setIsRecording] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const practiceCategories = [
    { id: 'basics', name: 'Basic Signs', description: 'Practice fundamental ISL signs' },
    { id: 'numbers', name: 'Numbers', description: 'Number practice sessions' },
    { id: 'family', name: 'Family Signs', description: 'Family-related vocabulary' },
    { id: 'emotions', name: 'Emotions', description: 'Express feelings and emotions' },
  ];

  const recentUploads = [
    { id: 1, name: 'Hello Practice', date: '2 hours ago', status: 'analyzed', score: 85 },
    { id: 2, name: 'Numbers 1-10', date: '1 day ago', status: 'processing', score: null },
    { id: 3, name: 'Family Signs', date: '2 days ago', status: 'analyzed', score: 92 },
    { id: 4, name: 'Thank You', date: '3 days ago', status: 'analyzed', score: 78 },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'analyzed': return <CheckCircle className="w-4 h-4 text-[#10B981]" />;
      case 'processing': return <AlertCircle className="w-4 h-4 text-[#FFDA00]" />;
      default: return <FileText className="w-4 h-4 text-[#E0E0E0]" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-[#10B981]';
    if (score >= 60) return 'text-[#FFDA00]';
    return 'text-[#EF4444]';
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-white mb-2">Practice with SignMate</h1>
        <p className="text-[#E0E0E0]">Record your practice and get AI-powered feedback</p>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="flex space-x-1 bg-[#1E1E1E] p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('record')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'record'
                ? 'bg-[#0ABFBC] text-[#121212]'
                : 'text-[#E0E0E0] hover:text-white'
            }`}
          >
            Record Practice
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'upload'
                ? 'bg-[#0ABFBC] text-[#121212]'
                : 'text-[#E0E0E0] hover:text-white'
            }`}
          >
            Upload Video
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'history'
                ? 'bg-[#0ABFBC] text-[#121212]'
                : 'text-[#E0E0E0] hover:text-white'
            }`}
          >
            Practice History
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'record' && (
        <div className="space-y-8">
          {/* Recording Interface */}
          <div className="bg-[#1E1E1E] rounded-xl border border-gray-800 p-8">
            <div className="text-center">
              <div className="w-64 h-48 mx-auto bg-gray-800 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                {isRecording ? (
                  <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                ) : (
                  <Camera className="w-16 h-16 text-[#E0E0E0]" />
                )}
                <span className="absolute bottom-3 left-3 text-white text-sm bg-black/70 px-2 py-1 rounded">
                  {isRecording ? 'Recording...' : 'Camera Ready'}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {isRecording ? 'Recording Your Practice' : 'Ready to Practice?'}
              </h3>
              <p className="text-[#E0E0E0] mb-6">
                {isRecording 
                  ? 'SignMate is recording your practice session'
                  : 'Position yourself in the camera frame and start practicing your signs'
                }
              </p>

              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                  isRecording
                    ? 'bg-[#EF4444] text-white hover:bg-[#EF4444]/90'
                    : 'bg-[#0ABFBC] text-[#121212] hover:bg-[#0ABFBC]/90'
                }`}
              >
                {isRecording ? 'Stop Recording' : 'Start Recording'}
              </button>
            </div>
          </div>

          {/* Practice Categories */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Choose Practice Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {practiceCategories.map((category) => (
                <button
                  key={category.id}
                  className="bg-[#1E1E1E] border border-gray-800 rounded-xl p-4 hover:border-gray-700 hover:scale-105 transition-all duration-200 text-left"
                >
                  <h3 className="text-white font-semibold mb-1">{category.name}</h3>
                  <p className="text-[#E0E0E0] text-sm">{category.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'upload' && (
        <div className="space-y-8">
          {/* Upload Area */}
          <div className="bg-[#1E1E1E] rounded-xl border border-gray-800 border-dashed p-12">
            <div className="text-center">
              <UploadIcon className="w-16 h-16 text-[#0ABFBC] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Upload Practice Video</h3>
              <p className="text-[#E0E0E0] mb-6">
                Drag and drop your video file here, or click to browse
              </p>
              
              <input
                type="file"
                accept="video/*"
                className="hidden"
                id="video-upload"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setUploadedFile(e.target.files[0].name);
                  }
                }}
              />
              <label
                htmlFor="video-upload"
                className="inline-block bg-[#0ABFBC] text-[#121212] px-6 py-3 rounded-lg font-semibold hover:bg-[#0ABFBC]/90 transition-colors duration-200 cursor-pointer"
              >
                Choose Video File
              </label>
              
              {uploadedFile && (
                <div className="mt-4 p-4 bg-[#10B981]/20 rounded-lg">
                  <p className="text-[#10B981] font-medium">File selected: {uploadedFile}</p>
                </div>
              )}
            </div>
          </div>

          {/* Upload Form */}
          <div className="bg-[#1E1E1E] rounded-xl border border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Practice Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-[#E0E0E0] font-medium mb-2">Practice Title</label>
                <input
                  type="text"
                  placeholder="e.g., Basic Greetings Practice"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-[#E0E0E0] focus:border-[#0ABFBC] focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-[#E0E0E0] font-medium mb-2">Category</label>
                <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#0ABFBC] focus:outline-none">
                  <option>Select a category</option>
                  <option>Basic Signs</option>
                  <option>Numbers</option>
                  <option>Family Signs</option>
                  <option>Emotions</option>
                </select>
              </div>
              
              <div>
                <label className="block text-[#E0E0E0] font-medium mb-2">Notes (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Add any notes about this practice session..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-[#E0E0E0] focus:border-[#0ABFBC] focus:outline-none resize-none"
                />
              </div>
              
              <button className="w-full bg-[#0ABFBC] text-[#121212] py-3 rounded-lg font-semibold hover:bg-[#0ABFBC]/90 transition-colors duration-200">
                Upload & Analyze
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="space-y-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#1E1E1E] rounded-xl p-6 border border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#E0E0E0] text-sm font-medium">Total Practices</p>
                  <p className="text-3xl font-bold text-white mt-1">24</p>
                </div>
                <Video className="w-8 h-8 text-[#0ABFBC]" />
              </div>
            </div>
            
            <div className="bg-[#1E1E1E] rounded-xl p-6 border border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#E0E0E0] text-sm font-medium">Average Score</p>
                  <p className="text-3xl font-bold text-white mt-1">85%</p>
                </div>
                <CheckCircle className="w-8 h-8 text-[#10B981]" />
              </div>
            </div>
            
            <div className="bg-[#1E1E1E] rounded-xl p-6 border border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#E0E0E0] text-sm font-medium">Improvement</p>
                  <p className="text-3xl font-bold text-white mt-1">+12%</p>
                </div>
                <AlertCircle className="w-8 h-8 text-[#FFDA00]" />
              </div>
            </div>
          </div>

          {/* Recent Uploads */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Recent Practice Sessions</h2>
            <div className="space-y-4">
              {recentUploads.map((upload) => (
                <div
                  key={upload.id}
                  className="bg-[#1E1E1E] rounded-xl border border-gray-800 p-4 hover:border-gray-700 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0ABFBC]/20 to-[#FFDA00]/20 rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6 text-[#0ABFBC]" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{upload.name}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          {getStatusIcon(upload.status)}
                          <span className="text-[#E0E0E0] text-sm capitalize">{upload.status}</span>
                          <span className="text-[#E0E0E0] text-sm">• {upload.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      {upload.score && (
                        <div className="text-center">
                          <p className={`text-xl font-bold ${getScoreColor(upload.score)}`}>
                            {upload.score}%
                          </p>
                          <p className="text-[#E0E0E0] text-xs">Score</p>
                        </div>
                      )}
                      <button className="bg-[#0ABFBC] text-[#121212] px-4 py-2 rounded-lg font-medium hover:bg-[#0ABFBC]/90 transition-colors duration-200">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};