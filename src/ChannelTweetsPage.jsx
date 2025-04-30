// components/ChannelPlaylistPage.jsx
import React from 'react';

const ChannelTweetsPage = () => {
  const tweets = [
    {
      id: 1,
      content: "Exploring the latest features in JavaScript ES11. The language keeps evolving. #JavaScript #ES11",
      time: "5 hours ago",
      likes: "425",
      comments: "87"
    },
    {
      id: 2,
      content: "Embracing the benefits of TypeScript for stronger, more reliable code. #TypeScript #Programming",
      time: "6 hours ago",
      likes: "425",
      comments: "87"
    },
    {
      id: 3,
      content: "Styling made easy with Tailwind CSS! Rapidly build beautiful, responsive interfaces. #TailwindCSS #WebDev",
      time: "7 hours ago",
      likes: "425",
      comments: "87"
    },
    {
      id: 4,
      content: "Building dynamic user interfaces with React! The go-to library for modern web development. #React #WebDev",
      time: "8 hours ago",
      likes: "425",
      comments: "87"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      {/* Channel Header with Background Thumbnail */}
      <div className="relative mb-16">
        <div className="h-40 w-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg"></div>
        
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
        <button className="px-4 py-2 font-medium border-b-2 border-black">Tweets</button>
        <button className="px-4 py-2 text-gray-600">Subscribed</button>
      </div>

      {/* Tweets List */}
      <div className="space-y-6">
        {tweets.map(tweet => (
          <div key={tweet.id} className="border-b border-gray-200 pb-6">
            <div className="flex items-start gap-3">
              {/* Channel Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                <span className="text-white text-sm font-bold">RP</span>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold">React Patterns</span>
                  <span className="text-gray-500 text-sm">{tweet.time}</span>
                </div>
                <p className="mb-3">{tweet.content}</p>
                <div className="flex gap-4 text-gray-500 text-sm">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    {tweet.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {tweet.comments}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelTweetsPage;