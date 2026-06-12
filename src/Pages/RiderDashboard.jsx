import { useRideStatus } from "../hooks/useRideStatus";
import RideForm from "../components/RideForm";
import RideStatusCard from "../components/RideStatusCard";
import MapView from "../components/MapView";

export default function RiderDashboard() {
  const {
    pickup, setPickup,
    destination, setDestination,
    rideStatus, rideData,
    requestRide, cancelRide,
  } = useRideStatus();

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">

      {/* Nav */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800">
        <h1 className="text-xl font-bold text-purple-400">🚗 Namlo Rides</h1>
        <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">Rider</span>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow px-4 py-8 gap-6">
        
        {/* Map always visible */}
        <div className="w-full max-w-md">
          <MapView rideData={rideData} /> 
        </div>


        {rideStatus === "idle" ? (
          <RideForm
            pickup={pickup}
            destination={destination}
            setPickup={setPickup}
            setDestination={setDestination}
            onRequest={requestRide}
          />
        ) : (
          <RideStatusCard
            status={rideStatus}
            rideData={rideData}
            pickup={pickup}
            destination={destination}
            onCancel={cancelRide}
          />
        )}
      </div>

    </div>
  );
}