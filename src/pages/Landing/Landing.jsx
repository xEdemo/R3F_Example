import { Graces, Header, LandingCard, Footer } from "./../../components";
import { Link } from "react-router-dom";
import {
	breachReports,
	toolReviews,
	caseStudies,
	threatProfiles,
	malwareAnalyses,
	weeklyBlog,
} from "../../content.js";

const Landing = () => {
	const latestBreachReport = breachReports[breachReports.length - 1];
	const truncatedThreatDesc =
		latestBreachReport.desc.length > 100
			? `${latestBreachReport.desc.slice(0, 100)}...`
			: latestBreachReport.desc;

	const lastestToolReview = toolReviews[toolReviews.length - 1];
	const truncatedToolReview =
		lastestToolReview.desc.length > 100
			? `${lastestToolReview.desc.slice(0, 100)}...`
			: lastestToolReview.desc;

	const latestCaseStudy = caseStudies[caseStudies.length - 1];
	const truncatedCaseStudy =
		latestCaseStudy.desc.length > 100
			? `${latestCaseStudy.desc.slice(0, 100)}...`
			: latestCaseStudy.desc;

	const latestThreatProfiles = threatProfiles[threatProfiles.length - 1];
	const truncatedThreatProfiles =
		latestThreatProfiles.desc.length > 100
			? `${latestThreatProfiles.desc.slice(0, 100)}...`
			: latestThreatProfiles.desc;

	const latestMalwareAnalysis = malwareAnalyses[malwareAnalyses.length - 1];
	const truncatedMalwareAnalysis =
		latestMalwareAnalysis.desc.length > 100
			? `${latestMalwareAnalysis.desc.slice(0, 100)}...`
			: latestMalwareAnalysis.desc;

	const latestWeeklyBlog = weeklyBlog[weeklyBlog.length - 1];
	const truncatedWeeklyBlog =
		latestWeeklyBlog.desc.length > 100
			? `${latestWeeklyBlog.desc.slice(0, 100)}...`
			: latestWeeklyBlog.desc;

	return (
		<>
			<Header />
			{/* Content */}
			<div className="landing-background">
				<div>
					<section className="hero-section">
						<div className="hero-content">
							<h1>Welcome to </h1>
							<h2>The Public Eye</h2>
							<p>Discover the latest insights and more.</p>
						</div>
					</section>
					<section className="featured-section">
						<h2 className="section-title">Featured Content</h2>
						<div className="featured-content">
							<LandingCard
								title="Latest Breach Report"
								subtitle={latestBreachReport.title}
								imageSrc={latestBreachReport.image.src}
								imageAlt={latestBreachReport.image.alt}
								author={latestBreachReport.author}
								timestamp={latestBreachReport.timestamp}
								desc={truncatedThreatDesc}
								linkToAll="/breach-reports"
								linkText="View all breach reports."
								linkToMore={`/breach-reports/${
									breachReports.length - 1
								}`}
							/>
							<LandingCard
								title="Latest Tool Review"
								subtitle={lastestToolReview.title}
								imageSrc={lastestToolReview.image.src}
								imageAlt={lastestToolReview.image.alt}
								author={lastestToolReview.author}
								timestamp={lastestToolReview.timestamp}
								desc={truncatedToolReview}
								linkToAll="/tool-reviews"
								linkText="View all tool reviews."
								linkToMore={`/tool-reviews/${
									toolReviews.length - 1
								}`}
							/>

							<LandingCard
								title="Threat Profiles"
								subtitle={latestThreatProfiles.title}
								imageSrc={latestThreatProfiles.image.src}
								imageAlt={latestThreatProfiles.image.alt}
								author={latestThreatProfiles.author}
								timestamp={latestThreatProfiles.timestamp}
								desc={truncatedThreatProfiles}
								linkToAll="/threat-profiles"
								linkText="View all threat profiles."
								linkToMore={`/threat-profiles/${
									threatProfiles.length - 1
								}`}
							/>
							<LandingCard
								title="Latest Malware Analysis"
								subtitle={latestMalwareAnalysis.title}
								imageSrc={latestMalwareAnalysis.image.src}
								imageAlt={latestMalwareAnalysis.image.alt}
								author={latestMalwareAnalysis.author}
								timestamp={latestMalwareAnalysis.timestamp}
								desc={truncatedMalwareAnalysis}
								linkToAll="/malware-analyses"
								linkText="View all malware analyses."
								linkToMore={`/malware-analyses/${
									malwareAnalyses.length - 1
								}`}
							/>
							<LandingCard
								title="Weekly Blog"
								subtitle={latestWeeklyBlog.title}
								imageSrc={latestWeeklyBlog.image.src}
								imageAlt={latestWeeklyBlog.image.alt}
								author={latestWeeklyBlog.author}
								timestamp={latestWeeklyBlog.timestamp}
								desc={truncatedWeeklyBlog}
								linkToAll="/weekly-blogs"
								linkText="View all weekly blogs."
								linkToMore={`/weekly-blogs/${
									weeklyBlog.length - 1
								}`}
							/>
							<LandingCard
								title="Crack Me"
								subtitle={latestCaseStudy.title}
								imageSrc={latestCaseStudy.image.src}
								imageAlt={latestCaseStudy.image.alt}
								author={latestCaseStudy.author}
								timestamp={latestCaseStudy.timestamp}
								desc={truncatedCaseStudy}
								linkToAll="/case-studies"
								linkText="View all case studies."
								linkToMore={`/case-studies/${
									caseStudies.length - 1
								}`}
							/>
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
			<Graces />
		</>
	);
};

export default Landing;
