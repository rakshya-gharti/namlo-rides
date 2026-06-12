const statusConfig = {
  searching: { border: "border-yellow-500", emoji: "🔍", color: "text-yellow-400", label: "Looking for a driver..." },
  accepted:  { border: "border-blue-500",   emoji: "✅", color: "text-blue-400",   label: "Driver Found!" },
  in_progress: { border: "border-green-500", emoji: "🚗", color: "text-green-400", label: "Ride In Progress" },
  completed: { border: "border-purple-500", emoji: "🎉", color: "text-purple-400", label: "Ride Completed!" },
  cancelled: { border: "border-red-500",    emoji: "❌", color: "text-red-400",    label: "Ride Cancelled" },
  rejected:  { border: "border-red-500",    emoji: "❌", color: "text-red-400",    label: "Ride Rejected" },
};

export default function RideStatusCard({ status, rideData, pickup, destination, onCancel }) {
  const config = statusConfig[status] || statusConfig.searching;

  return (
    <div className={`bg-gray-900 border ${config.border} rounded-2xl p-6 w-full max-w-md text-center shadow-xl`}>
      <p className="text-4xl mb-3">{config.emoji}</p>
      <h2 className={`font-bold text-lg mb-2 ${config.color}`}>{config.label}</h2>

      <p className="text-gray-400 text-sm mb-1">From: <span className="text-white">{pickup}</span></p>
      <p className="text-gray-400 text-sm mb-4">To: <span className="text-white">{destination}</span></p>

      {rideData?.driverName && (
        <p className="text-gray-400 text-sm mb-4">Driver: <span className="text-white">{rideData.driverName}</span></p>
      )}

      {["searching", "accepted"].includes(status) && (
        <button
          onClick={onCancel}
          className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors"
        >
          Cancel Ride
        </button>
      )}

      {["completed", "cancelled", "rejected"].includes(status) && (
        <button
          onClick={onCancel}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors mt-2"
        >
          {status === "completed" ? "Book Another Ride" : "Try Again"}
        </button>
      )}
    </div>
  );
}