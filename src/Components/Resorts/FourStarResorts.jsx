import React, { useEffect, useState } from "react";
import api from "../../Api/Api";
import HotelCard from "../../Utils/HotelCard";
import { Link } from "react-router-dom";


// Import images
import TigerCamp from "../../assets/static/Tiger_Camp.jpg";
import RoarResort from "../../assets/static/Roar_Resort.jpg";
import BanyanRetreat from "../../assets/static/Banyan_Retreat.jpg";
import LaTigre from "../../assets/static/La_Tigre.jpg";
import LaPerle from "../../assets/static/La_Perle.jpg";
import Clarissa from "../../assets/static/Clarissa.jpg";

const FourStarResorts = () => {
  const [fourStarHotels, setFourStarHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ⭐ IMAGE MAPPING BASED ON HOTEL ID
  const hotelImages = {
    16: TigerCamp,
    17: RoarResort,
    18: BanyanRetreat,
    20: LaTigre,
    21: LaPerle,
    22: Clarissa
  };

  useEffect(() => {
    const fetchFourStarHotels = async () => {
      try {
        setLoading(true);
        const response = await api.getFourStarHotels();
        setFourStarHotels(response.data || []);
      } catch (err) {
        setError(err.message || "An error occurred while fetching hotels.");
      } finally {
        setLoading(false);
      }
    };

    fetchFourStarHotels();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
          <h2 className="text-white mt-4">Loading...</h2>
          <p className="text-gray-300">Your adventure is about to begin</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[100px] p-10 bg-white flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center">4-Star Resorts</h1>
      <p className="text-lg text-center mt-4">Enjoy comfort and elegance in our 4-star resorts.</p>

      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 shadow-xl border p-6 rounded-3xl">
        {fourStarHotels.map((hotel) => {
          // ⭐ Pick image by hotel ID, fallback to TigerCamp
          const img = hotelImages[hotel.id] || TigerCamp;

          return (
            <Link
              key={hotel.id}
              to={`/hotels/4-star/${hotel.id}`}
              className="block"
            >
              <HotelCard
                name={hotel.name}
                location={hotel.location}
                price={hotel.price}
                img={img}
                rating={hotel.rating}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FourStarResorts;
