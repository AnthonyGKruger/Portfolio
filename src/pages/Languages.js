import Heading from "../components/UI/Heading";
import classes from "./../css/Languages.module.css";
import Lottie from "./../components/UI/Lottie";

const Languages = () => {
	const headingAnimationData =
		"https://lottie.host/3e3b4494-4e85-42ca-8152-b158111155d8/RUNQSbxg3U.json";
	const englishAnimationData =
		"https://assets7.lottiefiles.com/datafiles/IUH3UberOD9dTWnyi7DhOvi0GtEyqp7eO02WKKve/uk.json";
	const afrikaansAnimationData =
		"https://assets1.lottiefiles.com/packages/lf20_JHXco0Wx21.json";

	return (
		<>
			<Heading animationData={headingAnimationData} content="Languages" />
			<article className="cf avenir w-50 center">
				<div className="fl w-100 w-50-ns tc">
					<p className={`f4 ${classes.language}`}>
						<Lottie
							height={100}
							width={100}
							animationData={englishAnimationData}
						/>
						English
					</p>
				</div>
				<div className="fl w-100 w-50-ns  tc">
					<p className={`f4 ${classes.language}`}>
						<Lottie
							height={100}
							width={100}
							animationData={afrikaansAnimationData}
						/>
						Afrikaans
					</p>
				</div>
			</article>
		</>
	);
};

export default Languages;
