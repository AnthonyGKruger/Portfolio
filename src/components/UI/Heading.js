import { useMediaQuery } from "react-responsive";
import Lottie from "react-lottie";
import classes from "./../../css/Heading.module.css";

const Heading = (props) => {
	const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: props.lottieData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const mobileContent = (
		<>
			<div className={`fl w-30 w-50-ns`}>
				<Lottie height={100} width={100} options={defaultOptions} />
			</div>
			<div className={`fl w-50 w-50-ns f3 ${classes.headingText}`}>
				<h2>{props.content}</h2>
			</div>
		</>
	); 

	const desktopContent = (
		<div className="w-100 center ">
			<div className={`fl w-50 w-50-ns pl7`}>
				<Lottie height={100} width={100} options={defaultOptions} />
			</div>
			<div className={`fl w-50 w-50-ns f3 pr7 ${classes.headingText}`}>
				<h2>{props.content}</h2>
			</div>
		</div>	
	);

	return (
		<article
			className={`ml-50 w-100 cf avenir tc bt bb tc mw8 center mt4 bg-white pa3 ${classes.headingContainer} `}
		>
			{isMobile ? mobileContent : desktopContent}
		</article>
	);
};

export default Heading;
