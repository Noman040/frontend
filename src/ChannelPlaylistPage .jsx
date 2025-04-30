// components/ChannelPlaylistPage.jsx
import React from 'react';

const ChannelPlaylistPage = () => {
  const playlists = [
    {
      title: "React Mastery",
      description: "Master the art of building dynamic user interfaces with React.",
      views: "100K",
      time: "2 hours ago",
      videoCount: "12 videos"
    },
    {
      title: "JavaScript Fundamentals",
      description: "Learn the core concepts and fundamentals of JavaScript programming language.",
      views: "120K",
      time: "3 hours ago",
      videoCount: "1 video"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      {/* Channel Header with Background Thumbnail */}
      <div className="relative mb-16">
        {/* Thumbnail Background */}
        <div className="h-40 w-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg"></div>
        
        {/* Channel Profile with Subscribe Button */}
        <div className="absolute -bottom-16 left-4 right-4 flex flex-col md:flex-row items-center md:items-end gap-4">
          {/* Profile Picture */}
          <div className="w-32 h-32 rounded-full border-4 border-white bg-white flex items-center justify-center relative">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">RP</span>
            </div>
          </div>
          
          {/* Channel Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold"># React Patterns</h1>
                <p className="text-gray-600">@reactpatterns</p>
              </div>
              <button className="mt-4 md:mt-0 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2">600k Subscribers - 220 Subscribed</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-200 mb-6 mt-8">
        <button className="px-4 py-2 text-gray-600">Videos</button>
        <button className="px-4 py-2 font-medium border-b-2 border-black">Playlist</button>
        <button className="px-4 py-2 text-gray-600">Tweets</button>
        <button className="px-4 py-2 text-gray-600">Subscribed</button>
      </div>
    

      {/* Second Row - Two Playlists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <span className="font-medium">Playlist</span>
            <span className="text-gray-500 text-sm">1 video</span>
          </div>
          <p className="text-gray-600 text-sm mb-3">120K Views - 3 hours ago</p>
          <div className="bg-gray-200 h-40 rounded-lg mb-3 flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-1">## React Mastery</h3>
          <p className="text-gray-700">Master the art of building dynamic user interfaces with React.</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <span className="font-medium">Playlist</span>
            <span className="text-gray-500 text-sm">12 video</span>
          </div>
          <p className="text-gray-600 text-sm mb-3">120K Views - 3 hours ago</p>
          <div className="bg-gray-200 h-40 rounded-lg mb-3 flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-1">## JavaScript Fundamentals</h3>
          <p className="text-gray-700">Learn the core concepts and fundamentals of JavaScript programming language.</p>
        </div>
      </div>
    </div>
  );
};

export default ChannelPlaylistPage;