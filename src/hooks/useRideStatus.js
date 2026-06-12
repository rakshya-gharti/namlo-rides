import { saveRideHistory } from "../Services/mockApi";
import { useState, useCallback } from "react";
import { useFirebaseRide } from "./useFirebaseRide";

export function useRideStatus() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [rideStatus, setRideStatus] = useState("idle");
  const [rideData, setRideData] = useState(null);

  const handleRideUpdate = useCallback((data) => {
    if (!data) {
      setRideStatus("idle");
      setRideData(null);
      return;
    }
    setRideData(data);
    setRideStatus(data.status);
  }, []);

  const { updateRide, clearRide } = useFirebaseRide(handleRideUpdate);

  const requestRide = () => {
    if (!pickup || !destination) {
      alert("Please enter both pickup and destination");
      return;
    }
    const ride = {
      id: `ride_${Date.now()}`,
      status: "searching",
      pickup,
      destination,
      requestedAt: Date.now(),
    };
    updateRide(ride);
    setRideStatus("searching");
  };

 const cancelRide = () => {
  if (rideData) {
    saveRideHistory({ ...rideData, status: "cancelled" }); //save to MockAPI
  }
  clearRide();
  setRideStatus("idle");
  setPickup("");
  setDestination("");
};

  return {
    pickup, setPickup,
    destination, setDestination,
    rideStatus, rideData,
    requestRide, cancelRide,
  };
}