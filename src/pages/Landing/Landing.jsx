import { Header, LandingCard, Footer } from "./../../components";
import { Link } from "react-router-dom";
import {
	staticLandingCards,
	breachReports,
	toolReviews,
	caseStudies,
	threatProfiles,
	malwareAnalyses,
	weeklyBlog,
} from "../../content.js";

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
						<h2 className="section-title">Featured Content</h2>
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
					</section>
					<section className="about-section">
						<h2 className="section-title">About Me</h2>
						<div className="about-content">
							<p>This paragraph is my about me.</p>
							<p>
								You can contact me with inquiries at (email) or
								discord
							</p>
						</div>
					</section>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Landing;
