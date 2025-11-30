import React from "react";

export default function About() {
  return (
    <div className="bg-white text-gray-800">
      
      {/* HERO SECTION */}
      <section className="relative h-[90vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Resort Beach"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-sky-600/60 to-sky-200/20 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide drop-shadow-xl">
            Discover Bharat Resort
          </h1>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-6">
          A Luxury Retreat in the Heart of Nature
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Bharat Resort blends the beauty of nature with comfort, luxury, and 
          Indian hospitality — offering a peaceful escape designed for 
          relaxation, rejuvenation, and unforgettable moments.
        </p>
      </section>

      {/* TWO-COLUMN SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1519824145371-296894a0daa9"
          className="rounded-3xl shadow-2xl object-cover w-full h-96"
          alt=""
        />

        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            To offer a world-class resort experience surrounded by nature.  
            We provide a serene environment where guests can unwind, reconnect, 
            and enjoy premium hospitality.
          </p>
        </div>
      </section>

      {/* SKY BLUE HIGHLIGHT STRIP */}
      <section className="bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400 py-14 px-6">
        <h2 className="text-center text-4xl text-white font-bold mb-10">
          Why Choose Bharat Resort
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white/20 backdrop-blur-md p-8 rounded-xl text-center shadow-xl border border-white/40">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Luxury Experience
            </h3>
            <p className="text-white/90">
              Elegant rooms, premium facilities, and curated comfort.
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-md p-8 rounded-xl text-center shadow-xl border border-white/40">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Scenic Surroundings
            </h3>
            <p className="text-white/90">
              Wake up to breathtaking views, fresh air, and nature.
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-md p-8 rounded-xl text-center shadow-xl border border-white/40">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Exceptional Hospitality
            </h3>
            <p className="text-white/90">
              Warm service and attention to every detail.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl text-center font-bold mb-6">Our Story</h2>
        <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto leading-relaxed">
          Bharat Resort began with a vision to create the perfect retreat for 
          travelers seeking peace, comfort, and natural beauty.  
          Over the years, it has grown into a destination known for elegance, 
          luxury, and heart-warming hospitality.
        </p>
      </section>
    </div>
  );
}
