import { Link } from "react-router-dom";

const LandingCard = ({
	title,
	imageSrc,
	imageAlt,
	desc,
	link,
}) => {
	return (
		<div className="landing-card-wrap">
			<Link
				to={link || "#"}
				className="landing-card-link"
				aria-label={title}
			>
				<div className="landing-card-3d">
					{/* Front */}
					<div className="landing-card-face landing-card-front">
						<h3>{title}</h3>
						<img
							src={imageSrc}
							alt={imageAlt}
							className="landing-card-image"
						/>
					</div>

					{/* Back */}
					<div className="landing-card-face landing-card-back">
						<h3>{title}</h3>
						
						{desc && <p className="landing-card-desc">{desc}</p>}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default LandingCard;
