import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Chatbot from "./Chatbot";
const containerStyle = { width: "100%", height: "400px" };
const center = { lat: 28.7041, lng: 77.1025 };  // Example location

const App = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Food Delivery App</h1>
      <p>List of restaurants will be shown here.</p>
      <LoadScript googleMapsApiKey="AIzaSyC__B4aJ15Y3OBhYjvbYvYSbWKGiwAoJ54">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default App;




<Chatbot />
