import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import Banner from "../components/UI/Banner";
import Companies from "../components/UI/Companies";
import RouteChangeTracker from "../components/functional/RouteChangeTracker";

const Root = () => {
	const location = useLocation();

	return (
		<>
			<RouteChangeTracker/>
			<Header />
			<main className={location.path !== "/" ? "vh-auto mb5" : ""}>
				<Banner
					bgColor="bg-red"
					content="This website is currently being developed, some functionality may
					not work as expected!"
					textColor="white"
				/>
				<Outlet />
			</main>
			<Companies />
			<Footer />
		</>
	);
};

export default Root;
