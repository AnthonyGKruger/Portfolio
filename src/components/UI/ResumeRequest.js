import AnthonyResume from "./../../media/Anthony_Gordon_Kruger.pdf";
import classes from "./../../css/ResumeRequest.module.css"

import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const ResumeRequest = () => {
	const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

	const navigate = useNavigate();

	return (
		<div className={`${isMobile ? "ph1" : "ph2"} avenir`}>
			<h2 className={`f4 ${classes.text}`}>Want to skip through all of this? Download my resume below:</h2>
			<a href={AnthonyResume} download="Anthony_Gordon_Kruger_Resume">
				<button className={`f6 grow br2 ph3 pv2 mb2 mr2 dib pointer input-reset ${classes.button}`}onClick={() => navigate("/")}>Download Resume</button>
			</a>
		</div>
	);
};

export default ResumeRequest;
