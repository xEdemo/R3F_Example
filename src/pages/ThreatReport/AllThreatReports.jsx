import React from "react";
import { Header, Footer } from "./../../components";
import { threatReports } from "../../content.js";
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
					{threatReports.map((t, index) => (
						<React.Fragment key={index}>
							<Link to={`/threat-reports/${index}`}>
								<img src={t.image.src} alt={t.image.alt} />
								<div>
									<h3>{t.title}</h3>
									<b>Written by: Xnrrrrrr</b>
								</div>
							</Link>
						</React.Fragment>
					))}
				</div>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<p>hi</p>
				<Footer />
			</div>
		</>
	);
};

export default AllThreatReports;