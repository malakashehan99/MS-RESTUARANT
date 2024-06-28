import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mylogo from '../assets/mslogo.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        className="fixed z-50 block px-3 py-2 text-white bg-gray-800 rounded-md top-4 left-4 lg:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        )}
      </button>

      {/* Sidebar Content */}
      <div className={`fixed top-0 left-0 w-1/5 h-screen overflow-y-auto bg-red-700 transform lg:translate-x-0 transition-transform duration-200 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          <h1 className="mt-2 mb-4 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-blue-200 via-red-200 to-blue-400 bg-clip-text">MS RESTAURANT</h1>
          <img 
            src={mylogo}
            alt='logo'
            className='py-6 mx-auto mt-10 mb-10 hover:scale-105'/>
          <ul className='font-mono text-xl font-semibold'>
            <li>
              <Link to="/" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={toggleSidebar}>Home</Link>
            </li>
            <li>
              <Link to="/menu" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={toggleSidebar}>Menu</Link>
            </li>
            <li>
              <Link to="/about" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={toggleSidebar}>About</Link>
            </li>
            <li>
              <Link to="/contact" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={toggleSidebar}>Contact Us</Link>
            </li>
            <li>
              <Link to="/login" className="block px-4 py-2 mt-4 text-white bg-orange-600 rounded background-size:contain hover:bg-gray-700" onClick={toggleSidebar}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


