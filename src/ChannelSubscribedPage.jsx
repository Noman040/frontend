// components/ChannelSubscribersPage.jsx
import React, { useState } from 'react';

const ChannelSubscribersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const channels = [
    { name: "Code Master", subscribers: "20K", isSubscribed: false },
    { name: "React Ninja", subscribers: "40K", isSubscribed: true },
    { name: "Async Masters", subscribers: "60K", isSubscribed: true },
    { name: "Code Crafters", subscribers: "80K", isSubscribed: false }
  ];

  const filteredChannels = channels.filter(channel =>
    channel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <button className="px-4 py-2 text-gray-600">Playlist</button>
      <button className="px-4 py-2 text-gray-600">Tweets</button>
      <button className="px-4 py-2 font-medium border-b-2 border-black">Subscribed</button>
    </div>


      {/* Search Section */}
      <div className="mb-8">
       
        
        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search channels..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-black w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg 
            className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
        
        {/* Channels List */}
        <div className="space-y-4">
          {filteredChannels.map((channel, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              {/* Channel Info with Icon */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {channel.name.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">**{channel.name}**</h4>
                  <p className="text-gray-500 text-sm">{channel.subscribers} Subscribers</p>
                </div>
              </div>
              
              {/* Subscribe Button */}
              <button className={`px-4 py-1 rounded-full text-sm font-medium ${
                channel.isSubscribed 
                  ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' 
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}>
                {channel.isSubscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

    </div>
  );
};

export default ChannelSubscribersPage;