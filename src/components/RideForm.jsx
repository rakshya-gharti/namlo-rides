export default function RideForm({ pickup, destination, setPickup, setDestination, onRequest }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 w-full max-w-md shadow-xl">
      <h2 className="text-lg font-semibold text-white mb-4">Request a Ride</h2>

      <div className="mb-4">
        <label className="text-sm text-gray-400 mb-1 block">📍 Pickup Location</label>
        <input
          type="text"
          placeholder="Enter pickup location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 outline-none border border-gray-700 focus:border-purple-500"
        />
      </div>

      <div className="mb-6">
        <label className="text-sm text-gray-400 mb-1 block">🏁 Destination</label>
        <input
          type="text"
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 outline-none border border-gray-700 focus:border-purple-500"
        />
      </div>

      <button
        onClick={onRequest}
        className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
      >
        Request Ride
      </button>
    </div>
  );
}