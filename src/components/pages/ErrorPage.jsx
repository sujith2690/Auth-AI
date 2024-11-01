// src/components/pages/ErrorPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-inherit text-[#E3E3E3]">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">Oops! Page Not Found</h2>
                <p className="mb-6">
                    The page you are looking for does not exist.
                    Please check the URL or return to the homepage.
                </p>
                <Link to="/" className="px-4 py-2 bg-[#22AAD2] text-white rounded-lg shadow-md hover:bg-[#1F8DAA] transition duration-300">
                    Go Back Home
                </Link>
            </div>

        </div>
    );
};

export default ErrorPage;
