import { Header, Footer, StarRating } from "./../../components";
import { breachReports } from "../../content.js";
import { Link } from "react-router-dom";

const AllBreachReports = () => {
	return (
		<>
			<Header />
			<div className="background">
				<div>
					<h1>Breach Reports</h1>
					<div className="sorter">Sort by...</div>
					<input type="text" placeholder="~$Search..." />
					<div className="breach-report-container">
						{breachReports.map((t, index) => (
							<div key={index}>
								<img src={t.image.src} alt={t.image.alt} />
								<div>
									<div style={{ height: "100%" }}>
										<h3>{t.title}</h3>
										<b>Written by: {t.author}</b> <br />
										<b>{t.timestamp}</b>
										<p>{t.desc}</p>
									</div>
									<Link to={`/breach-reports/${index}`}>
										Read More
									</Link>
									<StarRating
										rating={t.rating}
										bottom={10}
										right={10}
									/>
								</div>
								{/* <StarRating
									rating={t.rating}
									bottom={10}
									left={240}
								/> */}
							</div>
						))}
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default AllBreachReports;
