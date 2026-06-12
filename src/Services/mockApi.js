const BASE_URL = "https://6a2ba38e3e2b60ab038e8c71.mockapi.io/rides";

// Saving a completed/cancelled/rejected ride
export async function saveRideHistory(rideData) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: rideData.status,
        pickup: rideData.pickup,
        destination: rideData.destination,
        requestedAt: rideData.requestedAt,
        completedAt: Date.now(),
      }),
    });
    const data = await response.json();
    console.log("Ride saved to history:", data);
    return data;
  } catch (err) {
    console.error("Failed to save ride history:", err);
  }
}

// Fetcing all ride history
export async function fetchRideHistory() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log("Ride history fetched:", data);
    return data;
  } catch (err) {
    console.error("Failed to fetch ride history:", err);
    return [];
  }
}