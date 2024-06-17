import React from 'react';
import { Link } from 'react-router-dom';
import mylogo from '../assets/mslogo.png';

const Sidebar = () => {
  return (
    <div className="bg-red-700 h-screen w-1/5 fixed top-0 left-0 overflow-y-auto">
      <div className="p-4">
        <h1 className="text-center text-2xl font-bold mb-4 mt-2 bg-gradient-to-r from-blue-200 via-red-200 to to-blue-400 bg-clip-text text-transparent">MS RESTAURANT</h1>
        <img 
        src={mylogo}
        alt='logo'
        className='mx-auto mb-10 mt-10 py-6 hover:scale-105'/>
        <ul>
          <li>
            <Link to="/" className="text-white block py-2 px-4 hover:bg-gray-700">Home</Link>
          </li>
          <li>
            <Link to="/menu" className="text-white block py-2 px-4 hover:bg-gray-700">Menu</Link>
          </li>
          <li>
            <Link to="/about" className="text-white block py-2 px-4 hover:bg-gray-700">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white block py-2 px-4 hover:bg-gray-700">Contact Us</Link>
          </li>
          <li>
            <Link to="/login" className="text-white block mt-4 py-2 px-4 hover:bg-gray-700">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
