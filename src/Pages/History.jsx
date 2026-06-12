import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchRideHistory } from "../Services/mockApi";

export default function History() {
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRideHistory().then((data) => {
      setRides(data.reverse()); // newest first
      setLoading(false);
    });
  }, []);

  const statusColors = {
    completed:  "text-green-400 bg-green-900",
    cancelled:  "text-red-400 bg-red-900",
    rejected:   "text-red-400 bg-red-900",
  };

  const statusEmoji = {
    completed: "🎉",
    cancelled: "❌",
    rejected:  "🚫",
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">

      {/* Nav */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800">
        <h1 className="text-xl font-bold text-white">📋 Ride History</h1>
        <button
          onClick={() => navigate("/select-role")}
          className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700"
        >
          ← Back
        </button>
      </div>

      <div className="flex flex-col items-center px-4 py-6 gap-4 w-full max-w-md mx-auto">

        {loading && (
          <p className="text-gray-400 mt-10">Loading history...</p>
        )}

        {!loading && rides.length === 0 && (
          <div className="text-center text-gray-600 mt-10">
            <p className="text-5xl mb-4">📭</p>
            <p className="text-lg">No ride history yet</p>
            <p className="text-sm mt-1">Completed rides will appear here</p>
          </div>
        )}

        {!loading && rides.map((ride) => (
          <div
            key={ride.id}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-5 w-full"
          >
            {/* Status badge */}
            <div className="flex items-center justify-between mb-3">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColors[ride.status] || "text-gray-400 bg-gray-800"}`}>
                {statusEmoji[ride.status]} {ride.status?.toUpperCase()}
              </span>
              <span className="text-gray-500 text-xs">
                {ride.completedAt
                  ? new Date(ride.completedAt).toLocaleString()
                  : "—"}
              </span>
            </div>

            {/* Ride details */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">From</span>
                <span className="text-white font-medium">{ride.pickup}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">To</span>
                <span className="text-white font-medium">{ride.destination}</span>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}