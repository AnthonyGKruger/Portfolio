import classes from "../../css/About.module.css";
import image from "./../../media/AnthonyIllustrated.jpeg";

const DesktopAbout = () => {
	return (
		<div className={ classes.slideRight + " avenir dt mw8 center pv4 pv5-m pv6-ns " + classes.desktop}>
			<div className={`dtc v-top ${classes.slideRight}`}>
				<img
					src={image}
					alt="Anthony Kruger"
					className="mw5 db br-100 shadow-1"
				/>
			</div>
			<div className="dtc v-top pl5">
				<h1 id="about" className={"f2 tc " + classes.headingText}>About me</h1>
				<hr className="mw3 bb bw1 b--black-10" />
				<p className={"lh-copy mv0 " + classes.paragraphText}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in
					hac habitasse platea dictumst vestibulum rhoncus est. Consequat mauris
					nunc congue nisi vitae suscipit. Iaculis at erat pellentesque
					adipiscing. Gravida dictum fusce ut placerat orci nulla. Turpis nunc
					eget lorem dolor sed viverra.
				</p>
			</div>
		</div>
	);
};

export default DesktopAbout;
