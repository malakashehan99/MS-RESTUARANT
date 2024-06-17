import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import backgroundImage1 from '../assets/loginbackground1.jpg'; // First background image
import backgroundImage2 from '../assets/loginbackground2.jpg'; // Second background image
import '../styles/Login.css' // Import your CSS file for styling

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [currentBackground, setCurrentBackground] = useState(1);

    useEffect(() => {
        // Automatically switch background image every 5 seconds
        const interval = setInterval(() => {
            setCurrentBackground(prev => (prev === 1 ? 2 : 1));
        }, 5000);

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    const handleBackgroundImage = () => {
        if (currentBackground === 1) {
            return `url(${backgroundImage1})`;
        } else {
            return `url(${backgroundImage2})`;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dummy login logic
        if (username !== 'malakashehan' || password !== '12345678') {
            setErrorMessage('Invalid username or password. Please try again.');
        } else {
            setErrorMessage('');
            // Proceed with successful login logic
            console.log("Username:", username);
            console.log("Password:", password);
            navigate('/'); // Redirect to home page after successful login
        }
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen" style={{ backgroundImage: handleBackgroundImage(), backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="w-full max-w-md z-10">
                <div className="text-white text-center relative z-10">
                    <h1 className="text-3xl font-bold mb-2">Welcome to MS RESTAURANT</h1>
                    <p className="text-lg mb-4 animate-pulse">Savor The Flavor</p>
                </div>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative z-10">
                    <h2 className="mb-4 text-2xl text-center text-blue-900">Login</h2>
                    {errorMessage && (
                        <div className="mb-4 text-center text-red-500">
                            {errorMessage}
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="username">
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
                        <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="password">
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
                            className="w-full px-4 py-2 font-bold text-center text-white bg-sky-700 rounded hover:bg-blue-900 focus:outline-none focus:shadow-outline"
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


