import Heading from "./../UI/Heading";
import WorkItem from "./WorkItem";
import lottieData from "./../../lotties/workExperience.json"

const WorkExperience = () => {
	const workData = [
		{
			id: "w1",
			company: "A Company",
			role: "executive director",
			summary:
				"Lorem ipsum dolor sit amet, meliore minimum percipitur ne per, eos lobortorquatos contentiones cu. Vero assum viris ne ius, ne mollis disputando mel. Ex senserit iracundia nec. Tale oblique mea id, exerci delenit no usu. Id vix cetero verear. Cu eum paulo platonem.Eum quem prodesset no, sit id tollit tamquam veritus. At vis novum dolorum. An usudolor habemus conclusionemque, mei ei mazim sententiae, diam commodo assentior melid. Et commune efficiendi ullamcorper eos, ad his atqui commodo.",
			dateFrom: "January 2019",
			dateTo: "December 2021",
			comments: ["Trippled company revenue", "did great work"],
		},
		{
			id: "w2",
			company: "PFS",
			role: "executive director",
      summary:
				"Lorem ipsum dolor sit amet, meliore minimum percipitur ne per, eos lobortorquatos contentiones cu. Vero assum viris ne ius, ne mollis disputando mel. Ex senserit iracundia nec. Tale oblique mea id, exerci delenit no usu. Id vix cetero verear. Cu eum paulo platonem.Eum quem prodesset no, sit id tollit tamquam veritus. At vis novum dolorum. An usudolor habemus conclusionemque, mei ei mazim sententiae, diam commodo assentior melid. Et commune efficiendi ullamcorper eos, ad his atqui commodo.",
			dateFrom: "January 2019",
			dateTo: "December 2021",
			comments: ["Trippled company revenue", "did great work"],
		},
		
	];

  const mappedWork = workData.map((job) => {
    return <WorkItem
      key={job.id}
      company={job.company}
      role={job.role}
      summary={job.summary}
      dateFrom={job.dateFrom}
      dateTo={job.dateTo}
      comments={job.comments}
    />;
  });

	return (
		<>
			<Heading lottieData={lottieData} content="Work Experience" />
      {mappedWork}
		</>
	);
};

export default WorkExperience;
