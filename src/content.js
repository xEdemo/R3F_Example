import ABOUT_ME_L from "./assets/landingCards/about-me-l.png";
import HTB_WRITEUPS_V from "./assets/landingCards/HTB-writeups-v.png";
import WEEKLY_BLOG_S from "./assets/landingCards/weekly-blog-s.png";
import CRACK_ME_WRITEUPS_T from "./assets/landingCards/crack-me-writeups-t.png";
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
};

const tags = {
	easy: "Easy",
	medium: "Medium",
	hard: "Hard",
	insane: "Insane",
	xss: "XSS",
};

export const staticLandingCards = [
	{
		title: "About Me",
		image: {
			src: ABOUT_ME_L,
			alt: "L",
		},
		description: "",
		link: "/about-me",
	},
	{
		title: "HTB Writeups",
		image: {
			src: HTB_WRITEUPS_V,
			alt: "V",
		},
		description: "",
		link: "/htb-writeups",
	},
	{
		title: "Weekly Blog",
		image: {
			src: WEEKLY_BLOG_S,
			alt: "S",
		},
		description: "",
		link: "/weekly-blogs",
	},
	{
		title: "Crack Me Writeups",
		image: {
			src: CRACK_ME_WRITEUPS_T,
			alt: "T",
		},
		description: "",
		link: "/crack-me-writeups",
	}
];

export const aboutMe = [
	{
		title: "About Me",
		desc: "Description.",
		image: {
			src: ABOUT_ME_L,
			alt: "L",
		},
		author: "Xnrrrrrr",
		timestamp: "October 13, 2024",
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
	}
];

export const HTBWriteups = [
	{
		title: "Guardian",
		desc: "This is a brief description that will summarize the hack.",
		image: {
			src: HTB_WRITEUPS_V,
			alt: "V",
		},
		author: "Xnrrrrrr",
		timestamp: "October 13, 2024",
		passwordProtected: true,
		tags: [tags.easy],
		difficulty: "medium",
		content: [
			{
				p: "",
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
	}
];

export const crackMeWriteups = [
	{
		title: "Crack Me Writeup Title",
		desc: "This is a brief description that will summarize the crack me.",
		image: {
			src: CRACK_ME_WRITEUPS_T,
			alt: "Crack Me 1",
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

export const breachReports = [
	{
		title: "Report title",
		desc: "This is a brief description that will summarize the treat report. This will get cut off at 100 characters for the landing page.",
		image: {
			src: HTB_WRITEUPS_V,
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
					src: HTB_WRITEUPS_V,
					alt: "Big worm",
				},
			},
		],
	},
	{
		title: "Report title",
		desc: "This is a brief description that will summarize the treat report. This will get cut off at 100 characters for the landing page.",
		image: {
			src: HTB_WRITEUPS_V,
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
					src: HTB_WRITEUPS_V,
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
			src: WEEKLY_BLOG_S,
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
			src: CRACK_ME_WRITEUPS_T,
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
			src: WEEKLY_BLOG_S,
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
