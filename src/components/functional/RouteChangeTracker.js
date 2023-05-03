import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const RouteChangeTracker = ({ history }) => {
  
  const TRACKING_ID = "G-WF8ZLTQFYL";
	ReactGA.initialize([{trackingId: TRACKING_ID}]);

	const location = useLocation();
	console.log(location);

  ReactGA.send({ hitType: "pageview", page: location.pathname });

  return;
};

export default RouteChangeTracker;
