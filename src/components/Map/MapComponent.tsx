import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
const MapComponent = () => {
  const position: LatLngExpression = [51.505, -0.09];
  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{
        height: "100vh",
        width: "100%",
        position: "absolute",
        zIndex: "2",
      }}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>i'm in london</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
