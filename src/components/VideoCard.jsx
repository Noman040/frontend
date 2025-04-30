// components/VideoCard.jsx
import React from 'react';

const VideoCard = ({ title, views, time, author }) => {
  // Function to format view counts
  const formatViews = (views) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views;
  };

  return (
    <div className="mb-6 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition duration-200">
      <div className="bg-gray-200 h-40 w-full rounded-lg mb-2"></div>
      <div className="p-2">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm">
          {formatViews(views)} Views - {time} ago
        </p>
        <p className="text-gray-500 text-sm mt-1">{author}</p>
      </div>
    </div>
  );
};

export default VideoCard;