import { Header, LandingCard, Footer } from "./../../components";
import { Link } from "react-router-dom";
import { staticLandingCards } from "../../content.js";

const Landing = () => {
	return (
		<>
			<Header />
			{/* Content */}
			<div className="landing-background background">
				<div>
					<section className="hero-section">
						<div className="hero-content">
							<img
								className="hero-img"
								src="/src/assets/general/hero-img.png"
								alt="hero"
							/>
							<h1>LV</h1>
							<p>Discover the latest insights and more.</p>
						</div>
					</section>
					<section className="featured-section">
						<div>
							<div className="featured-content">
								{staticLandingCards.map((c, i) => (
									<LandingCard
										key={i}
										title={c.title}
										imageSrc={c.image.src}
										imageAlt={c.image.alt}
										desc={c.description}
										link={c.link}
									/>
								))}
							</div>
						</div>
					</section>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Landing;
