import React, { useState } from "react";
import api from "../../Api/Api"; // <- uses bookResort

const SafariBooking = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile_number: "",
    date: "",
    safari_type: "",
    safari_time: "",
    form_type: "safari_booking", // used by backend
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting safari booking:", formData);

    try {
      // 🔴 call your API helper, which posts to /book-resort/
      const response = await api.bookResort(formData);

      alert("Booking submitted successfully!");
      console.log("Booking response:", response.data);

      // reset form
      setFormData({
        full_name: "",
        email: "",
        mobile_number: "",
        date: "",
        safari_type: "",
        safari_time: "",
        form_type: "safari_booking",
      });
    } catch (error) {
      console.error("Booking error:", error.response?.data || error);
      alert("Something went wrong while submitting your booking.");
    }
  };

  return (
    <div className="pt-[100px] p-10 bg-white flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-600 p-6 rounded-lg shadow-lg border-2 border-yellow-500 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-white mb-4">
          Safari Booking Date
        </h1>

        {/* Booking Date */}
        <div className="relative mb-4">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 pl-10 border border-gray-400 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <span className="absolute left-3 top-3 text-gray-600">📅</span>
        </div>

        {/* Safari Type & Timing */}
        <div className="flex gap-4 mb-4">
          {/* Safari Type */}
          <div className="relative w-1/2">
            <select
              name="safari_type"
              value={formData.safari_type}
              onChange={handleChange}
              className="w-full p-3 pl-10 border border-gray-400 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            >
              <option value="">—Please choose an option—</option>
              <option value="Jeep Safari">Jeep Safari</option>
              <option value="Canter Safari">Canter Safari</option>
            </select>
            <span className="absolute left-3 top-3 text-gray-600">🦁</span>
          </div>

          {/* Safari Time */}
          <div className="relative w-1/2">
            <select
              name="safari_time"
              value={formData.safari_time}
              onChange={handleChange}
              className="w-full p-3 pl-10 border border-gray-400 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            >
              <option value="">—Please choose an option—</option>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
            <span className="absolute left-3 top-3 text-gray-600">⏰</span>
          </div>
        </div>

        {/* Full Name */}
        <div className="relative mb-4">
          <input
            type="text"
            name="full_name"
            placeholder="Your Name"
            value={formData.full_name}
            onChange={handleChange}
            className="w-full p-3 pl-10 border border-gray-400 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <span className="absolute left-3 top-3 text-gray-600">👤</span>
        </div>

        {/* Mobile Number */}
        <div className="relative mb-4">
          <input
            type="tel"
            name="mobile_number"
            placeholder="Mobile Number"
            value={formData.mobile_number}
            onChange={handleChange}
            className="w-full p-3 pl-10 border border-gray-400 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <span className="absolute left-3 top-3 text-gray-600">📞</span>
        </div>

        {/* Email */}
        <div className="relative mb-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 pl-10 border border-gray-400 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <span className="absolute left-3 top-3 text-gray-600">📧</span>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full p-3 bg-blue-700 text-white font-bold rounded-md hover:bg-blue-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SafariBooking;
