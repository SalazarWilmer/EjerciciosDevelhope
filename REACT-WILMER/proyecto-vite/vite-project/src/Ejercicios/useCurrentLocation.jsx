import { useState, useEffect } from "react";

const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
          setLoading(false);
        },
        (error) => {
          setError(error);
          setLoading(false);
        }
      );
    } else {
      setError(new Error("Geolocation is not supported by your browser."));
      setLoading(false);
    }
  };
  const resetLocation = () => {
    setCurrentLocation(null);
    setError(null);
    setLoading(false);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { currentLocation, error, loading, getLocation, resetLocation };
};

export default useCurrentLocation;
