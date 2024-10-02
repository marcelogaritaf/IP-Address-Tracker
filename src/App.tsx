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
        {data ? (
          <InfoIPTrackerComponent ipTracker={data} />
        ) : (
          <p>no data available</p>
        )}
      </div>
      <div className="map">
        <MapComponent />
      </div>
    </>
  );
}

export default App;
