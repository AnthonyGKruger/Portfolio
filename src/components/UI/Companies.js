import classes from "./../../css/Companies.module.css";
import digitalStreamLogo from "./../../media/ds-logo.png";
import dptsLogo from "./../../media/DPTS.png";
import mumbiTALogo from "./../../media/mumbi-logo.png";
import mumbiFSLogo from "./../../media/Mumbi_Financial_Services_Pty_Logo-removebg-preview.png";
import avLogo from "./../../media/av-logo.png";
import { useMediaQuery } from "react-responsive";

const Companies = () => {
	const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

	const companies = [
		{ id: "c1", logo: digitalStreamLogo, name: "Digital Stream" },
		{ id: "c2", logo: dptsLogo, name: "DPTS" },
		{ id: "c3", logo: mumbiTALogo, name: "Mumbi Trust Administrators" },
		{ id: "c4", logo: mumbiFSLogo, name: "Mumbi Financial Services" },
		{ id: "c5", logo: avLogo, name: "Addventures" },
	];

	const mappedCompanies = companies.map((company) => {
		return (
			<div  key={company.id} className={`fl tc pa4 ${isMobile ? "w-100" : "w-20"}`}>
				<img src={company.logo} alt={`${company.name} logo`} />
			</div>
		);
	});

	return (
		<div className="cf avenir">
			<article className="vh-25 dt w-100">
				<div className="dtc v-mid tc ph3 ph4-l">
					<h2 className={`f1 fw6 tc ${classes.text}`}>
						Companies that I have worked with!
					</h2>
				</div>
			</article>
      {mappedCompanies}
		</div>
	);
};

export default Companies;
