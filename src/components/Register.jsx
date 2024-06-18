import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import backgroundImage1 from '../assets/loginbackground1.jpg';
import backgroundImage2 from '../assets/loginbackground2.jpg';
//import '../styles/Register.css';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
    const [currentBackground, setCurrentBackground] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBackground(prev => (prev === 1 ? 2 : 1));
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const handleBackgroundImage = () => {
        return currentBackground === 1 ? `url(${backgroundImage1})` : `url(${backgroundImage2})`;
    };

    const validateUsername = (username) => {
        return username.length >= 10;
    };

    const validateEmail = (email) => {
        // Simple email regex for validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };




    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateUsername(username)) {
            setErrorMessage('Username must be at least 10 characters long.');
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        
        if (!validatePassword(password)) {
            setErrorMessage('Password must be at least 8 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match. Please try again.');
            return;
        }

        if (!agreeTerms) {
            setErrorMessage('You must agree to the terms & conditions.');
            return;
        }


         {
            setErrorMessage('');
            setSuccessMessage('Registration successful!');
            console.log("Username:", username);
            console.log("Password:", password);
            navigate('/login'); // Redirect to login page after successful registration
        }
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen" style={{ backgroundImage: handleBackgroundImage(), backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="z-10 w-full max-w-md">
                <div className="relative z-10 text-center text-white">
                    <h1 className="mb-2 text-3xl font-bold ">Join us for a Delicious Dining Experience</h1>
                    <p className="mb-4 text-lg font-semibold ">Create an Account</p>
                </div>
                <form onSubmit={handleSubmit} className="relative z-10 px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
                    <h2 className="mb-4 text-2xl font-semibold text-center text-transparent bg-gradient-to-r from-sky-700 to-blue-900 bg-clip-text">Register</h2>
                    {errorMessage && (
                        <div className="mb-4 text-center text-red-500">
                            {errorMessage}
                        </div>
                    )}
                    {successMessage && (
                        <div className="mb-4 text-center text-blue-600">
                            {successMessage}
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
                        <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                checked={agreeTerms}
                                onChange={(e) => setAgreeTerms(e.target.checked)}
                                className="form-checkbox"
                            />
                            <span className="ml-2 text-sm text-gray-700">I agree to the terms & conditions</span>
                        </label>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-bold text-center text-white rounded bg-sky-700 hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                        >
                            Register
                        </button>
                    </div>
                    <p className="mt-4 text-sm text-center text-black">
                        Already have an account?{' '}
                        <NavLink to="/login" className="text-blue-500">
                            Login
                        </NavLink>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;

