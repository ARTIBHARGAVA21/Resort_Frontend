import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import Rating from "./Rating";

const HotelCard = ({ name, location, price, img, rating }) => {
  return (
    <div className="group relative flex flex-col w-80 h-[500px] bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl">
      {/* Image Section */}
      <div className="h-2/3 relative bg-gray-200 overflow-hidden">
        <img
          src={img || "https://via.placeholder.com/350x200"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 flex flex-col items-center bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
          {/* <span>{rating} / 5</span> */}
          <Rating rating={rating} />
        </div>
      </div>

      <div className="flex flex-col p-6 space-y-4 flex-grow">
        <h3 className="text-lg font-bold text-gray-800 truncate">{name}</h3>
        <div className="flex items-center text-sm text-gray-500 space-x-2">
          <Icon icon="mdi:map-marker" className="text-lg text-red-500" />
          <span className="font-medium">{location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 space-x-2">
          <Icon icon="mdi:cash" className="text-lg text-green-500" />
          <span className="font-medium">Price: ${price}</span>
        </div>

        <div className="flex justify-center mt-auto">
          <button className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg font-semibold py-3 rounded-xl shadow-lg hover:from-blue-600 hover:to-indigo-600 hover:shadow-xl transition-all duration-300">
            <Icon icon="mdi:hotel" className="text-2xl mr-2" />
            <span>View Detail</span>
          </button>
        </div>
      </div>
    </div>
  );
};

HotelCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

export default HotelCard;
