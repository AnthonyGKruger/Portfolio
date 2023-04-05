import { useIsVisible } from "../../hooks/UseIsVisible";
import { useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = () => {
	const ref = useRef();
	const isVisible = useIsVisible(ref);
	const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

	const [skills, setSkills] = useState([
		{ label: "React", value: 0 },
		{ label: "JS", value: 0 },
		{ label: "HTML", value: 0 },
		{ label: "CSS", value: 0 },
		{ label: "PHP", value: 0 },
		{ label: "SQL", value: 0 },
		{ label: "Java", value: 0 },
		{ label: "Python", value: 0 },
	]);

	if (isVisible) {
		setTimeout(() => {
			setSkills([
				{ label: "React", value: 65 },
				{ label: isMobile ? "JS" : "JavaScript", value: 60 },
				{ label: "HTML", value: 40 },
				{ label: "CSS", value: 30 },
				{ label: "PHP", value: 45 },
				{ label: "SQL", value: 30 },
				{ label: "Java", value: 20 },
				{ label: "Python", value: 20 },
			]);
		}, 800);
	}

	const totalMaximum = 100;

	const dataPoints = skills.map((dataPoint) => (
		<ChartBar
			className="w-100"
			value={dataPoint.value}
			maxValue={totalMaximum}
			label={dataPoint.label}
			key={dataPoint.label}
		/>
	));

	return (
		<div ref={ref} id="chart" className="chart avenir mw9 center mt5">
			{[...dataPoints]}
		</div>
	);
};

export default Chart;
