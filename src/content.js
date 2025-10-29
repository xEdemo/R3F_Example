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
	},
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
					content: ``,
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
					content: ``,
				},
				image: {
					src: "",
					alt: "",
				},
			},
		],
	},
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
					content: `.background {
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
					content: ``,
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
		desc: {
			html: `
       			This is a brief description that will summarize the weekly blog.
        		You can include an inline <a href="https://example.com" target="_blank" rel="noopener noreferrer">link</a>.
				This is a brief description that will summarize the weekly blog.
				This is a brief description that will summarize the weekly blog.
				This is a brief description that will summarize the weekly blog.
				This is a brief description that will summarize the weekly blog.
				This is a brief description that will summarize the weekly blog.
				This is a brief description that will summarize the weekly blog.
      		`,
		},
		image: {
			src: WEEKLY_BLOG_S,
			alt: "Weekly Blog",
		},
		author: "Xnrrrrrr",
		timestamp: "October 13, 2024",
		rating: 3.4,
		content: [
			{
				header: "Header 1",
				p: "This paragraph explains the topic of this weeks blog and the code I have present",
				code: {
					lang: programmingLanguage.css,
					content: `.background {
	width: 100%;
	min-height: 100vh;
	height: 100%;
	position: relative;
	background-color: var(--base-background-color);
	background-image: linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0)), url("../src/assets/general/TUFF.jpeg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-top: 80px;
}`,
				},
				/* Optional ordered list at header level */
				ol: [
					"Set up the background container",
					"Apply linear gradient overlay",
					"Enable vertical scrolling",
				],
				/* Optional nested subheaders (h4) */
				subheaders: [
					{
						subheader: "Implementation Notes",
						paragraphs: [
							"We’re using CSS variables to inherit theme colors.",
							{
								html: `Remember to keep contrast high for accessibility. Consider <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">testing contrast</a>.`,
							},
						],
					},
					{
						subheader: "Edge Cases",
						paragraphs:
							"Check mobile devices with small screens to ensure the layout adapts properly.",
						ol: [
							"Very long titles",
							"Missing images",
							"Nested lists",
						],
					},
				],
			},

			{
				header: "New Comings",
				p: ["Hello there", "Hi roonie"],
				image: {
					src: WEEKLY_BLOG_S,
					alt: "Weekly Blog S",
				},
			},
			{
				header: "Another Important Image",
				p: "Here I go into detail and explain what I did in the following image",
				image: {
					src: WEEKLY_BLOG_S,
					alt: "Weekly Blog S",
				},
			},
			{
				header: "FAQ",
				subheaders: [
					{
						subheader: "Where can I find your blog?",
						paragraphs: {
							html: `You can find it here at <a href="https://www.lvst.com" target="_blank" rel="noopener noreferrer">www.lvst.com</a>.`,
						},
					},
					{
						subheader: "Where can I help support your website?",
						paragraphs: "There will be no donations accepted.",
					},
				],
			},
		],
	},
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
					content: ``,
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
					content: ``,
				},
				image: {
					src: "",
					alt: "",
				},
			},
		],
	},
];
