import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import Lottie from "./../UI/Lottie";
import classes from "./../../css/Heading.module.css";

const Heading = (props) => {
	const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

	const location = useLocation();

	const mobileContent = (
		<article
			className={`ml-50 w-100 cf avenir tc bt bb tc mw8 center mt4 bg-white pa3 ${classes.headingContainer} `}
		>
			<div className={`fl w-30 w-50-ns`}>
				<Lottie height={100} width={100} animationData={props.animationData} />
			</div>
			<div className={`fl w-50 w-50-ns f3 ${classes.headingText}`}>
				<h2>{props.content}</h2>
			</div>
		</article>
	);

	let desktopContent;

	switch (location.pathname) {
		case "/skills":
		case "/languages":
		case "/qualifications":
		case "/work-experience":
		case "/portfolio":
			desktopContent = (
				<article
					className={`ml-50 w-100 cf avenir  tc mw8 center mt4 bg-white pa3 
					`}
				>
					<div className="w-100 center ">
						<div className={`fl w-50 w-50-ns pl7`}>
							<Lottie
								height={100}
								width={100}
								animationData={props.animationData}
							/>
						</div>
						<div className={`fl w-50 w-50-ns f3 pr7 ${classes.headingText}`}>
							<h2>{props.content}</h2>
							<hr className="mw3 bb bw1 b--black-10" />
						</div>
					</div>
				</article>
			);
			break;

		default:
			desktopContent = (
				<article
					className={`ml-50 w-100 cf avenir bt bb tc mw8 center mt4 bg-white pa3 ${classes.headingContainer} `}
				>
					<div className="w-100 center ">
						<div className={`fl w-50 w-50-ns pl7`}>
							<Lottie height={100} width={100} animationData={props.animationData} />
						</div>
						<div className={`fl w-50 w-50-ns f3 pr7 ${classes.headingText}`}>
							<h2>{props.content}</h2>
						</div>
					</div>
				</article>
			);
	}

	return <>{isMobile ? mobileContent : desktopContent}</>;
};

export default Heading;
