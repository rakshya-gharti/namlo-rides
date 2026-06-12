import { useEffect, useCallback } from "react";
import { ref, set, onValue, off } from "firebase/database";
import { db } from "../Services/firebase";

const RIDE_REF = "currentRide";

export function useFirebaseRide(onUpdate) {
  useEffect(() => {
    const rideRef = ref(db, RIDE_REF);
    onValue(rideRef, (snapshot) => {
      onUpdate(snapshot.val());
    });
    return () => off(rideRef);
  }, [onUpdate]);

  const updateRide = useCallback((ride) => {
    const rideRef = ref(db, RIDE_REF);
    set(rideRef, ride)
      .then(() => console.log("Firebase updated:", ride))
      .catch((err) => console.error(err));
  }, []);

  const clearRide = useCallback(() => {
    const rideRef = ref(db, RIDE_REF);
    set(rideRef, null);
  }, []);

  return { updateRide, clearRide }; 
}