import { useDriverRide } from "../hooks/useDriverRide";
import DriverStatusCard from "../components/DriverStatusCard";
import MapView from "../components/MapView";

export default function DriverDashboard() {
  const {
    isOnline, setIsOnline,
    rideStatus, rideData,
    acceptRide, rejectRide,
    startRide, completeRide, resetRide,
  } = useDriverRide();

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col overflow-x-hidden">

      {/* Nav */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800">
        <h1 className="text-xl font-bold text-green-400">🚗 Namlo Rides</h1>
        <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">Driver</span>
      </div>

      <div className="flex flex-col justify-center items-center px-4 py-6 flex-grow gap-4 w-full">

        {/* Online Toggle */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 w-full max-w-md  mx-auto flex items-center justify-between">
          <div>
            <p className="text-white font-semibold">
              {isOnline ? "🟢 You are Online" : "🔴 You are Offline"}
            </p>
            <p className="text-gray-400 text-sm mt-1">
              {isOnline ? "Waiting for ride requests..." : "Go online to receive rides"}
            </p>
          </div>
          <button
            onClick={() => setIsOnline(!isOnline)}
            className={`px-5 py-2 rounded-xl font-semibold transition-colors ${
              isOnline
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            {isOnline ? "Go Offline" : "Go Online"}
          </button>
        </div>

        {/* Map below toggle */}
        <div className="w-full max-w-md mx-auto">
          <MapView rideData={rideData} />
        </div>

        {/* Offline State */}
        {!isOnline && (
          <div className="text-center text-gray-600 mt-4 w-full max-w-md mx-auto">
            <p className="text-lg">Go online to start receiving rides</p>
          </div>
        )}

        {/* Online Idle */}
        {isOnline && rideStatus === "idle" && (
          <div className="text-center text-gray-500 mt-4">
            <p className="text-3xl">Waiting for a rider...</p>
          </div>
        )}

        {/* Ride Status Card */}
        {isOnline && rideStatus !== "idle" && (
          <DriverStatusCard
            status={rideStatus}
            rideData={rideData}
            onAccept={acceptRide}
            onReject={rejectRide}
            onStart={startRide}
            onComplete={completeRide}
            onReset={resetRide}
          />
        )}

      </div>
    </div>
  );
}