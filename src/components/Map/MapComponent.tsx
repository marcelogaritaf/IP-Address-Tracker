import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { IpTracker } from "../../hooks/useTrackers";
interface Props {
  ip: IpTracker;
}
const MapComponent = ({ ip }: Props) => {
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
        <Popup>i'm in {ip.location.country}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
