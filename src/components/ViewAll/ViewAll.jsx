import { useState, useEffect } from "react";
import { StarRating } from "./../../components";
import { Link } from "react-router-dom";

const ViewAll = ({ reports, title, basePath }) => {
	return (
		<div>
			<h1>{title}</h1>
			<div className="sorter">Sort by...</div>
			<input type="text" placeholder="~$Search..." />
			<div className="reports-container">
				{reports.map((t, index) => (
					<div key={index}>
						<img src={t.image.src} alt={t.image.alt} />
						<div>
							<div style={{ height: "100%" }}>
								<h3>{t.title}</h3>
								<b>Written by: {t.author}</b> <br />
								<b>{t.timestamp}</b>
								<p>{t.desc}</p>
							</div>
							<Link to={`${basePath}/${index}`}>
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
	);
};

export default ViewAll;
