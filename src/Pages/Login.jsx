import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {


const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "intern@namlotech.com" &&
      password === "namlo2026"
    ) {
      navigate('/select-role')
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-2xl space-y-4 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-white text-center">Namlo Rides</h1>
           <p className="text-gray-400 text-center text-sm">Sign in to continue</p>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
           className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
           className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none"
        />

        <button type="submit" className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold ">
          Login
        </button>
      </form>
    </div>
  );
}