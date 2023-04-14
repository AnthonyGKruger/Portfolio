import Heading from "./../components/UI/Heading";
import Chart from "./../components/UI/Chart";
import lottieData from "./../lotties/Skill.json";

const Skills = () => {
	return (
		<>
			<Heading lottieData={lottieData} content="Skills" />
			<Chart />
		</>
	);
};

export default Skills;
