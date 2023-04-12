import logo from "./../../media/ezdev-logo.png";
import classes from "./../../css/Header.module.css";

const Header = () => {
	const linkClasses = `${classes.link} f6 f5-l link bg-animate black-80 dib pa3 ph4-l`;

	return (
		<>
			<a href="/#title" className={classes.image}>
				<img
					// className={"flex-auto "}
					src={logo}
					alt="ez-dev logo"
					height={100}
					layout="filled"
				/> 
			</a>
			<header className={"bg-white black-80 tc pv1 avenir " + classes.header}>
				<h1 className={`${classes.name} +  mt2 mb0 fw1 f1`}>
					Anthony Gordon Kruger
				</h1>
				<h2 className={`${classes.title} + mt2 mb0 f6 fw4 ttu tracked`}>
					Software developer and tech enthusiast
				</h2>
				<nav className={"bt bb tc mw8 center mt4 bg-white " + classes.nav}>
					<a className={linkClasses} href="/#about">
						About
					</a>
					{/* <a className={linkClasses} href="/#title">
						Home
					</a> */}
					<a className={linkClasses} href="/#portfolio">
						Portfolio
					</a>
					{/* <a
						className={linkClasses}
						href="./../CV/AnthonyGordonKruger.pdf"
						target="_blank"
					>
						CV
					</a> */}
					<a className={linkClasses} href="/#contact">
						Contact
					</a>
				</nav>
			</header>
		</>
	);
};

export default Header;
