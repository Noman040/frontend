// components/VideosPage.jsx
import React from 'react';
import VideoCard from './VideoCard';

const VideosPage = () => {
  const videos = [
    {
      title: "JavaScript Fundamentals: Variables and Data Types",
      views: 10300,
      time: "44 minutes",
      author: "Code Master"
    },
    {
      title: "Getting Started with Express.js",
      views: 11000,
      time: "5 hours",
      author: "Express Learner"
    },
    {
      title: "Building a RESTful API with Node.js and Express",
      views: 14500,
      time: "7 hours",
      author: "API Builder"
    },
    {
      title: "Introduction to React Native",
      views: 10900,
      time: "8 hours",
      author: "React Native Dev"
    },
    {
      title: "Creating Custom Hooks in React",
      views: 9300,
      time: "9 hours",
      author: "Hook Master"
    },
    {
      title: "Building Scalable Web Applications with Django",
      views: 18900000,
      time: "12 hours",
      author: "Django Master"
    },
    {
        title: "Advanced React Patterns",
        views: 8700,
        time: "1 day",
        author: "React Guru"
      },
      {
        title: "Python for Data Science",
        views: 25600,
        time: "2 days",
        author: "Data Wizard"
      },
      {
        title: "CSS Grid Masterclass",
        views: 12400,
        time: "3 days",
        author: "CSS Expert"
      }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-2xl font-bold mb-6">Ps</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            views={video.views}
            time={video.time}
            author={video.author}
          />
        ))}
      </div>
    </div>
  );
};

export default VideosPage;