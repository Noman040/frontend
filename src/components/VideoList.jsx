// components/VideoList.jsx
import React from 'react';

const VideoList = () => {
  const videos = [
    {
      id: 1,
      title: "JavaScript Fundamentals: Variables and Data",
      subtitle: "Types",
      views: "10.3k",
      time: "44 minutes ago",
      author: "Code Master",
      description: "Learn the basics of JavaScript, including variables, data types, and how to use them in your programs."
    },
    {
      id: 2,
      title: "Getting Started with Express.js",
      subtitle: "",
      views: "11k",
      time: "5 hours ago",
      author: "Express Learner",
      description: "Learn the basics of building web applications with Node.js and Express.js framework."
    },
    {
      id: 3,
      title: "Building a RESTful API with Node.js and Express",
      subtitle: "",
      views: "14.5k",
      time: "7 hours ago",
      author: "API Builder",
      description: "Learn how to create a RESTful API using Node.js and the Express framework for building web applications."
    },
    {
      id: 4,
      title: "Introduction to React Native",
      subtitle: "",
      views: "10.9k",
      time: "8 hours ago",
      author: "React Native Dev",
      description: "Discover how to build mobile applications using React Native for both Android and iOS platforms."
    },
    {
        id: 5,
        title: "Advanced React Hooks",
        subtitle: "useEffect & useReducer",
        views: "8.7k",
        time: "1 day ago",
        author: "React Guru",
        description: "Deep dive into advanced React hooks and how to use them effectively in your applications."
      },
      {
        id: 6,
        title: "Python for Data Science",
        subtitle: "Pandas Basics",
        views: "25.6k",
        time: "2 days ago",
        author: "Data Wizard",
        description: "Learn how to use Pandas for data manipulation and analysis in Python."
      },
      {
        id: 7,
        title: "CSS Grid Layout",
        subtitle: "Modern Web Design",
        views: "12.4k",
        time: "3 days ago",
        author: "CSS Expert",
        description: "Master CSS Grid to create responsive web layouts without frameworks."
      },
      {
        id: 8,
        title: "Docker for Developers",
        subtitle: "Containerization Basics",
        views: "18.2k",
        time: "4 days ago",
        author: "DevOps Engineer",
        description: "Learn how to containerize your applications using Docker for easier deployment."
      }
  ];

  return (
    <div className="max-w-4xl  py-4 px-4 space-y-6">
      {videos.map((video) => (
        <div key={video.id} className="flex gap-4">
          {/* Thumbnail placeholder */}
          <div className="flex-shrink-0 w-64 h-36 bg-gray-200 rounded-lg"></div>
          
          {/* Content */}
          <div className="flex-1">
            {/* Title and Subtitle */}
            <div className="mb-1">
              <h3 className="text-lg font-semibold">{video.title}</h3>
              {video.subtitle && (
                <h4 className="text-lg font-semibold">{video.subtitle}</h4>
              )}
            </div>
            
            {/* Views and time */}
            <p className="text-sm text-gray-600 mb-1">
              {video.views} Views - {video.time}
            </p>
            
            {/* Author */}
            <p className="text-sm font-medium text-gray-800 mb-2">{video.author}</p>
            
            {/* Description */}
            <p className="text-sm text-gray-700">{video.description}</p>
          </div>
        </div>
      ))}
      
 
    </div>
  );
};

export default VideoList;