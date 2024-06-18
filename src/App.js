import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="w-4/5 px-10 ml-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

