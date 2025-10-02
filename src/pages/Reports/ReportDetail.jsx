import { Header, Footer, Content } from "./../../components";
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-c";
import "prismjs/components/prism-css.js";
import "prismjs/components/prism-asm6502.js";
import "prismjs/components/prism-cshtml.js";
import "prismjs/components/prism-python.js";
import "prismjs/components/prism-java.js";

const ReportDetail = ({ reportType, reports, basePath }) => {
	const { index } = useParams();
	const report = reportType === "about me" ? reports[0] : reports[parseInt(index)] ;

	useEffect(() => {
		Prism.highlightAll();
        console.log(reportType)
	}, []);

	if (!report) {
		return (
			<>
				<Header />
				<div className="background">
					{index && (
						<div>
							No report found with an index of {index}. Click{" "}
							<Link to={basePath}>here</Link> to view all{" "}
							{reportType} reports.
						</div>
					)}
					<Footer />
				</div>
			</>
		);
	}

	return (
		<>
			<Header />
			<div className="background">
				<Content report={report} />
				<Footer />
			</div>
		</>
	);
};

export default ReportDetail;
