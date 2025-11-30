import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-50 py-12 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          We’re here to help you plan your perfect getaway.
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        {/* Left: Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            Send us a Message
          </h3>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring focus:ring-blue-200"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg mt-3 w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Resort Contact Details
          </h3>

          <p className="text-gray-600 mb-4">
            Feel free to reach us directly for booking, pricing, or other inquiries.
          </p>

          <div className="space-y-4">
            <p className="text-gray-800">
              📍 <strong>Address:</strong> Bharat Resort, Near Waterfall Road, Delhi NCR
            </p>
            <p className="text-gray-800">
              📞 <strong>Phone:</strong> +91 98765 43210
            </p>
            <p className="text-gray-800">
              ✉ <strong>Email:</strong> bharatresort@gmail.com
            </p>
            <p className="text-gray-800">
              🕒 <strong>Timings:</strong> 9 AM – 7 PM (Mon – Sun)
            </p>
          </div>

          {/* Google Map */}
          <div className="mt-6">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15078.79235904924!2d72.83246535!3d19.0825224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6301f1dd3f7%3A0x7165e3e1a3f5c9d!2sResort!5e0!3m2!1sen!2sin!4v1706876762661"
              className="w-full h-64 rounded-lg border"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
