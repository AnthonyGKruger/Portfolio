import classes from "../../css/About.module.css";
import image from "./../../media/AnthonyIllustrated.jpeg";

const MobileAbout = () => {
	return (
		<article
			className={
				"avenir mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 " +
				classes.mobile
			}
		>
			<div className="tc">
				<img
					src={image}
					className="br-100 h3 w5 h5 dib shadow-1"
					title="Anthony Kruger"
					alt="Anthony Kruger"
				/>
				<h1 className={"f2 " + classes.headingText}>About me</h1>
				<hr className="mw3 bb bw1 b--black-10" />
			</div>
			<p
				className={
					"lh-copy measure center tc f6 black-70 " + classes.paragraphText
				}
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Tellus in hac
				habitasse platea dictumst vestibulum rhoncus est. Consequat mauris nunc
				congue nisi vitae suscipit. Iaculis at erat pellentesque adipiscing.
				Gravida dictum fusce ut placerat orci nulla. Turpis nunc eget lorem
				dolor sed viverra.
			</p>
			{/* <p
				className={
					"lh-copy measure center tc f6 black-70 " + classes.paragraphText
				}
			>
				As an accomplished Retail Branch manager my management skills and sales
				experience will be of great value to my future employer. The ideal
				opportunity would be where I can leverage my interaction skills,
				operational experience, and positive attitude. It will also provide me
				with the opportunity to enhance my creativity and acquire new skills
				that will complement the knowledge and skills I have already acquired
				through my degree and current work experience.
			</p> */}
		</article>
	);
};

export default MobileAbout;
