import React from "react";
import useCurrentLocation from "./useCurrentLocation";
import '../styles/index.scss';

function CurrentLocation() {
  const { currentLocation, error, loading, getLocation, resetLocation } = useCurrentLocation();

  return (
    <div>
      <h1>UBICACIÓN</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {currentLocation && (
        <p>
          Latitude: {currentLocation.latitude}, Longitude: {currentLocation.longitude}
        </p>
      )}
     <div className="button-container">
        <button onClick={getLocation}>Get Current Location</button>
        <button onClick={resetLocation}>Reset Location</button>
      </div>
    </div>
  );
}

export default CurrentLocation;
