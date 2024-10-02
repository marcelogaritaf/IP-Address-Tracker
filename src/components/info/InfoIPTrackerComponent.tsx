import { IpTracker } from "../../hooks/useTrackers";
import "./infoCSS.css";
interface Props {
  ipTracker: IpTracker;
}
const InfoIPTrackerComponent = ({ ipTracker }: Props) => {
  return (
    <div className="info-IP">
      <div className="ipAddress">
        <label>ip address</label>
        <h3>{ipTracker.ip}</h3>
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
        <h3>{ipTracker.isp}</h3>
      </div>
    </div>
  );
};

export default InfoIPTrackerComponent;
