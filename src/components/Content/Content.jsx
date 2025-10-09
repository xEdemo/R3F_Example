import React from "react";
import { FiCopy } from "react-icons/fi";

const Content = ({ report }) => {

	const handleCopy = (text) => {
		navigator.clipboard.writeText(text);
	};

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
						<div className="report-content-code-container">
							<pre className="report-content-pre">
								<code className={content.code.lang}>
									{content.code.content}
								</code>
								<button
									className="copy-code-button"
									onClick={() => handleCopy(content.code.content)}
									aria-label="Copy code"
								>
									<FiCopy />
								</button>
							</pre>
						</div>
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
