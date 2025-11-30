import axios from "axios";

const API_BASE_URL = "https://resort-project-j023.onrender.com/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // Timeout after 5 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

const api = {
  getAllHotels: () => apiClient.get("/all-hotels/"), // Fetch all hotels
  getHotelById: (id) => apiClient.get(`/all-hotels/${id}/`), // Fetch hotel by ID

  // 5-Star Hotels
  getFiveStarHotels: () => apiClient.get("/hotels/5-star/"), 
  getFiveStarHotelById: (id) => apiClient.get(`/hotels/5-star/${id}/`),

  // 4-Star Hotels
  getFourStarHotels: () => apiClient.get("/hotels/4-star/"), 
  getFourStarHotelById: (id) => apiClient.get(`/hotels/4-star/${id}/`),

  // 3-Star Hotels
  getThreeStarHotels: () => apiClient.get("/hotels/3-star/"), 
  getThreeStarHotelById: (id) => apiClient.get(`/hotels/3-star/${id}/`),

  // Rooms Endpoints
  getRoomsByHotel: (hotelId, stars) => 
    apiClient.get(`/hotels/${stars}-star/${hotelId}/rooms/`),

  getRoomById: (hotelId, roomId, stars) => 
    apiClient.get(`/hotels/${stars}-star/${hotelId}/rooms/${roomId}/`),
  
  
  searchHotels: (query) => 
  apiClient.get(`/search/?q=${query}`),


  // Create, Update, Delete for Hotels (if needed)
  createHotel: (data) => apiClient.post("/all-hotels/", data),
  updateHotel: (id, data) => apiClient.put(`/all-hotels/${id}/`, data),
  deleteHotel: (id) => apiClient.delete(`/all-hotels/${id}/`),



//In this I am getting all hotels by the ID
  getHotelDetailsByStarAndId: async (star, id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/hotels/${star}/${id}/`);
      return response;
    } catch (err) {
      throw new Error(err.message || "Failed to fetch hotel details.");
    }
  },
};

export default api;
