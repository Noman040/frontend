// components/UploadVideoModal.jsx
import React, { useState } from 'react';

const UploadVideoModal = ({ onClose }) => {
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(URL.createObjectURL(file));
    }
    const [showUploadModal, setShowUploadModal] = useState(false);
  };

  return (
    
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold"># Upload Videos</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drag and Drop Area */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
          <svg className="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="font-medium mb-1">Drag and drop video files to upload</p>
          <p className="text-gray-500 text-sm mb-4">
            Your videos will be private until you publish them.
          </p>
          <label className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded inline-block cursor-pointer">
            Select Files
            <input type="file" className="hidden" accept="video/*" />
          </label>
        </div>

        {/* Thumbnail Section */}
        <div className="mb-6">
          <label className="block font-medium mb-2">## Thumbnail*</label>
          <div className="flex items-center gap-4">
            <label className="border border-gray-300 rounded px-4 py-2 cursor-pointer">
              Choose File
              <input 
                type="file" 
                className="hidden" 
                accept="image/*" 
                onChange={handleFileChange}
              />
            </label>
            <span className="text-gray-500">
              {thumbnail ? "1 file chosen" : "No file chosen"}
            </span>
          </div>
          {thumbnail && (
            <div className="mt-2 w-40 h-24 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
              <img src={thumbnail} alt="Thumbnail preview" className="object-cover w-full h-full" />
            </div>
          )}
        </div>

        {/* Title Input */}
        <div className="mb-4">
          <label className="block font-medium mb-2">### Title*</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter video title"
          />
        </div>

        {/* Description Input */}
        <div className="mb-6">
          <label className="block font-medium mb-2">- Description*</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter video description"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadVideoModal;