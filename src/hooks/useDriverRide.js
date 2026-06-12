import { useState, useCallback } from "react";
import { useFirebaseRide } from "./useFirebaseRide";
import { saveRideHistory } from "../services/mockApi";

export function useDriverRide() {
  const [isOnline, setIsOnline] = useState(false);
  const [rideStatus, setRideStatus] = useState("idle");
  const [rideData, setRideData] = useState(null);

  const handleRideUpdate = useCallback((data) => {
    if (!data) {
      setRideStatus("idle");
      setRideData(null);
      return;
    }
    setRideData(data);
    if (data.status === "searching") {
      setRideStatus("incoming");
    } else {
      setRideStatus(data.status);
    }
  }, []);

  const { updateRide, clearRide } = useFirebaseRide(handleRideUpdate);

  const acceptRide = () => {
    updateRide({ ...rideData, status: "accepted", driverName: "Your Driver" });
    setRideStatus("accepted");
    console.log("Ride Accepted");
  };

  const rejectRide = () => {
    updateRide({ ...rideData, status: "rejected" });
    saveRideHistory({ ...rideData, status: "rejected" }); // ← save to MockAPI
    setRideStatus("idle");
    console.log("Ride Rejected");
  };

  const startRide = () => {
    updateRide({ ...rideData, status: "in_progress" });
    setRideStatus("in_progress");
    console.log("Ride Started");
  };

  const completeRide = () => {
    updateRide({ ...rideData, status: "completed" });
    saveRideHistory({ ...rideData, status: "completed" }); // ← save to MockAPI
    setRideStatus("completed");
    console.log("Ride Completed");
  };

  const resetRide = () => {
    clearRide();
    setRideStatus("idle");
    setRideData(null);
  };

  return {
    isOnline, setIsOnline,
    rideStatus, rideData,
    acceptRide, rejectRide,
    startRide, completeRide, resetRide,
  };
}