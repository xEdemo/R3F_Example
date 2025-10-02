import JWT_TOOL_IMAGE_CARD from "./assets/toolReviews/JWT_TOOL/JWT_TOOL_IMAGE_CARD.png";
import THREAT_REPORT_IMAGE_CARD from "./assets/threatReports/threatReport/THREAT_REPORT_IMAGE_CARD.png";
import WEEK1_BLOG_IMAGE_CARD from "./assets/weeklyBlogs/WEEK1/WEEK1_BLOG_IMAGE_CARD.png";
import CASE_STUDY1_IMAGE_CARD from "./assets/caseStudies/caseStudy1/CASE_STUDY1_IMAGE_CARD.png";
import THREAT_PROFILE1_IMAGE_CARD from "./assets/threatProfiles/threatProfile1/THREAT_PROFILE1_IMAGE_CARD.png";
import MALWARE_ANALYSIS1_IMAGE_CARD from "./assets/malwareAnalyses/malwareAnalysis1/MALWARE_ANALYSIS1_IMAGE_CARD.png";

// Needed for syntax highlighting
const programmingLanguage = {
	asm6502: "language-asm6502",
	c: "language-c",
	css: "language-css",
	html: "language-cshtml",
	java: "language-java",
	js: "language-javascript",
	python: "language-python",
}

export const breachReports = [
	{
		title: "Report title",
		desc: "This is a brief description that will summarize the treat report. This will get cut off at 100 characters for the landing page.",
		image: {
			src: THREAT_REPORT_IMAGE_CARD,
			alt: "Breach Report",
		},
		author: "Xnrrrrrr",
		timestamp: "October 13, 2024",
		rating: 3.4,
		content: [
			{
				header: "My Content Here",
				p: "The following code was used in this website to give you a better user experience.",
				code: {
					lang: programmingLanguage.css,
					content: 
`.background {
	width: 100%;
	min-height: calc(100vh - 50px);
	height: calc(100% - 50px);
	position: relative;
	background-color: rgb(55, 0, 0);
	top: 50px;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

code {
	all: unset;
	font-family: monospace; /* Reapply the default monospace font */
	background-color: initial;
	color: initial;
	width: 100%;
}`,
				},
				image: {
					src: "",
					alt: "",
				},
			},
			{
				header: "",
				p: "Now, wasn't that nice of me?",
				code: {
					lang: "",
					content: 
``,
				},
				image: {
					src: THREAT_REPORT_IMAGE_CARD,
					alt: "Big worm",
				},
			},
		],
	},
	{
		title: "Report title",
		desc: "This is a brief description that will summarize the treat report. This will get cut off at 100 characters for the landing page.",
		image: {
			src: THREAT_REPORT_IMAGE_CARD,
			alt: "Breach Report",
		},
		author: "Xnrrrrrr",
		timestamp: "October 13, 2024",
		rating: 3.4,
		content: [
			{
				header: "My Content Here",
				p: "The following code was used in this website to give you a better user experience.",
				code: {
					lang: programmingLanguage.css,
					content: 
`.background {
	width: 100%;
	min-height: calc(100vh - 50px);
	height: calc(100% - 50px);
	position: relative;
	background-color: rgb(55, 0, 0);
	top: 50px;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

code {
	all: unset;
	font-family: monospace; /* Reapply the default monospace font */
	background-color: initial;
	color: initial;
	width: 100%;
}`,
				},
				image: {
					src: "",
					alt: "",
				},
			},
			{
				header: "",
				p: "Now, wasn't that nice of me?",
				code: {
					lang: "",
					content: 
``,
				},
				image: {
					src: THREAT_REPORT_IMAGE_CARD,
					alt: "Big worm",
				},
			},
		],
	},
	
];

export const toolReviews = [
	{
		title: "Tool Review Title",
		desc: "This is a brief description that will summarize the tool review. This will get cut off at 100 characters for the landing page.",
		image: {
			src: JWT_TOOL_IMAGE_CARD,
			alt: "Tool Review",
		},
		author: "Xnrrrrrr",
		timestamp: "October 13, 2024",
		rating: 3.4,
		content: [
			{
				p: "",
				code: {
					lang: "",
					content: 
``,
				},
				image: {
					src: "",
					alt: "",
				},
			},
			{
				p: "",
				code: {
					lang: "",
					content: 
``,
				},
				image: {
					src: "",
					alt: "",
				},
			},
		],
	},
];

export const caseStudies = [
	{
		title: "Case Study Title",
		desc: "This is a brief description that will summarize the case study. This will get cut off at 100 characters for the landing page.",
		image: {
			src: CASE_STUDY1_IMAGE_CARD,
			alt: "Case Study",
		},
		author: "Xnrrrrrr",
		timestamp: "October 13, 2024",
		rating: 3.4,
		content: [
			{
				p: "",
				code: {
					lang: "",
					content: 
``,
				},
				image: {
					src: "",
					alt: "",
				},
			},
			{
				p: "",
				code: {
					lang: "",
					content: 
``,
				},
				image: {
					src: "",
					alt: "",
				},
			},
		],
	},
];

export const threatProfiles = [
	{
		title: "Threat Profile Title",
		desc: "This is a brief description that will summarize the threat profile. This will get cut off at 100 characters for the landing page.",
		image: {
			src: THREAT_PROFILE1_IMAGE_CARD,
			alt: "Threat Profile",
		},
		author: "Xnrrrrrr",
		timestamp: "October 13, 2024",
		rating: 3.4,
		content: [
			{
				p: "",
				code: {
					lang: "",
					content: 
``,
				},
				image: {
					src: "",
					alt: "",
				},
			},
			{
				p: "",
				code: {
					lang: "",
					content: 
``,
				},
				image: {
					src: "",
					alt: "",
				},
			},
		],
	},
];

export const malwareAnalyses = [
	{
		title: "Malware Analysis Title",
		desc: "This is a brief description that will summarize the malware. This will get cut off at 100 characters for the landing page.",
		image: {
			src: MALWARE_ANALYSIS1_IMAGE_CARD,
			alt: "Malware Analysis",
		},
		author: "Xnrrrrrr",
		timestamp: "October 13, 2024",
		rating: 3.4,
		content: [
			{
				p: "",
				code: {
					lang: "",
					content: 
``,
				},
				image: {
					src: "",
					alt: "",
				},
			},
			{
				p: "",
				code: {
					lang: "",
					content: 
``,
				},
				image: {
					src: "",
					alt: "",
				},
			},
		],
	},
];

export const weeklyBlog = [
	{
		title: "Weekly Blog Title",
		desc: "This is a brief description that will summarize the weekly blog. This will get cut off at 100 characters for the landing page.",
		image: {
			src: WEEK1_BLOG_IMAGE_CARD,
			alt: "Weekly Blog",
		},
		author: "Xnrrrrrr",
		timestamp: "October 13, 2024",
		rating: 3.4,
		content: [
			{
				p: "",
				code: {
					lang: "",
					content: 
``,
				},
				image: {
					src: "",
					alt: "",
				},
			},
			{
				p: "",
				code: {
					lang: "",
					content: 
``,
				},
				image: {
					src: "",
					alt: "",
				},
			},
		],
	},
]
