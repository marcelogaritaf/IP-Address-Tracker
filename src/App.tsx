import InfoIPTrackerComponent from "./components/info/InfoIPTrackerComponent";
import MapComponent from "./components/Map/MapComponent";
import IpTrackerTitle from "./components/title/IpTrackerTitle";
import "./index.css";
function App() {
  return (
    <>
      <div className="main-container">
        <IpTrackerTitle />
        <InfoIPTrackerComponent />
      </div>
      <div className="map">
        <MapComponent />
      </div>
    </>
  );
}

export default App;
