import Lottie from "./../components/UI/Lottie";
import classes from "./../css/ThankYou.module.css";
import { useMediaQuery } from "react-responsive";

const ThankYou = () => {
	const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });

	const animationData =
		"https://lottie.host/cbbc999d-fc85-4c50-b1a5-8b7c1dacc512/GzNWx81cgd.json";

	return (
		<>
			<Lottie width={400} height={400} animationData={animationData} />
			<article class="tc ph4 avenir">
				<h1
					class={`${isMobile ? "f1" : "f2"} f2-m f1-l fw2  mv3 ${classes.text}`}
				>
					Awesome!
				</h1>
				<h2
					class={`${isMobile ? "f3" : "f4"} f4-m f3-l fw2  mt0 lh-copy ${
						classes.text
					}`}
				>
					Thank you for contacting me, I will get back to you shortly...In the
					meantime, why not carry on looking around?.
				</h2>
			</article>
		</>
	);
};

export default ThankYou;
