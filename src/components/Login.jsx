import React, { useState, useEffect } from 'react'; 
import { NavLink, useNavigate } from 'react-router-dom';
import backgroundImage1 from '../assets/loginbackground1.jpg';
import backgroundImage2 from '../assets/loginbackground2.jpg';

function Login({ onLogin }) {
  const [username, setUsername] = useState('Malaka19Shehan');
  const [password, setPassword] = useState('ms123456');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [currentBackground, setCurrentBackground] = useState(1);

  // Background image switching logic using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev === 1 ? 2 : 1));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleBackgroundImage = () => {
    return currentBackground === 1 ? `url(${backgroundImage1})` : `url(${backgroundImage2})`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== 'Malaka19Shehan' || password !== 'ms123456') {
      setErrorMessage('Invalid username or password. Please try again.');
    } else {
      setErrorMessage('');
      onLogin();
      navigate('/'); // Navigate to the home page upon successful login
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen" style={{ backgroundImage: handleBackgroundImage(), backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 w-full max-w-md">
        <div className="relative z-10 text-center text-white">
          <h1 className="mb-2 text-3xl font-bold">Welcome to MS RESTAURANT</h1>
          <p className="mb-4 text-lg font-semibold animate-pulse">Savor The Flavor</p>
        </div>
        <form onSubmit={handleSubmit} className="relative z-10 px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-center text-transparent bg-gradient-to-r from-sky-700 to-blue-900 bg-clip-text">Login</h2>
          {errorMessage && (
            <div className="mb-4 text-center text-red-500">
              {errorMessage}
            </div>
          )}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
            <p className="mt-2 text-xs text-right text-blue-500">
              <a href="mailto:your-email@example.com?subject=Password%20Reset">Forgot Password?</a>
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-center text-white rounded bg-sky-700 hover:bg-blue-900 focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
          <p className="mt-4 text-sm text-center text-black">
            Don't have an account?{' '}
            <NavLink to="/register" className="text-blue-500">
              Register
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
