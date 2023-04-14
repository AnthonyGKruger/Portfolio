import Heading from "../components/UI/Heading";
import classes from "./../css/Languages.module.css";
import languageLottieData from "../lotties/Language.json";
import Lottie from "react-lottie";
import englishLottieData from "../lotties/EnglishFlag.json";
import afrikaansLottieData from "../lotties/SouthAfricanFlag.json";

const Languages = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<>
			<Heading lottieData={languageLottieData} content="Languages" />
			<article className="cf avenir w-50 center">
				<div className="fl w-100 w-50-ns tc">
					<p className={`f4 ${classes.language}`}>
						<Lottie
							speed={1}
							height={100}
							width={100}
							options={{
								...defaultOptions,
								loop: true,
								animationData: englishLottieData,
							}}
						/>
						English
					</p>
				</div>
				<div className="fl w-100 w-50-ns  tc">
					<p className={`f4 ${classes.language}`}>
						<Lottie
							height={100}
							width={100}
							options={{
								...defaultOptions,
								animationData: afrikaansLottieData,
							}}
						/>
						Afrikaans
					</p>
				</div>
			</article>
		</>
	);
};

export default Languages;
