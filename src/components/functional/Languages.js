import Heading from "../UI/Heading";
import languageLottieData from "./../../lotties/Language.json";
import Lottie from "react-lottie";
import englishLottieData from "../../lotties/EnglishFlag.json";
import afrikaansLottieData from "../../lotties/SouthAfricanFlag.json";

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
					<h2>
						<Lottie
							speed={1}
							height={100}
							width={100}
							options={{
								...defaultOptions,
								loop: false,
								animationData: englishLottieData,
							}}
						/>
						English
					</h2>
				</div>
				<div className="fl w-100 w-50-ns  tc">
					<h2>
						<Lottie
							height={100}
							width={100}
							options={{
								...defaultOptions,
								animationData: afrikaansLottieData,
							}}
						/>
						Afrikaans
					</h2>
				</div>
			</article>
		</>
	);
};

export default Languages;
