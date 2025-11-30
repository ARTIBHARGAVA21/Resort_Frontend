// src/pages/HotelPage.jsx

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import hotels from "../../data/hotelsData";


export default function HotelPage() {
  const { id } = useParams();
  const hotel = hotels[id];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(
    hotel?.roomTypes?.[0]?.id || ""
  );

  const [activeTab, setActiveTab] = useState("overview");
  const [showForm, setShowForm] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestName, setGuestName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  if (!hotel) return <h1 className="text-center mt-20">Hotel Not Found</h1>;

  const nextSlide = () =>
    setCurrentIndex((p) => (p === hotel.images.length - 1 ? 0 : p + 1));

  const prevSlide = () =>
    setCurrentIndex((p) => (p === 0 ? hotel.images.length - 1 : p - 1));

  const similarResorts = Object.entries(hotels).filter(([key]) => key !== id);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log({
      hotel: hotel.name,
      selectedRoom,
      checkIn,
      checkOut,
      guestName,
      mobile,
      email,
    });
    alert("Booking submitted (demo).");
  };

  return (
    <div className="pt-44 pb-10 px-4 max-w-6xl mx-auto">
      {/* TOP: Slider + Main Info */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* SLIDER */}
        <div className="lg:w-1/2 relative rounded-xl overflow-hidden shadow-xl bg-white">
          <img
            src={hotel.images[currentIndex]}
            className="w-full h-[480px] object-cover rounded-xl"
            alt={hotel.name}
          />

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 px-3 py-2 rounded-full shadow"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 px-3 py-2 rounded-full shadow"
          >
            ❯
          </button>
        </div>

        {/* DETAILS */}
        <div className="lg:w-1/2 space-y-5">
          <h1 className="text-3xl font-bold">{hotel.name}</h1>

          <p className="text-gray-700 flex items-center gap-2">
            📍 {hotel.location}
          </p>

          <p className="text-gray-700 leading-relaxed">{hotel.desc}</p>

          <div className="flex gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-4 flex-wrap">
            <span className="text-2xl font-semibold">From ₹ {hotel.price}</span>

            <button
              onClick={() => setShowForm(true)}
              className="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg shadow"
            >
              Book Now
            </button>

            <button
              onClick={() => setShowMap(true)}
              className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow"
            >
              Google Map
            </button>
          </div>
        </div>
      </div>

      {/* PRICE TABLE + BOOK NOW FORM */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ROOM TYPE / PRICE / BOOK NOW */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
          <div className="grid grid-cols-3 bg-yellow-500 text-white font-semibold text-center py-3 text-sm md:text-base">
            <span>ROOM TYPE</span>
            <span>PRICE</span>
            <span>BOOK NOW</span>
          </div>

          {hotel.roomTypes?.map((room) => (
            <div
              key={room.id}
              className="grid grid-cols-3 items-center border-t text-center text-sm md:text-base"
            >
              <div className="py-4 font-medium">{room.name}</div>
              <div className="py-4 font-semibold">₹ {room.price}</div>
              <div className="py-4">
                <button
                  onClick={() => setSelectedRoom(room.id)}
                  className="px-3 py-1.5 bg-blue-600 text-white text-xs md:text-sm rounded-md hover:bg-blue-700"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}

          <div className="px-4 py-3 text-xs text-gray-600 bg-gray-50">
            Note: Prices may vary according to the season, period and rooms
            availability. Check respective websites for regular updates and
            latest offers.
          </div>
        </div>

        {/* BOOK NOW FORM (RIGHT SIDE) */}
        <div className="bg-sky-50 border border-sky-100 rounded-xl p-4 md:p-6 shadow-inner">
          <h2 className="text-xl font-semibold mb-4">Book Now</h2>

          <form onSubmit={handleBookingSubmit} className="space-y-3 text-sm">
            {/* Select Room */}
            <div className="space-y-1">
              <label className="block font-medium">Select Room</label>
              <select
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                className="w-full border rounded-md px-3 py-2 text-sm"
              >
                <option value="">— Please choose an option —</option>
                {hotel.roomTypes?.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block font-medium mb-1">Check In</label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Check Out</label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block font-medium mb-1">Your Name</label>
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full border rounded-md px-3 py-2 text-sm"
                placeholder="Enter your name"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block font-medium mb-1">Mobile Number</label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full border rounded-md px-3 py-2 text-sm"
                placeholder="Enter your mobile number"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">Your Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-md px-3 py-2 text-sm"
                placeholder="Enter your email"
              />
            </div>

            <button
              type="submit"
              className="mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* TABS + CONTENT */}
      <div className="mt-10 bg-white rounded-xl shadow-md">
        {/* Tabs */}
        <div className="flex flex-wrap border-b text-sm md:text-base">
          {[
            { id: "overview", label: "Overview" },
            { id: "facilities", label: "Facilities" },
            { id: "roomFacility", label: "Room Facility" },
            { id: "videos", label: "Videos" },
            { id: "gallery", label: "Photo Gallery" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 border-r ${
                activeTab === tab.id
                  ? "bg-sky-600 text-white font-medium"
                  : "hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="p-6 text-sm md:text-base leading-relaxed text-gray-700">
          {activeTab === "overview" && (
            <p>
              {hotel.desc} It’s the kind of place where you can immerse yourself
              in the beauty of the surroundings while enjoying the comforts of
              modern amenities.
            </p>
          )}

          {activeTab === "facilities" && (
            <ul className="list-disc list-inside space-y-1">
              {hotel.facilities?.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          )}

          {activeTab === "roomFacility" && (
            <ul className="list-disc list-inside space-y-1">
              {hotel.roomFacilities?.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          )}

          {activeTab === "videos" && (
            <div className="space-y-2">
              <p>No videos added yet. Coming soon!</p>
            </div>
          )}

          {activeTab === "gallery" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {hotel.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${hotel.name} ${i + 1}`}
                  className="w-full h-24 md:h-32 object-cover rounded-md"
                />
              ))}
            </div>
          )}
        </div>
      </div>

{/* SIMILAR RESORTS */}
<div className="mt-10 w-full">
  <h2 className="text-2xl font-semibold mb-4">Similar Resorts</h2>

  {/* vertical full-width cards like screenshot */}
  <div className="flex flex-col gap-3">
    {similarResorts.map(([key, h]) => (
      <div
        key={key}
        className="flex w-full border border-sky-500 bg-sky-50 overflow-hidden"
      >
        {/* image on left */}
        <div className="w-32 md:w-40 h-20 md:h-24 flex-shrink-0">
          <img
            src={h.images[0]}
            alt={h.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* text on right */}
        <div className="flex-1 px-4 py-2">
          {/* stars */}
          <div className="flex items-center gap-1 text-yellow-400 text-xs md:text-sm mb-1">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          {/* resort name */}
          <div className="text-sky-700 font-semibold text-sm md:text-base">
            {h.name}
          </div>

          {/* price */}
          <div className="text-sm md:text-base mt-1">
            <span className="font-semibold">Price: </span>
            <span className="font-bold">₹ {h.price}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>





      {/* POPUP BOOKING FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-96">
            <h2 className="text-xl font-bold mb-3">Booking Form</h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 mb-3 border rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-2 mb-3 border rounded"
            />
            <input type="date" className="w-full p-2 mb-3 border rounded" />

            <button className="w-full py-2 bg-sky-600 text-white rounded-lg mb-3">
              Submit
            </button>

            <button
              onClick={() => setShowForm(false)}
              className="w-full py-2 bg-gray-300 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* GOOGLE MAP POPUP */}
      {showMap && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-xl shadow-xl w-[90%] md:w-[60%]">
            <h2 className="text-xl font-bold mb-3">Map Location</h2>

            <iframe
              title="Hotel Map"
              src={`https://www.google.com/maps?q=${hotel.location}&output=embed`}
              className="w-full h-80 rounded-lg"
            />

            <button
              onClick={() => setShowMap(false)}
              className="w-full mt-3 py-2 bg-gray-300 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
