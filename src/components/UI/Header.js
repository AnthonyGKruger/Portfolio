import { Link } from "react-router-dom";
import logo from "./../../media/ezdev-logo.png";
import classes from "./../../css/Header.module.css";

const Header = () => {
	const linkClasses = `${classes.link} f6 f5-l link bg-animate black-80 dib pa3 ph4-l`;

	return (
		<>
			<Link to="/" className={classes.image}>
				<img
					// className={"flex-auto "}
					src={logo}
					alt="ez-dev logo"
					height={100}
					layout="filled"
				/>
			</Link>
			<header className={"bg-white black-80 tc pv1 avenir " + classes.header}>
				<h1 className={`${classes.name} +  mt2 mb0 fw1 f1`}>
					Anthony Gordon Kruger
				</h1>
				<h2 className={`${classes.title} + mt2 mb0 f6 fw4 ttu tracked`}>
					Software developer and tech enthusiast
				</h2>
				<nav className={"bt bb tc mw8 center mt4 bg-white " + classes.nav}>
					<Link className={linkClasses} to="/">
						About
					</Link>
					<Link className={linkClasses} to="/portfolio">
						Portfolio
					</Link>
					<Link className={linkClasses} to="/contact-me">
						Contact
					</Link>
				</nav>
			</header>
		</>
	);
};

export default Header;
