import { NavLink, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import logo from "./../../media/ezdev-logo.png";
import classes from "./../../css/Header.module.css";

const Header = () => {
	
	const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
	const location = useLocation();
	const linkClasses = `${classes.link} f6 f5-l link bg-animate black-80 dib pa3 ph4-l`;
	let navContent;

	const defaultNavContent = (
		<nav className={"bt bb tc mw8 center mt4 bg-white " + classes.nav}>
			<NavLink className={linkClasses} to="/">
				About
			</NavLink>
			<NavLink className={linkClasses} to="/portfolio">
				Portfolio
			</NavLink>
			<NavLink className={linkClasses} to="/contact-me">
				Contact
			</NavLink>
		</nav>
	);

	const aboutNavContent = (
		<nav className={"bt bb tc mw8 center mt4 bg-white " + classes.nav}>
			<NavLink className={linkClasses} to="/">
				About
			</NavLink>
			<NavLink className={linkClasses} to="/skills">
				Skills
			</NavLink>
			<NavLink className={linkClasses} to="/languages">
				Languages
			</NavLink>
			<NavLink className={linkClasses} to="/education">
				Education
			</NavLink>
			<NavLink className={linkClasses} to="/work-experience">
				Work Experience
			</NavLink>
			<NavLink className={linkClasses} to="/portfolio">
				Portfolio
			</NavLink>
			<NavLink className={linkClasses} to="/contact-me">
				Contact
			</NavLink>
		</nav>
	);

	switch (location.pathname) {
		case "/":
		case "/skills":
		case "/languages":
		case "/education":
		case "/work-experience":
			navContent = aboutNavContent;
			break;

		default:
			navContent = defaultNavContent;
	}

	return (
		<>
			<NavLink to="/" className={classes.image}>
				<img src={logo} alt="ez-dev logo" height={100} layout="filled" />
			</NavLink>
			<header className={"bg-white black-80 tc pv1 avenir " + classes.header}>
				<h1 className={`${classes.name} +  mt2 mb0 fw1 f1`}>
					Anthony Gordon Kruger
				</h1>
				<h2 className={`${classes.title} + mt2 mb0 f6 fw4 ttu tracked`}>
					Software developer and tech enthusiast
				</h2>
				{isMobile? defaultNavContent: navContent}
			</header>
		</>
	);
};

export default Header;
