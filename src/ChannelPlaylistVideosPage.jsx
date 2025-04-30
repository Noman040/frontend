// components/PlaylistPageWithThumbnails.jsx
import React from 'react';

const ChannelPlaylistVideosPage = () => {
  const videos = [
    {
      title: "JavaScript Fundamentals: Variables and Data Types",
      views: "10.3k",
      time: "44 minutes ago",
      author: "Code Master"
    },
    {
      title: "Getting Started with Express.js",
      views: "11k",
      time: "5 hours ago",
      author: "Express Learner"
    },
    {
      title: "Building a RESTful API with Node.js and Express",
      views: "14.5k",
      time: "7 hours ago",
      author: "API Builder"
    },
    {
      title: "Introduction to React Native",
      views: "10.9k",
      time: "8 hours ago",
      author: "React Native Dev"
    },
    {
      title: "Creating Custom Hooks in React",
      views: "9.3k",
      time: "9 hours ago",
      author: "Hook Master"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-6 px-4 flex flex-col md:flex-row gap-8">
      {/* Left Sidebar - Playlist Info */}
      <div className="md:w-1/3">
        <div className="bg-gray-50 p-4 rounded-lg top-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Playlist</span>
            <span className="text-gray-500 text-sm">12 videos</span>
          </div>
          <p className="text-gray-600 text-sm mb-4">100K Views - 2 hours ago</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">React Mastery</h3>
            <p className="text-gray-700">Master the art of building dynamic user interfaces with React.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold">React Patterns</h3>
            <p className="text-gray-500 text-sm">757K Subscribers</p>
          </div>
        </div>
      </div>

      {/* Right Column - Videos with Thumbnails */}
      <div className="md:w-2/3">
        <h1 className="text-2xl font-bold mb-6">Videos in this playlist</h1>
        
        <div className="space-y-6">
          {videos.map((video, index) => (
            <div key={index} className="flex gap-4 border-b border-gray-200 pb-6">
              {/* Thumbnail */}
              <div className="flex-shrink-0 w-40 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-xs">{index + 1}</span>
              </div>
              
              {/* Video Info */}
              <div>
                <h3 className="text-lg font-semibold">{video.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{video.views} Views - {video.time}</p>
                <p className="text-gray-500 text-sm mt-1">{video.author}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Time Display */}
        <div className="text-right text-gray-500 text-sm mt-8">1637</div>
      </div>
    </div>
  );
};

export default ChannelPlaylistVideosPage;