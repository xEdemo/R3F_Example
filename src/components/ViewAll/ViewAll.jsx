import { useState, useEffect } from "react";
import { StarRating, DifficultyGauge } from "./../../components";
import { Link } from "react-router-dom";

const ViewAll = ({ reports, title, basePath }) => {
	return (
		<div>
			<h1>{title}</h1>
			<div className="reports-container">
				{reports.map((t, index) => (
					<Link to={`${basePath}/${index}`} key={index}>
						<img src={t?.image?.src} alt={t?.image?.alt} />
						<div>
							<div style={{ height: "100%" }}>
								<h2>{t?.title}</h2>
								<b>Written by: {t?.author}</b> <br />
								<b>{t?.timestamp}</b>
								<p>{t?.desc}</p>
							</div>
							
						</div>
						{/* Gauge in bottom-right */}
						{t?.difficulty && (
							<div className="reports-gauge-wrap">
								<DifficultyGauge level={t.difficulty} />
							</div>
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default ViewAll;
