// components/EmptyChannelPage.jsx
import React from 'react';

const EmptyChannelPage = () => {
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
        <button className="px-4 py-2 font-medium border-b-2 border-black">Videos</button>
        <button className="px-4 py-2 text-gray-600">Playlist</button>
        <button className="px-4 py-2 text-gray-600">Tweets</button>
        <button className="px-4 py-2 text-gray-600">Subscribed</button>
      </div>

      {/* Empty State Message */}
      <div className="text-center py-16">
        <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-medium mb-2">No videos uploaded</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          This page has yet to upload a video. Search another page in order to find more videos.
        </p>
      </div>
    </div>
  );
};

export default EmptyChannelPage;