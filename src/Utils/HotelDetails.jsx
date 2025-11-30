import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../Api/Api";

const HotelDetails = () => {
  const { star, id } = useParams();  // Get both the star category and hotel ID from the URL
  const [hotelDetails, setHotelDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        setLoading(true);
        // Modify the API request to include the star category in the URL
        const response = await api.getHotelDetailsByStarAndId(star, id);
        setHotelDetails(response.data);
      } catch (err) {
        setError(err.message || "An error occurred while fetching hotel details.");
      } finally {
        setLoading(false);
      }
    };

    fetchHotelDetails();
  }, [star, id]); // Re-run when star or id changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!hotelDetails) {
    return <div>Hotel not found.</div>;
  }

  return (
    <div className="pt-[100px] p-10 bg-white">
      <h1 className="text-3xl font-bold">{hotelDetails.name}</h1>
      <p className="text-lg mt-4">{hotelDetails.overview}</p>
      <p className="mt-4">Location: {hotelDetails.location}</p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Rooms</h2>
        <ul>
          {hotelDetails.rooms.map((room) => (
            <li key={room.id} className="mt-4">
              <h3 className="text-xl">{room.room_type}</h3>
              <p>{room.description}</p>
              <p>Price: ₹{room.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HotelDetails;
