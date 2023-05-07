import { Link } from "react-router-dom";

const PortfolioItem = ({ title, link, image, description }) => {
	return (
		<div className="fl vh-25-l vh-30 vh-25-m w-25-m w-20-l pa3 outline black-30 ma2">
			<Link to={link} className="db link dim tc mt3" target="_blank">
				<img src={image} alt={title} className="w-100 db black-10" />
				<dl className="mt2 f6 lh-copy">
					<dt className="clip">Title</dt>
					<dd className="ml0 black truncate w-100">{title}</dd>
					<dt className="clip">Description</dt>
					<dd className="ml0 gray truncate w-100">{description}</dd>
				</dl>
			</Link>
		</div>
	);
};

export default PortfolioItem;
