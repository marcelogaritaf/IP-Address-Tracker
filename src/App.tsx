import InfoIPTrackerComponent from "./components/info/InfoIPTrackerComponent";
import MapComponent from "./components/Map/MapComponent";
import IpTrackerTitle from "./components/title/IpTrackerTitle";
import useTrackers from "./hooks/useTrackers";
import "./index.css";
function App() {
  const { data } = useTrackers();
  console.log(data);
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
