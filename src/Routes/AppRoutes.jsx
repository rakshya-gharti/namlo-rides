import { Route, Routes } from "react-router-dom";
import DriverDashboard from "../Pages/DriverDashboard";
import History from "../Pages/History";
import Login from "../Pages/Login";
import RoleSelector from "../Pages/RoleSelector";
import RiderDashboard from "../Pages/RiderDashboard";


export default function AppRoutes() {
  return (
    <Routes>
<Route path="/" element={<Login/>}/>
<Route path="/select-role" element={<RoleSelector/>}/>
<Route path="/rider" element={<RiderDashboard/>}/>
<Route path="/driver" element={<DriverDashboard/>}/>
<Route path="/history" element={<History/>}/>
    </Routes>
  );
}
