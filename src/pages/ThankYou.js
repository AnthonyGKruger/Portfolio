import Lottie from "react-lottie";
import lottieData from "./../lotties/ThankYou.json";
import classes from "./../css/ThankYou.module.css";
import { useMediaQuery } from "react-responsive";

const ThankYou = () => {
	const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: lottieData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<>
			<Lottie width={400} options={defaultOptions} />
			{/* <article class="tc ph4 avenir">
				<ul
					class={`${isMobile ? "f1" : "f2"} f2-m f1-l fw2  mv3 ${classes.text} ${classes.flip2}`}
				>
					<li>Awesome!</li>
					<li>Thank You!</li>
				</ul>
				<h2
					class={`${isMobile ? "f3" : "f4"} f4-m f3-l fw2  mt0 lh-copy ${
						classes.text
					}`}
				>
					Thank you for contacting me, I will get back to you shortly...In the
					meantime, why not carry on looking around?.
				</h2>
			</article> */}
			<article class="tc ph4 avenir">
				<h1 class={`${isMobile?"f1":"f2"} f2-m f1-l fw2  mv3 ${classes.text}`}>Awesome!</h1>
				<h2 class={`${isMobile?"f3":"f4"} f4-m f3-l fw2  mt0 lh-copy ${classes.text}`}>
					Thank you for contacting me, I will get back to you shortly...In the
					meantime, why not carry on looking around?.
				</h2>
			</article>
		</>
	);
};

export default ThankYou;
