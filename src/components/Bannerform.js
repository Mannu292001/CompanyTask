// src/BannerForm.js
import React, { useState } from 'react';

const Bannerform = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., send data to backend or perform validation
        console.log(formData);
        // Reset form fields after submission (optional)
        setFormData({
            name: '',
            email: '',
            contact: '',
            message: '',
        });
    };

    return (
        <div className="flex max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
            {/* left Side - Banner */}
            <div className="w-1/2 p-6">
                <div className="bg-blue-500 text-white h-full py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md">
                    <div className="max-w-md mx-auto mt-20 text-center flex items-center justify-center flex-col">
                        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
                        <p className="mt-4 text-xl text-center">We are glad to have you here. Explore our services and offerings.</p>
                        <div className="mt-6">
                            <a
                                href="/services"
                                className="inline-block bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>

             {/* right Side - Form */}
             <div className="w-1/2 p-6">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contact" className="block text-gray-700 font-bold mb-2">Contact Number</label>
                        <input
                            type="text"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="Enter your contact number"
                            className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message"
                            rows={4}
                            className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring"
                    >
                        Submit
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Bannerform;
