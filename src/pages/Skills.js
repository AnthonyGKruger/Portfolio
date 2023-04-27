import Heading from "./../components/UI/Heading";
import Chart from "./../components/UI/Chart";

const Skills = () => {

	const animationData = "https://lottie.host/837884f9-914c-463f-9abd-b76fff2cdcd3/5O9PY5O9Tc.json"

	return (
		<>
			<Heading animationData={animationData} content="Skills" />
			<Chart />
		</>
	);
};

export default Skills;
