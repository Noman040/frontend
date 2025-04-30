import React, { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`flex flex-col fixed left-0 h-full bg-gray-800 text-white ${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300`}>
      {/* Toggle Button */}
      <button onClick={toggleSidebar} className="p-4 text-left hover:bg-gray-700">
        {isCollapsed ? '>' : '<'}
      </button>

   

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul>
          <li className="p-4 hover:bg-gray-700 hover:cursor-pointer border border-white-800 px-4 py-2 ml-1 mr-1">
            {isCollapsed ? '🏠' : 'Home'}
          </li>
          <li className="p-4 hover:bg-gray-700 hover:cursor-pointer border border-white-800 px-4 py-2 ml-1 mr-1">
            {isCollapsed ? '❤️' : 'Liked Videos'}
          </li>
          <li className="p-4 hover:bg-gray-700 hover:cursor-pointer border border-white-800 px-4 py-2 ml-1 mr-1">
            {isCollapsed ? '🕒' : 'History'}
          </li>
          <li className="p-4 hover:bg-gray-700 hover:cursor-pointer border border-white-800 px-4 py-2 ml-1 mr-1">
            {isCollapsed ? '📁' : 'My Content'}
          </li>
          <li className="p-4 hover:bg-gray-700 hover:cursor-pointer border border-white-800 px-4 py-2 ml-1 mr-1">
            {isCollapsed ? '📚' : 'Collections'}
          </li>
          <li className="p-4 hover:bg-gray-700 hover:cursor-pointer border border-white-800 px-4 py-2 ml-1 mr-1">
            {isCollapsed ? '👥' : 'Subscribers'}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;