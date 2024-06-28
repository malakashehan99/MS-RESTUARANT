import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Login from './components/Login';
import Register from './components/Register'; 

function App() {
 
  const isLoggedIn = false; 

  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="w-4/5 px-10 ml-auto">
          <Routes>
            <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={isLoggedIn ? <Navigate to="/" /> : <Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
