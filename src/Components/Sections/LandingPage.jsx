import React, { useState } from 'react';
import TrueFocus from '../UsableAnimations/FocusText';

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden flex justify-center items-center">

      {/* Animated waterfall background */}
      <div className="absolute inset-0 bg-landing-bg bg-cover bg-center animate-waterfallFlow"></div>

      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center p-6 w-full">
        
        <h1 className="text-8xl max-md:text-4xl font-bold text-center text-white">
          <TrueFocus
            sentence="Welcome to BharatResorts.com"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={0.5}
          />
        </h1>

        {/* Book Resort Button */}
        <button
          onClick={() => setShowForm(true)}
          className="group mt-10 relative text-3xl inline-block font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
        >
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950 p-10">
            <div className="relative z-10 flex items-center space-x-2">
              <span className="transition-all duration-500 group-hover:translate-x-1 p-5">
                Book Resort Now
              </span>
              <svg
                className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                ></path>
              </svg>
            </div>
          </span>
        </button>

        {/* Booking Form */}
        {showForm && (
          <div className="mt-12 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-10 w-full max-w-lg animate-fadeIn text-white relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-center">Resort Booking Form</h2>

            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Full Name"
                className="p-3 rounded-xl bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 rounded-xl bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="date"
                className="p-3 rounded-xl bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <select className="p-3 rounded-xl bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-teal-300">
                <option className="text-black">Select Room Type</option>
                <option className="text-black">Deluxe Room</option>
                <option className="text-black">Luxury Villa</option>
                <option className="text-black">Premium Cottage</option>
              </select>
              <textarea
                placeholder="Additional Requests (Optional)"
                className="p-3 rounded-xl bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
                rows={3}
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-xl font-semibold shadow-xl hover:scale-105 transition-transform"
              >
                Submit Booking
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
