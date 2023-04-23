import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import Banner from "../components/UI/Banner";

const Root = () => {
	const location = useLocation();

	return (
		<>
			<Header />
			<main className={location.path !== "/" ? "vh-auto mb6" : ""}>
				<Banner
					bgColor="bg-red"
					content="This is website is currently being developed, some functionality may
					not work as expected!"
					textColor="white"
				/>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Root;
