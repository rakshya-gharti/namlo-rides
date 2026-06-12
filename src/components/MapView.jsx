import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Custom colored markers//
const createIcon = (color) =>
  L.divIcon({
    className: "",
    html: `<div style="
      width: 20px; height: 20px;
      background: ${color};
      border: 3px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(0,0,0,0.4);
    "></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

const riderIcon = createIcon("#a855f7");  // purple
const driverIcon = createIcon("#22c55e"); // green
const pickupIcon = createIcon("#3b82f6"); // blue
const dropoffIcon = createIcon("#ef4444"); // red

// Default Kathmandu center//
const KATHMANDU = [27.7172, 85.324];

export default function MapView({ rideData }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-gray-700" style={{ height: "350px" }}>
      <MapContainer
        center={KATHMANDU}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Default Kathmandu marker when no ride  */}
        {!rideData && (
          <Marker position={KATHMANDU} icon={riderIcon}>
            <Popup>Kathmandu, Nepal 🇳🇵</Popup>
          </Marker>
        )}

          {/* //Rider Position// */}
        {rideData?.riderPosition && (
          <Marker position={rideData.riderPosition} icon={riderIcon}>
            <Popup>Rider 🙋</Popup>
          </Marker>
        )}

        {/* Driver position */}
        {rideData?.driverPosition && (
          <Marker position={rideData.driverPosition} icon={driverIcon}>
            <Popup>Driver 🚗</Popup>
          </Marker>
        )}

        {/* Pickup marker */}
        {rideData?.pickupCoords && (
          <Marker position={rideData.pickupCoords} icon={pickupIcon}>
            <Popup>Pickup 📍: {rideData.pickup}</Popup>
          </Marker>
        )}

        {/* Dropoff marker */}
        {rideData?.dropoffCoords && (
          <Marker position={rideData.dropoffCoords} icon={dropoffIcon}>
            <Popup>Destination 🏁: {rideData.destination}</Popup>
          </Marker>
        )}

      </MapContainer>
    </div>
  );
}