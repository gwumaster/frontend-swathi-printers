"use client";
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Here you would add code to handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contactus" className="w-full mx-auto mb-20 rounded-xl drop-shadow-lg py-12 px-24 bg-yellow-100 text-gray-700">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full mt-6">
        {/* Container for form fields */}
        <div className="lg:flex lg:justify-around lg:space-x-32">
          {/* Name and Email Fields */}
          <div className="w-full lg:w-1/2 space-y-7">
            <div>
              <label className="block text-gray-700 font-semibold" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border bg-yellow-50 border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border bg-yellow-50 border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <label className="block text-gray-700 font-semibold" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border bg-yellow-50 border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              rows="5"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-10">
          <button
            type="submit"
            className="px-16 py-2 rounded-full bg-gradient-to-b from-red-500 to-red-600 text-white focus:ring-2 focus:ring-red-400 hover:shadow-xl transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

  );
};

export default ContactUs;
