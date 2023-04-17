import Heading from "./../components/UI/Heading";
import lottieData from "./../lotties/Education.json";
import EducationItem from "./../components/functional/EducationItem";

const educationData = [
	{
		id: "q1",
		institution: "Richfeild Graduate Institute of Technology",
		qualification: "BsC IT SAQA ID # 35954",
		dateFrom: "January 2019",
		dateTo: "December 2021",
		comments: ["Specialized in Systems Development", "4 Distinctions"],
	},
	{
		id: "q2",
		institution: "Lyttleton Manor High School",
		qualification: "National Senior Certificate",
		dateFrom: "January 2006",
		dateTo: "December 2010",
		comments: ["Achieved half colours for academics."],
	},
	// {id:q3,
	// 	institution: "",
	// 	qualification: "",
	// 	dateFrom: "",
	// 	dateTo: "",
	// 	comments: [],
	// },
];

const mappedEducation = educationData.map((qualification) => {
	return (
		<EducationItem
			key={qualification.id}
			institution={qualification.institution}
			qualification={qualification.qualification}
			dateFrom={qualification.dateFrom}
			dateTo={qualification.dateTo}
			comments={qualification.comments}
		/>
	);
});

const Education = () => {
	return (
		<>
			<Heading content="Qualifications" lottieData={lottieData} />
			{mappedEducation}
		</>
	);
};

export default Education;
