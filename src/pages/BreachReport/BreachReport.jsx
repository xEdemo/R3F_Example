import { Header, Footer, StarRating } from "./../../components";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { breachReports } from "../../content.js";
import { Link } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-c";
import "prismjs/components/prism-css.js";
import "prismjs/components/prism-asm6502.js";
import "prismjs/components/prism-cshtml.js";
import "prismjs/components/prism-python.js";
import "prismjs/components/prism-java.js";

const BreachReport = () => {
	const { index } = useParams();
	const breach = breachReports[parseInt(index)];

	useEffect(() => {
		Prism.highlightAll();
	}, []);

	if (!breach) {
		return (
			<>
				<Header />
				<div className="background">
					<div>
						No breach found with an index of {index}. Click{" "}
						<Link to="/breach-reports">here</Link> to view all
						breach reports.
					</div>
					<Footer />
				</div>
			</>
		);
	}

	return (
		<>
			<Header />
			<div className="background">
				<div className="breach-report-content">
					<h1>{breach.title}</h1>
					<div className="breach-report-written-by">
						<b>Written by: {breach.author}</b> <br />
						<b>{breach.timestamp}</b>
					</div>
					<h3>Abstract</h3>
					<p>{breach.desc}</p>
					{breach.content.map((content, index) => (
						<React.Fragment key={index}>
							{content.header && <h3>{content.header}</h3>}
							{content.p && <p>{content.p}</p>}
							{content.code.content && (
								<pre style={{ borderRadius: "1rem" }}>
									<code className={`${content.code.lang}`}>
										{content.code.content}
									</code>
								</pre>
							)}
							{content.image.src && (
								<img
									src={content.image.src}
									alt={content.image.alt}
									style={{
										width: "100%",
										padding: "1rem 5rem",
									}}
								/>
							)}
						</React.Fragment>
					))}
				</div>
				<Footer />
			</div>
		</>
	);
};

export default BreachReport;
