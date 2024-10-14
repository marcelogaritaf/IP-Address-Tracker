import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { IpTracker } from "../../hooks/useTrackers";
import { useEffect, useState } from "react";
import axios from "axios";
interface Props {
  ip: IpTracker;
}
const MapComponent = ({ ip }: Props) => {
  const [position, setPosition] = useState<LatLngExpression | null>(null);
  //const position: LatLngExpression = [51.505, -0.09];
  useEffect(() => {
    const fecthCoordinates = async () => {
      try {
        console.log("fecthing coordinates");
        const apiKey = "526ef6de-f960-445f-8466-1b03c73ed46d";
        const url =
          "https://apiip.net/api/check?ip=" + ip.ip + "&accessKey=" + apiKey;
        const response = await axios.get(url);
        console.log(response.data);
        const { latitude, longitude } = response.data;
        if (latitude && longitude) {
          setPosition([latitude, longitude]);
        } else {
          console.log("error location no localizada");
        }
      } catch (error) {
        console.error("Error fecthing coordinates:" + error);
      }
    };
    fecthCoordinates();
  }, [ip]);
  if (!position) {
    return <div>loading map...</div>;
  }
  return (
    <MapContainer
      center={position}
      zoom={12}
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
