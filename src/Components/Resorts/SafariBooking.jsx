import React from "react";

const SafariBooking = () => {
  return (
    <div className="pt-[100px] p-10 bg-white flex justify-center">
      <div className="bg-gray-600 p-6 rounded-lg shadow-lg border-2 border-yellow-500 w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-4">Safari Booking Date</h1>

        {/* Booking Date */}
        <div className="relative mb-4">
          <input
            type="date"
            className="w-full p-3 pl-10 border border-gray-400 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <span className="absolute left-3 top-3 text-gray-600">📅</span>
        </div>

        {/* Safari Type & Timing */}
        <div className="flex gap-4 mb-4">
          <div className="relative w-1/2">
            <select className="w-full p-3 pl-10 border border-gray-400 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none">
              <option>—Please choose an option—</option>
            </select>
            <span className="absolute left-3 top-3 text-gray-600">🦁</span>
          </div>

          <div className="relative w-1/2">
            <select className="w-full p-3 pl-10 border border-gray-400 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none">
              <option>—Please choose an option—</option>
            </select>
            <span className="absolute left-3 top-3 text-gray-600">⏰</span>
          </div>
        </div>

        {/* Name */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 pl-10 border border-gray-400 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <span className="absolute left-3 top-3 text-gray-600">👤</span>
        </div>

        {/* Mobile Number */}
        <div className="relative mb-4">
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full p-3 pl-10 border border-gray-400 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <span className="absolute left-3 top-3 text-gray-600">📞</span>
        </div>

        {/* Email */}
        <div className="relative mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 pl-10 border border-gray-400 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <span className="absolute left-3 top-3 text-gray-600">📧</span>
        </div>

        {/* Submit Button */}
        <button className="w-full p-3 bg-blue-700 text-white font-bold rounded-md hover:bg-blue-800 transition">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SafariBooking;
