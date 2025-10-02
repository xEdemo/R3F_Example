import React from "react";

const Content = ({ report }) => {
	console.log(report)
	return (
		<div className="report-content">
			<h1>{report.title}</h1>
			<div className="report-content-written-by">
				<b>Written by: {report.author}</b> <br />
				<b>{report.timestamp}</b>
			</div>
			<h3>Abstract</h3>
			<p>{report.desc}</p>
			{report.content.map((content, index) => (
				<React.Fragment key={index}>
					{content.header && <h3>{content.header}</h3>}
					{content.p && <p>{content.p}</p>}
					{content.code.content && (
						<pre className="report-content-pre" style={{ margin: "1rem 0rem" }}>
							<code className={`${content.code.lang}`}>
								{content.code.content}
							</code>
						</pre>
					)}
					{content.image.src && (
						<div className="report-content-image-container">
							<img
								src={content.image.src}
								alt={content.image.alt}
							/>
						</div>
					)}
				</React.Fragment>
			))}
		</div>
	);
};

export default Content;
