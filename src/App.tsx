import InfoIPTrackerComponent from "./components/info/InfoIPTrackerComponent";
import MapComponent from "./components/Map/MapComponent";
import IpTrackerTitle from "./components/title/IpTrackerTitle";
import useTrackers from "./hooks/useTrackers";
import "./index.css";
function App() {
  const { data, isLoading } = useTrackers();
  console.log(data);
  if (isLoading) return <p>is loading</p>;
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
        {data ? <MapComponent ip={data} /> : <p>no data available</p>}
      </div>
    </>
  );
}

export default App;
