import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";

const Root = () => {
	const location = useLocation();

	return (
		<>
			<Header />
			<main className={location.path !== "/" ? "vh-auto mb6" : ""}>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Root;
