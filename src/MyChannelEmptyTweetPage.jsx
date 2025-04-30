// components/MyChannelEmptyTweetPage.jsx
import React, { useState } from 'react';

import EmojiPicker from 'emoji-picker-react';

const MyChannelEmptyTweetPage = () => {
  const [tweetText, setTweetText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

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
     

      {/* Empty Tweets State */}
      <div className="text-center py-16">
        <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium mb-2">No Tweets</h3>
        <p className="text-gray-600">
          This channel has yet to make a <span className="font-semibold">Tweet.</span>
        </p>
      </div>
    </div>
  );
};

export default MyChannelEmptyTweetPage;