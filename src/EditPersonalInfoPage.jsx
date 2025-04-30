// components/EditPersonalInfoPage.jsx
import React from 'react';

const EditPersonalInfoPage = () => {
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
            <button className="mt-4 md:mt-0 bg-purple-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-medium">
              View Channel
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-2">600k Subscribers - 220 Subscribed</p>
        </div>
      </div>
    </div>

    {/* Navigation Tabs */}
    <div className="flex border-b border-gray-200 mb-6 mt-8">
      <button className="px-4 py-2 font-medium border-b-2 border-black">Personal Information</button>
      <button className="px-4 py-2 text-gray-600">Channel Information</button>
      <button className="px-4 py-2 text-gray-600">Change Password</button>
    </div>

      {/* Sidebar and Main Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Sidebar */}
        <div className="md:w-1/3">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Personal Info</h2>
            <p className="text-gray-600 mb-6">Update your photo and personal details.</p>       
          </div>
        </div>

        {/* Right Content */}
        <div className="border rounded-lg md:w-2/3">
        
       

          {/* Profile Picture */}
          <div className="m-5 flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">RP</span>
            </div>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Change photo
            </button>
          </div>

          {/* Name Fields */}
          <div className="m-5 grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">First name</label>
              <input className="text-black p-2 border border-gray-300 rounded bg-gray-50" type="text" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Last name</label>
              <input className="text-black p-2 border border-gray-300 rounded bg-gray-50" type="text" />
            </div>
          </div>

          {/* Email Field */}
          <div className="m-5 mb-8">
            <label className="block text-gray-700 text-sm font-medium mb-1">Email address</label>
           <input className="text-black p-2 border border-gray-300 rounded bg-gray-50" type="text" />
          </div>

         {/* Action Buttons */}
         <div className="border rounded-lg flex gap-3 pt-4 pb-4 pl-5">
            <button className=" px-8 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPersonalInfoPage;