import classes from './../../css/EducationItem.module.css'

const EducationItem = ({
	institution,
	qualification,
	dateFrom,
	dateTo,
  comments
}) => {

  const mappedComments = comments.map((comment) =>{
    return <div class={`f6 grow br2 ph3 pv2 mb2 mr2 dib ${classes.comments}`}>{comment}</div>
  })

	return (
		<div className={`center pl2 mt4 mb4 w-70 bl bw2 avenir ${classes.educationItem}`}>
			<div className={`bb f3 b ${classes.institution}`}>{`${institution}`}</div>
			<div className={`bb ${classes.detailsContainer}`}>
				<div class={`cf pt3 ${classes.details}`}>
					<div class="fl w-40 tc pv2">{`Qualification: ${qualification}`}</div>
					<div class="fl w-25 tc pv2">{`From: ${dateFrom}`}</div>
					<div class="fl w-25 tc pv2">{`To: ${dateTo}`}</div>
				</div>
			</div>
			<div className="pt3">{mappedComments}</div>
		</div>
	);
};

export default EducationItem;
