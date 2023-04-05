import classes from "./../../css/Heading.module.css"

const Heading = (props) => {
	return (
		<div className={`bt bb tc mw8 center mt4 bg-white ${classes.headingBorder}`}>
			<h2 className={`f2 tc ${classes.headingText}`}>{props.content}</h2>
		</div>
	);
};

export default Heading;
