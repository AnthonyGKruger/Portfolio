import classes from "./../../css/EducationItem.module.css";
import educationLocationImage from "./../../media/educationLocation.svg";
import scrollImage from "./../../media/scroll.svg";
import calendarImage from "./../../media/calendar.svg";
import { useMediaQuery } from "react-responsive";

const EducationItem = ({
	institution,
	qualification,
	dateFrom,
	dateTo,
	comments,
}) => {

	const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
	
	const mappedComments = comments.map((comment) => {
		return (
			<div key={comment} className={`f6 grow br2 ph3 pv2 mb2 mr2 dib ${classes.comments}`}>
				{comment}
			</div>
		);
	});

	return (
		<div
			className={`center pl2 mt4 mb4 ${isMobile?"w-90":"w-70"} bl bw2 avenir ${classes.educationItem}`}
		>
			<div className={`bb f3 b ${classes.institution}`}>
				<img
					style={{ width: "2rem" }}
					src={educationLocationImage}
					alt="locations"
				/>
				{`  ${institution}`}
			</div>
			<div className={`bb ${classes.detailsContainer}`}>
				<div className={`cf pt3 ${classes.details}`}>
					<div className="ph2 fl w-40 pv2">
						<img
							style={{ width: "1rem" }}
							src={scrollImage}
							alt="scroll"
						/>
						{`  Qualification: ${qualification}`}
					</div>
					<div className="ph2 fl w-25 pv2">
						<img
							style={{ width: "1rem" }}
							src={calendarImage}
							alt="calendar"
						/>
						{`  From: ${dateFrom}`}
					</div>
					<div className="ph2 fl w-25 pv2">
						<img
							style={{ width: "1rem" }}
							src={calendarImage}
							alt="calendar"
						/>
						{`  To: ${dateTo}`}
					</div>
				</div>
			</div>
			<div className="pt3">{mappedComments}</div>
		</div>
	);
};

export default EducationItem;
