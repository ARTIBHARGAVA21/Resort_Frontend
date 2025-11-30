import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LandingPage from './LandingPage';

const Mainpage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal after 3 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LandingPage />

      {/* {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-96 transform transition-transform duration-500 ease-out
            -translate-y-96 opacity-0 animate-slide-down"
          >
            <h2 className="text-xl font-semibold">Welcome!</h2>
            <p className="mt-2 text-gray-600">This is your modal content.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )} */}
    </>
  );
};

// PropTypes for validation
Mainpage.propTypes = {
  title: PropTypes.string,
};

export default Mainpage;
