import PortfolioItem from "../components/functional/PortfolioItem";
import Heading from "./../components/UI/Heading"
import mumbiLogo from "./../media/mumbi-logo.png"
import dptsLogo from "./../media/DPTS.png"

const Portfolio = () => {

	const animationData = "https://lottie.host/dc706d6a-e4a6-42bc-ba37-f7a808f759bf/RR21ET2flw.json"

	const portfolioData = [
		{
			id: "p1",
			title: "Mumbi Trust Administrators",
			description: "SPA for Mumbi Trust Administrators.",
			link: "https://mumbi.ezdev.solutions",
			image: mumbiLogo,
		},
		{
			id: "p2",
			title: "Digital Payment Transformation Services",
			description: "SPA for DPTS with ecommerce.",
			link: "https://dpts.co.za",
			image: dptsLogo,
		},	
	];

	const portfolioItems = portfolioData.map((portfolioItem) => {
		return (
			<PortfolioItem
				key={portfolioItem.id}
				title={portfolioItem.title}
				description={portfolioItem.description}
				link={portfolioItem.link}
				image={portfolioItem.image}
			/>
		);
	});
	return <article>
		<Heading animationData={animationData} content="Portfolio"/>
		<div className="cf pa2">{portfolioItems}</div></article>;
};

export default Portfolio;
