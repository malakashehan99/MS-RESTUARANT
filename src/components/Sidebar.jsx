import React from 'react';
import { Link } from 'react-router-dom';
import mylogo from '../assets/mslogo.png';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-1/5 h-screen overflow-y-auto bg-red-700">
      <div className="p-4">
        <h1 className="mt-2 mb-4 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-blue-200 via-red-200 to-blue-400 bg-clip-text">MS RESTAURANT</h1>
        <img 
        src={mylogo}
        alt='logo'
        className='py-6 mx-auto mt-10 mb-10 hover:scale-105'/>
        <ul className='font-mono text-xl font-semibold'>
          <li>
            <Link to="/" className="block px-4 py-2 text-white hover:bg-gray-700">Home</Link>
          </li>
          <li>
            <Link to="/menu" className="block px-4 py-2 text-white hover:bg-gray-700">Menu</Link>
          </li>
          <li>
            <Link to="/about" className="block px-4 py-2 text-white hover:bg-gray-700">About</Link>
          </li>
          <li>
            <Link to="/contact" className="block px-4 py-2 text-white hover:bg-gray-700">Contact Us</Link>
          </li>
          <li>
            <Link to="/login" className="block px-4 py-2 mt-4 text-white bg-orange-600 rounded background-size:contain hover:bg-gray-700">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;


