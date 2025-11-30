import React, { useEffect, useState } from "react";
import api from "../../Api/Api";
import HotelCard from "../../Utils/HotelCard";

import Xomotel from "../../assets/static/Xomotel.jpg";
import BlueRiver from "../../assets/static/Corbett_Aroma.jpg";
import Kyari from "../../assets/static/kabeela.jpg";
import Palms from "../../assets/static/Palms.jpg";
import Vanasthali from "../../assets/static/Vanasthali.jpg";
import Tiger_Groove from "../../assets/static/Tiger_Groove.jpg";
import Maulik from "../../assets/static/Maulik.jpg";
import MangoBloom from "../../assets/static/Mango.jpg";
import CorbettFun from "../../assets/static/Corbett.jpg";
import Baakhli from "../../assets/static/Baakhli.jpg";

import { Link } from "react-router-dom";

const ThreeStarResorts = () => {
  const [threeStarHotels, setThreeStarHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ⭐ IMAGE MAPPING BASED ON HOTEL ID
  const hotelImages = {
    2: Xomotel,
    4:BlueRiver,
    7:Kyari,
    8: Palms,
    9: Vanasthali,
    10: Tiger_Groove,
    11: Maulik,
    12: MangoBloom,
    13: CorbettFun,
    14: MangoBloom,     // repeated intentionally
    15: Baakhli
  };

  useEffect(() => {
    const fetchThreeStarHotels = async () => {
      try {
        setLoading(true);
        const response = await api.getThreeStarHotels();
        setThreeStarHotels(response.data || []);
      } catch (err) {
        setError(err.message || "An error occurred while fetching hotels.");
      } finally {
        setLoading(false);
      }
    };

    fetchThreeStarHotels();
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
      <h1 className="text-3xl font-bold text-center">3-Star Resorts</h1>
      <p className="text-lg text-center mt-4">
        Affordable luxury at our 3-star resorts.
      </p>

      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 shadow-xl border p-6 rounded-3xl">
        {threeStarHotels.map((hotel) => {
          // ⭐ Pick image by hotel ID
          const img = hotelImages[hotel.id] || Xomotel; // fallback image

          return (
            <Link key={hotel.id} to={`/hotels/3-star/${hotel.id}`} className="block">
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

export default ThreeStarResorts;
