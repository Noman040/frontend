import React, { useState } from 'react';

const ChangePasswordPage = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Current password is required';
    }
    
    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length <= 8) {
      newErrors.newPassword = 'Password must be more than 8 characters';
    }
    
    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically make an API call to change the password
      console.log('Password change submitted:', formData);
      setSuccessMessage('Password changed successfully!');
      
      // Reset form
      setFormData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      
      // Hide success message after 3 seconds
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
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
    <button className="px-4 py-2 text-gray-600">Personal Information</button>
    <button className="px-4 py-2 text-gray-600">Channel Information</button>
    <button className="px-4 py-2 font-medium border-b-2 border-black">Change Password</button>
  </div>
      
       {/* Left Sidebar */}
       <div className="flex flex-col md:flex-row gap-8">
       <div className="md:w-1/3">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Password</h2>
            <p className="text-gray-600 mb-6">Please enter your current password to change your password.</p>       
          </div>
        </div>
       

        {/* Right Column */}
     
        <div className="md:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Current password
              </label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className={`text-black w-full px-3 py-2 border rounded-md ${errors.currentPassword ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.currentPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.currentPassword}</p>
              )}
            </div>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                New password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className={`text-black w-full px-3 py-2 border rounded-md ${errors.newPassword ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.newPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.newPassword}</p>
              )}
              <p className="mt-1 text-sm text-gray-500">
                Your new password must be more than 8 characters.
              </p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`text-black w-full px-3 py-2 border rounded-md ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Change Password
            </button>

            {successMessage && (
              <p className="mt-4 text-sm text-green-600">{successMessage}</p>
            )}
             <a 
              href="#Cancel" 
              className="ml-10 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Cancel
            </a>
          </form>

        
        </div>
        </div>
      </div>
      </div>
  );
};


export default ChangePasswordPage;