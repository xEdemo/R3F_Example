import React, { useEffect, useMemo, useRef, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { Link } from "react-router-dom";

const slug = (str = "") =>
	String(str)
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, "")
		.trim()
		.replace(/\s+/g, "-");

const Content = ({ report }) => {
	const contentRef = useRef(null);
	const [activeId, setActiveId] = useState(null);
	const [toc, setToc] = useState([]);

	const handleCopy = (text) => {
		navigator.clipboard.writeText(text);
	};

	useEffect(() => {
		if (!contentRef.current) return;

		const headings = Array.from(
			contentRef.current.querySelectorAll("h3, h4")
		).map((node) => {
			if (!node.id) node.id = slug(node.textContent);
			return {
				id: node.id,
				text: node.textContent,
				level: node.tagName.toLowerCase(),
			};
		});

		setToc(headings);
	}, [report]);

	useEffect(() => {
		if (!contentRef.current || toc.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

				setActiveId(visible[0].target.id);
			},
			{
				root: null,
				rootMargin: "-10% 0px -80% 0px",
				threshold: [0, 0.25, 0.5, 0.75, 1],
			}
		);

		const nodes = contentRef.current.querySelectorAll("h3, h4");
		nodes.forEach((node) => observer.observe(node));
		// Ensure top heading is active when page loads at top
		if (toc[0]) setActiveId(toc[0].id);
		return () => observer.disconnect();
	}, [toc]);

	const onTocClick = (id) => {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	const renderParagraphs = (p) => {
		if (!p) return null;

		const parseLinks = (htmlString) => {
			// Replace <a href="/path">text</a> with React Link
			const regex = /<a\s+href="([^"]+)"[^>]*>(.*?)<\/a>/gi;
			const parts = [];
			let lastIndex = 0;
			let match;

			while ((match = regex.exec(htmlString)) !== null) {
				const [full, href, text] = match;
				const before = htmlString.slice(lastIndex, match.index);
				if (before) parts.push(before);
				parts.push(
					href.startsWith("http") ? (
						<a
							key={href + text}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
						>
							{text}
						</a>
					) : (
						<Link key={href + text} to={href}>
							{text}
						</Link>
					)
				);
				lastIndex = match.index + full.length;
			}

			const after = htmlString.slice(lastIndex);
			if (after) parts.push(after);

			return <>{parts}</>;
		};

		const makeParagraph = (text, i) => {
			if (typeof text === "object" && text.html) {
				return <p key={i}>{parseLinks(text.html)}</p>;
			}
			if (typeof text === "string") {
				return <p key={i}>{parseLinks(text)}</p>;
			}
			return null;
		};

		if (Array.isArray(p)) return p.map(makeParagraph);
		return makeParagraph(p);
	};

	return (
		<div className="report-layout">
			{/* Main content */}
			<div className="report-content" ref={contentRef}>
				<h1>{report.title}</h1>
				<div className="report-content-written-by">
					<b>Written by: {report.author}</b> <br />
					<b>{report.timestamp}</b>
				</div>

				<h3 id={slug("Description")}>Description</h3>
				{renderParagraphs(report.desc)}

				{report.content.map((content, index) => (
					<React.Fragment key={index}>
						{content?.header && (
							<h3 id={slug(content.header)}>{content.header}</h3>
						)}

						{/* Optional subheaders within a section */}
						{content?.subheaders?.map((sh, i) => (
							<React.Fragment key={`sub-${index}-${i}`}>
								<h4 id={slug(sh.subheader)}>{sh.subheader}</h4>
								{renderParagraphs(sh.paragraphs)}
								{Array.isArray(sh.ol) && sh.ol.length > 0 && (
									<ol className="report-content-ol">
										{sh.ol.map((item, idx) => (
											<li key={idx}>{item}</li>
										))}
									</ol>
								)}
								{sh?.code?.content && (
									<div className="report-content-code-container">
										<pre className="report-content-pre">
											<code className={sh.code.lang}>
												{sh.code.content}
											</code>
											<button
												className="copy-code-button"
												onClick={() =>
													handleCopy(sh.code.content)
												}
												aria-label="Copy code"
											>
												<FiCopy />
											</button>
										</pre>
									</div>
								)}
								{sh?.image?.src && (
									<div className="report-content-image-container">
										<img
											src={sh.image.src}
											alt={sh.image.alt}
										/>
									</div>
								)}
							</React.Fragment>
						))}
						{/* Paragraph(s) at the header itself */}
						{renderParagraphs(content?.p)}

						{/* Ordered list at header level */}
						{Array.isArray(content?.ol) &&
							content.ol.length > 0 && (
								<ol className="report-content-ol">
									{content.ol.map((item, i) => (
										<li key={i}>{item}</li>
									))}
								</ol>
							)}

						{/* Code at header level */}
						{content?.code?.content && (
							<div className="report-content-code-container">
								<pre className="report-content-pre">
									<code className={content.code.lang}>
										{content.code.content}
									</code>
									<button
										className="copy-code-button"
										onClick={() =>
											handleCopy(content.code.content)
										}
										aria-label="Copy code"
									>
										<FiCopy />
									</button>
								</pre>
							</div>
						)}

						{/* Image at header level */}
						{content?.image?.src && (
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

			{/* Scroll map / TOC */}
			<aside className="report-toc" aria-label="Table of contents">
				<div className="report-toc-title">On this page</div>
				<nav>
					<ul className="toc-list">
						{toc.map(({ id, text, level }) => (
							<li
								key={id}
								className={`toc-item ${level} ${
									activeId === id ? "active" : ""
								}`}
							>
								<button
									className="toc-link"
									onClick={() => onTocClick(id)}
									aria-current={
										activeId === id ? "true" : "false"
									}
								>
									{text}
								</button>
							</li>
						))}
					</ul>
				</nav>
			</aside>
		</div>
	);
};

export default Content;
