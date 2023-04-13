import Footer from "../components/UI/Footer";
import Header from "../components/UI/Header";
// import {Link} from "react-router-dom";
import Lottie from "react-lottie";
import lottieData from "./../lotties/404.json";
import { useMediaQuery } from "react-responsive";

const Error = () => {

	const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: lottieData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

  const lottieWidth = isMobile?300:500;
  const lottieHeight = isMobile?300:500;

	return (
		<>
			<Header />
			<section className="vh-90 avenir">
				<header className="tc ph5 lh-copy">
					<Lottie width={lottieWidth} height={lottieHeight} options={defaultOptions}/>
					<h2 className="tc f1-l fw1">
						Sorry, we can't find the page you are looking for.
					</h2>
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
