import DesktopAbout from "../components/functional/DesktopAbout";
import Languages from "../components/functional/Languages";
import MobileAbout from "../components/functional/MobileAbout";
import Skills from "../components/functional/Skills";

const About = () => {
	return (
		<>
			<DesktopAbout/>
			<MobileAbout/>
			<Skills/>
			<Languages/>
		</>
	);
};

export default About;
