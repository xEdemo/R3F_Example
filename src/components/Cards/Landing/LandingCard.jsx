import { Link } from "react-router-dom";

const LandingCard = ({
	title,
	subtitle,
	imageSrc,
	imageAlt,
	author,
	timestamp,
	desc,
	linkToAll,
	linkText,
	linkToMore,
}) => {
	return (
		<Link to={linkToMore} style={{ textDecoration: "none" }}>
		<div className="landing-card">
			<h3>{title}</h3>
			<h6>{subtitle}</h6>
			<img src={imageSrc} alt={imageAlt} className="landing-card-image" />
			<b>By: {author}</b>
			<b style={{ marginBottom: "0.5rem" }}>{timestamp}</b>
			<p>{desc}</p>
			<Link to={linkToAll} className="landing-card-link">
				{linkText}
			</Link>
		</div>
		</Link>
	);
};

export default LandingCard;
