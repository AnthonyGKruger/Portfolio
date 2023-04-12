import DesktopAbout from "../components/functional/DesktopAbout";
import Education from "../components/functional/Education";
import Languages from "../components/functional/Languages";
import MobileAbout from "../components/functional/MobileAbout";
import Skills from "../components/functional/Skills";
import WorkExperience from "../components/functional/WorkExperience";

const About = () => {
	return (
		<>
			<DesktopAbout/>
			<MobileAbout/>
			<Skills/>
			<Languages/>
			<Education/>
			<WorkExperience/>
		</>
	);
};

export default About;
