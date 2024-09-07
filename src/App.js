import React from 'react';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Offers from './pages/Offers';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import Header from './components/Header';  // Adjust path as necessary

function App() {
  console.log("App component is rendering"); // Add debug log

  return (
    <Router>
      <Header /> {/* Make sure this renders */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;




