import React from "react";
import { Header, Footer, StarRating } from "./../../components";
import { breachReports } from "../../content.js";
import { Link } from "react-router-dom";

const AllThreatReports = () => {
	return (
		<>
			<Header />
			<div className="background">
				<h1>Threat Reports</h1>
				<div className="sorter">Sort by...</div>
				<input type="text" placeholder="~$Search..." />
				<div className="threat-report-container">
					{breachReports.map((t, index) => (
						<React.Fragment key={index}>
							<Link to={`/threat-reports/${index}`}>
								<img src={t.image.src} alt={t.image.alt} />
								<div>
									<h3>{t.title}</h3>
									<b>Written by: {t.author}</b> <br/>
									<b>{t.timestamp}</b>
									<p>{t.desc}</p>
									<StarRating rating={t.rating} />
								</div>
							</Link>
						</React.Fragment>
					))}
				</div>
				<Footer />
			</div>
		</>
	);
};

export default AllThreatReports;
