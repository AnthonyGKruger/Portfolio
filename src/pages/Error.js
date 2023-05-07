import Footer from "../components/UI/Footer";
import Header from "../components/UI/Header";
import Lottie from "./../components/UI/Lottie";
import { useMediaQuery } from "react-responsive";

const Error = () => {
	const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

	const animationData =
		"https://lottie.host/6b91086d-cbb1-418f-bea8-d22d85fc8865/XokxKM2sj5.json";
	const lottieWidth = isMobile ? 300 : 500;
	const lottieHeight = isMobile ? 300 : 500;

	return (
		<>
			<Header />
			<section className="vh-90 avenir">
				<header className="tc ph5 lh-copy">
					<Lottie
						width={lottieWidth}
						height={lottieHeight}
						animationData={animationData}
					/>
					<span className="tc f1-l fw1">
						Sorry, we can't find the page you are looking for.
					</span>
				</header>
				<p className="fw1 i tc mt4 mt5-l f4 f3-l">
					Try using the navigation above to find the page you are looking for.
				</p>
			</section>
			<Footer />
		</>
	);
};

export default Error;
