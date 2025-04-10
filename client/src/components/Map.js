// client/src/components/Map.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 28.6139, // Example: New Delhi
  lng: 77.2090,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        {/* Optional: Add markers or other components here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
