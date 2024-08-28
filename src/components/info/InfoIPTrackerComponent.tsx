import "./infoCSS.css";
const InfoIPTrackerComponent = () => {
  return (
    <div className="info-IP">
      <div className="ipAddress">
        <label>ip address</label>
        <h3>192.212.174.101</h3>
      </div>
      <div className="location">
        <label>location</label>
        <h3>Brooklyn, NY 10001</h3>
      </div>
      <div className="timezone">
        <label>timezone</label>
        <h3>UTC-05:00</h3>
      </div>
      <div className="isp">
        <label>Isp</label>
        <h3>SpaceX Starlink</h3>
      </div>
    </div>
  );
};

export default InfoIPTrackerComponent;
