// src/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="text-sm ">
                        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="/" className="text-gray-400 hover:text-white">Home</a>
                        <a href="/about" className="text-gray-400 hover:text-white">About</a>
                        <a href="/services" className="text-gray-400 hover:text-white">Services</a>
                        <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
