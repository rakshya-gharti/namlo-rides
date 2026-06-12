import { useNavigate } from "react-router-dom"

export default function RoleSelector() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center gap-6">
      <h1 className="text-white text-2xl font-bold">Continue as</h1>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/rider")}
          className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-2xl text-lg"
        >
          🙋 Rider
        </button>
        <button
          onClick={() => navigate("/driver")}
          className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-2xl text-lg"
        >
          🚗 Driver
        </button>
      </div>
      <button
        onClick={() => navigate("/history")}
        className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-xl text-sm"
      >
        📋 View Ride History
      </button>
    </div>
  )
}