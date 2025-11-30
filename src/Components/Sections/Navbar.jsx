import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from "@iconify/react";
import { Link, useNavigate } from 'react-router-dom';
import api from "../../Api/Api";

export const Navbar = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  // 🚀 SEARCH LOGIC WITH API
  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      let query = e.target.value.toLowerCase().trim();
      e.target.value = "";

      if (!query) return;

      // ⭐ If user searches "5 star" OR "5"
      if (query.includes("5")) {
        navigate("/five-star-resorts");
        return;
      }

      // ⭐ If user searches "4 star" OR "4"
      if (query.includes("4")) {
        navigate("/four-star-resorts");
        return;
      }

      // ⭐ If user searches "3 star" OR "3"
      if (query.includes("3")) {
        navigate("/three-star-resorts");
        return;
      }

      // ⭐ Safari
      if (query.includes("safari")) {
        navigate("/Safari-booking");
        return;
      }

      // ⭐ Booking
      if (query.includes("booking")) {
        navigate("/booking");
        return;
      }

      // ⭐ Searching by hotel ID (example: hotel 12 or id 12)
      const idMatch = query.match(/(\d+)/);
      if (query.includes("hotel") && idMatch) {
        const id = idMatch[1];

        try {
          // Try searching in 5-star
          let res = await api.getHotelDetailsByStarAndId("5-star", id);
          if (res?.data) {
            navigate(`/hotels/5-star/${id}`);
            return;
          }
        } catch {}

        try {
          let res = await api.getHotelDetailsByStarAndId("4-star", id);
          if (res?.data) {
            navigate(`/hotels/4-star/${id}`);
            return;
          }
        } catch {}

        try {
          let res = await api.getHotelDetailsByStarAndId("3-star", id);
          if (res?.data) {
            navigate(`/hotels/3-star/${id}`);
            return;
          }
        } catch {}

        alert("Hotel not found!");
        return;
      }

      alert("No matching result found!");
    }
  };

  return (
    <nav className="fixed top-[2%] left-0 w-full z-50">
      <div className="flex items-center bg-yellow-400 justify-between w-[80%] max-xl:w-[100%] mx-auto h-auto py-5 px-6 rounded-3xl shadow-lg relative">

        {/* Logo */}
        <p className="flex items-center font-bold text-2xl gap-3 hover:scale-105 transition-all duration-300 hover:bg-black hover:text-white hover:px-3 hover:py-2 rounded-xl">
          <Icon icon="fluent-mdl2:ski-resorts" width="26" height="26" />
          <Link to="/">TheBharatResorts</Link>
        </p>

        {/* Search Icon */}
        <div className="cursor-pointer mr-4 xl:mr-10" onClick={() => setShowSearch(!showSearch)}>
          <Icon icon="mdi:magnify" width="28" height="28" className="hover:scale-110 transition-all" />
        </div>

        {/* Hamburger Menu */}
        <div className="block xl:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
            <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} />
          </button>
        </div>

        {/* Navbar Links */}
        <ul
          className={`flex-col xl:flex-row ${
            isOpen ? "flex" : "hidden xl:flex"
          } absolute xl:static top-[120%] left-0 xl:left-auto bg-white xl:bg-transparent 
          w-full xl:w-auto rounded-lg xl:rounded-none shadow-lg xl:shadow-none 
          xl:items-center xl:justify-center xl:gap-12 text-xl font-medium z-40 
          transition-all duration-300 ease-in-out`}
        >
          <li className="cursor-pointer hover:scale-110 transition-all duration-300 flex gap-2 justify-center p-3 xl:p-0 hover:bg-black hover:text-white  hover:px-3 hover:py-2 rounded-xl">
            <Icon icon="ri:hotel-fill" width="24" height="24" />
            <Link to="/five-star-resorts">5 Star Resorts</Link>
          </li>

          <li className="cursor-pointer hover:scale-110 transition-all duration-300 flex gap-2 justify-center p-3 xl:p-0 hover:bg-black hover:text-white hover:px-3 hover:py-2 rounded-xl">
            <Icon icon="ri:hotel-fill" width="24" height="24" />
            <Link to="/four-star-resorts">4 Star Resorts</Link>
          </li>

          <li className="cursor-pointer hover:scale-110 transition-all duration-300 flex gap-2 justify-center p-3 xl:p-0 hover:bg-black hover:text-white hover:px-3 hover:py-2 rounded-xl">
            <Icon icon="ri:hotel-fill" width="24" height="24" />
            <Link to="/three-star-resorts">3 Star Resorts</Link>
          </li>

          <li className="cursor-pointer hover:scale-110 transition-all duration-300 flex gap-2 justify-center p-3 xl:p-0 hover:bg-black hover:text-white hover:px-3 hover:py-2 rounded-xl">
            <Icon icon="mdi:jeepney" width="24" height="24" />
            <Link to="/Safari-booking">Safari Booking</Link>
          </li>
        </ul>
      </div>

      {/* SEARCH BAR */}
      {showSearch && (
        <div className="w-[80%] max-xl:w-[100%] mx-auto mt-3 bg-white shadow-lg rounded-2xl p-3">
          <input
            type="text"
            placeholder="Search 5 star, 4 star, 3 star, safari, booking, hotel 12..."
            className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl outline-none"
            onKeyDown={handleSearch}
            autoFocus
          />
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
};
