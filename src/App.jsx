import { useState } from 'react';
import './App.css';
import Header from './components/header.jsx'; // Import the Header component
import Sidebar from './components/sidebar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login.jsx'; // Adjust the path as needed
import Signup from './components/signup.jsx';
import VideosPage from './components/VideoPage.jsx';
import VideoList from './components/VideoList';
import VideoDetailPage from './components/VideoDetailPage';
import EmptyChannelPage from './components/EmptyChannelPage';
import ChannelVideoList from './components/ChannelVideoList';
import ChannelEmptyPlaylist from './components/ChannelEmptyPlaylist .jsx';
import ChannelPlaylistPage from './ChannelPlaylistPage .jsx';
import ChannelPlaylistVideosPage from './ChannelPlaylistVideosPage.jsx';
import ChannelEmptyTweetPage from './ChannelEmptyTweetPage.jsx'
import ChannelTweetsPage from './ChannelTweetsPage.jsx';
import ChannelEmptySubscribedPage from './ChannelEmptySubscribedPage.jsx';
import ChannelSubscribersPage from './ChannelSubscribedPage.jsx';
import MyChannelEmptyVideosPage from './components/MyChannelEmptyVideoPage.jsx';
// import UploadVideoModal from './components/UploadVideoModal.jsx';
import MyChannelEmptyTweetPage from './MyChannelEmptyTweetPage.jsx';
import MyChannelTweetsPage from './MyChannelTweetsPage .jsx';
import EditPersonalInfoPage from './EditPersonalInfoPage.jsx';
import EditChannelInfoPage from './EditChannelInfoPage.jsx';
import ChangePasswordPage from './ChangePasswordPage.jsx';
import PrivacyPolicyPage from './PrivacyPolicyPage.jsx';
import TermsandConditionsPage from './TermsandConditionsPage.jsx';
import Footer from './Footer.jsx';
import PrivacyPolicy from './components/PPP.jsx';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router className="flex">
      <div className="flex-1 ml-64">
        <Header /> {/* Render the Header component */}
        <Sidebar /> {/* Render the Sidebar component */}
        <VideosPage/>
        <VideoList />
        <VideoDetailPage />
        <EmptyChannelPage />
        <ChannelVideoList />
        <ChannelEmptyPlaylist /> 
        <ChannelPlaylistPage />
        <ChannelPlaylistVideosPage />
        <ChannelEmptyTweetPage />
        <ChannelTweetsPage />
        <ChannelEmptySubscribedPage />
        <ChannelSubscribersPage />
        <MyChannelEmptyVideosPage />
        {/* <UploadVideoModal />
         */}
        <MyChannelEmptyTweetPage />
        <MyChannelTweetsPage />
        <EditPersonalInfoPage />
        <EditChannelInfoPage />
        <ChangePasswordPage />
        <PrivacyPolicyPage />
        <TermsandConditionsPage />
        <Footer />
        <PrivacyPolicy />

        <Routes>
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} /> {/* Default route */}
          <Route path="/videos" element={<VideoList />} />
          <Route path="/video/:id" element={<VideoDetailPage />} />
          <Route path="/channel/:id" element={<EmptyChannelPage />} />
          <Route path="/channel/videos" element={<ChannelVideoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;