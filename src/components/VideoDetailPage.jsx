// components/VideoDetailPage.jsx
import React from 'react';

const VideoDetailPage = () => {
  const relatedVideos = [
    {
      title: "JavaScript Fundamentals: Variables and Data Types",
      author: "Code Master",
      views: "10.3k",
      time: "44 minutes ago"
    },
    {
      title: "Getting Started with Express.js",
      author: "Express Learner",
      views: "11k",
      time: "5 hours ago"
    },
    {
      title: "Building a RESTful API with Node.js and Express",
      author: "API Builder",
      views: "14.5k",
      time: "7 hours ago"
    },
    {
      title: "Introduction to React Native",
      author: "React Native Dev",
      views: "10.9k",
      time: "8 hours ago"
    },
    {
      title: "Creating Custom Hooks in React",
      author: "Hook Master",
      views: "9.3k",
      time: "9 hours ago"
    }
  ];

  const comments = [
    {
      id: 1,
      author: "ReactFan123",
      text: "This tutorial helped me so much! Exactly what I was looking for.",
      time: "2 hours ago",
      likes: 24
    },
    {
      id: 2,
      author: "CodeNewbie",
      text: "Can someone explain the difference between useEffect and useReducer again?",
      time: "5 hours ago",
      likes: 8
    },
    {
      id: 3,
      author: "WebDevPro",
      text: "Great content as always! Would love to see more advanced patterns.",
      time: "1 day ago",
      likes: 42
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-4 px-4">
      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Video and Info */}
        <div className="lg:w-2/3">
          {/* Video Title Section */}
          <div className="mb-4">
            <h1 className="text-3xl font-bold"># MP4</h1>
            <h2 className="text-2xl font-bold mt-1">## Grooming a Daffodill</h2>
            <div className="flex items-center mt-2">
              <span className="bg-gray-200 px-2 py-1 rounded text-sm font-medium">
                D04 / 1:00
              </span>
            </div>
          </div>

          {/* Video Player Placeholder */}
          <div className="relative bg-gray-800 w-full h-96 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-white text-2xl">Video Player</span>
            
            {/* Like/Dislike Buttons */}
            
            {/* <div className="absolute bottom-4 right-4 flex gap-2">
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full flex items-center gap-2">
                <span>👍 3.2K</span>
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full flex items-center gap-2">
                <span>👎 124</span>
              </button>
            </div> */}
          </div>

          {/* Video Info Section */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold">Advanced React Patterns</h3>
              <div className="flex items-center text-gray-600 text-sm mt-1">
                <span>30.164 Views - 18 hours ago</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="font-medium">React Patterns</span>
                <span className="text-gray-500 text-sm ml-2">757K Subscribers</span>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium">
              Subscribe
            </button>
            {/* <button className="ml-2 text-blue-600 font-medium">Save</button> */}
          </div>

          {/* Description Section */}
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <p className="font-medium mb-2">
              Live into the world of React with our latest tutorial series: "Advanced React Patterns"!
            </p>
            <p className="text-gray-700">
              Whether you're a beginner or advanced developer, this series will take your React skills to the next level.
            </p>
          </div>

          {/* Comments Section */}
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-4">573 Comments</h4>
            
            {/* Comment Form */}
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
              <div className="flex-1 flex">
                <input 
                  type="text" 
                  placeholder="Add a Comment" 
                  className="flex-1 border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                />
                
              </div>
            </div>
            
            {/* Comments List */}
            <div className="space-y-4">
              {comments.map(comment => (
                <div key={comment.id} className="flex">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">{comment.author}</span>
                      <span className="text-gray-500 text-sm">{comment.time}</span>
                    </div>
                    <p className="mt-1">{comment.text}</p>
                    <div className="flex items-center mt-2 text-gray-500">
                      <button className="flex items-center mr-4">
                        <span className="mr-1">👍</span>
                        <span>{comment.likes}</span>
                      </button>
                      <button className="flex items-center mr-4">
                        <span className="mr-1">👎</span>
                      </button>
                      <button className="text-sm">Reply</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Related Videos */}
        <div className="lg:w-1/3 space-y-4">
          <h5 className="text-xl font-bold">Related Videos</h5>
          {relatedVideos.map((video, index) => (
            <div key={index} className="flex gap-3">
              <div className="flex-shrink-0 w-40 h-24 bg-gray-200 rounded"></div>
              <div>
                <h6 className="font-medium line-clamp-2">{video.title}</h6>
                <p className="text-sm text-gray-600">{video.author}</p>
                <p className="text-xs text-gray-500">{video.views} Views • {video.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetailPage;