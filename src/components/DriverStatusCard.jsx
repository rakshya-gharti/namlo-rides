const statusConfig = {
  incoming:    { border: "border-yellow-500", emoji: "🔔", color: "text-yellow-400", label: "New Ride Request!" },
  accepted:    { border: "border-blue-500",   emoji: "✅", color: "text-blue-400",   label: "Ride Accepted — Head to Pickup" },
  in_progress: { border: "border-green-500",  emoji: "🚗", color: "text-green-400",  label: "Ride In Progress" },
  completed:   { border: "border-purple-500", emoji: "🎉", color: "text-purple-400", label: "Ride Completed!" },
};

export default function DriverStatusCard({ status, rideData, onAccept, onReject, onStart, onComplete, onReset }) {
  const config = statusConfig[status];
  if (!config || !rideData) return null;

  return (
    <div className={`bg-gray-900 border ${config.border} rounded-2xl p-6 w-full max-w-md shadow-xl`}>
      <p className="text-4xl text-center mb-3">{config.emoji}</p>
      <h2 className={`font-bold text-lg text-center mb-4 ${config.color}`}>
        {config.label}
      </h2>

      <div className="space-y-2 mb-6">
        <InfoRow label="Pickup" value={rideData.pickup} />
        <InfoRow label="Destination" value={rideData.destination} />
      </div>

      {status === "incoming" && (
        <div className="flex gap-3">
          <button onClick={onReject} className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl">
            Reject
          </button>
          <button onClick={onAccept} className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl">
            Accept
          </button>
        </div>
      )}

      {status === "accepted" && (
        <button onClick={onStart} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl">
          Start Ride
        </button>
      )}

      {status === "in_progress" && (
        <button onClick={onComplete} className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl">
          Complete Ride
        </button>
      )}

      {status === "completed" && (
        <button onClick={onReset} className="w-full py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-xl">
          Back to Dashboard
        </button>
      )}
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-500">{label}</span>
      <span className="text-white font-medium">{value}</span>
    </div>
  );
}