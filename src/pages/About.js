import DesktopAbout from "../components/functional/DesktopAbout";
import Education from "./Education";
import Languages from "./Languages";
import MobileAbout from "../components/functional/MobileAbout";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

const About = () => {
	return (
		<>
			<DesktopAbout />
			<MobileAbout />
			<Skills />
			<Languages />
			<Education />
			<WorkExperience />
		</>
	);
};

export default About;
