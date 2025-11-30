import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
// import LandingPage from './Components/Sections/LandingPage';
import FiveStarResorts from './Components/Resorts/FiveStarResorts.jsx';
import ThreeStarResorts from './Components/Resorts/ThreeStarResorts.jsx';
import FourStarResorts from './Components/Resorts/FourStarResorts.jsx';
import SafariBooking from './Components/Resorts/SafariBooking.jsx';
import Error from './Components/Sections/Error.jsx';
import HotelDetails from './Utils/HotelDetails.jsx';
import Mainpage from './Components/Sections/Mainpage.jsx';
import Services  from './Components/Resorts/service.jsx';
import Contact from './Components/Resorts/contact.jsx';
import About from './Components/Resorts/about.jsx';
import Booking from './Components/Resorts/Booking.jsx';
import HotelPage from './Components/Resorts/HotelPage.jsx';


function App() {
  return (
    <Router>
      <Routes>

        here are the mentioned Routes for my app
        <Route path="/" element={<Layout><Mainpage /></Layout>} />
        <Route path="/five-star-resorts" element={<Layout><FiveStarResorts /></Layout>} />
        <Route path="/four-star-resorts" element={<Layout><FourStarResorts /></Layout>} />
        <Route path="/three-star-resorts" element={<Layout><ThreeStarResorts /></Layout>} />
        <Route path="/safari-booking" element={<Layout><SafariBooking /></Layout>} />
        <Route path="/hotels/:star/:id" element={<Layout><HotelDetails /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/booking" element={<Layout><Booking /></Layout>} />
        <Route path="/hotels/3-star/:id" element={<Layout><HotelPage /></Layout>} />
        <Route path="/hotels/4-star/:id" element={<Layout><HotelPage /></Layout>} />
        <Route path="/hotels/5-star/:id" element={<Layout><HotelPage /></Layout>} />
        {/* here is the route I had made for the Error */}
        <Route path="*" element={<Layout><Error /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
