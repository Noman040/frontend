// components/MyChannelTweetsPage.jsx
import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const MyChannelTweetsPage = () => {
  const [tweetText, setTweetText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [tweets, setTweets] = useState([
    {
      id: 1,
      content: "Exploring the latest features in JavaScript ES11! The language keeps evolving. 🌟 #JavaScript #ES11",
      time: "5 hours ago",
      likes: "425",
      comments: "87"
    },
    {
      id: 2,
      content: "Embracing the benefits of TypeScript for stronger, more reliable code. 🌟 #TypeScript #Programming",
      time: "6 hours ago",
      likes: "425",
      comments: "87"
    }
  ]);

  const handleTweetSubmit = () => {
    if (tweetText.trim()) {
      const newTweet = {
        id: tweets.length + 1,
        content: tweetText,
        time: "Just now",
        likes: "0",
        comments: "0"
      };
      setTweets([newTweet, ...tweets]);
      setTweetText('');
      setShowEmojiPicker(false);
    }
  };

  const onEmojiClick = (emojiData) => {
    setTweetText(prev => prev + emojiData.emoji);
  };

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
      <button className="px-4 py-2 font-medium border-b-2 border-black">Tweets</button>
      <button className="px-4 py-2 text-gray-600">Subscribed</button>
    </div>

      {/* Tweet Composer */}
      <div className="mb-8">
      
        <div className="relative">
          <textarea
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            className="text-black w-full p-3 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write a tweet"
            rows="4"
          />
          <div className="absolute bottom-5 right-3 flex items-center gap-2">
            <button 
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="text-gray-500 hover:text-gray-700"
            >
              😊
            </button>
            <button
              onClick={handleTweetSubmit}
              className={`px-4 py-1 rounded-full text-sm font-medium ${tweetText ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
              disabled={!tweetText}
            >
              Send
            </button>
          </div>
          {showEmojiPicker && (
            <div className="absolute bottom-16 right-0 z-10">
              <EmojiPicker onEmojiClick={onEmojiClick} width={300} height={350} />
            </div>
          )}
        </div>
      
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* Tweets List */}
      <div className="space-y-6">
        {tweets.map(tweet => (
          <div key={tweet.id} className="border-b border-gray-200 pb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold">React Patterns</span>
              <span className="text-gray-500 text-sm">{tweet.time}</span>
            </div>
            <p className="mb-3">{tweet.content}</p>
            <div className="flex gap-4 text-gray-500 text-sm">
              <span className="flex items-center gap-1">
                📅 {tweet.likes}
              </span>
              <span className="flex items-center gap-1">
                🍀 {tweet.comments}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyChannelTweetsPage;