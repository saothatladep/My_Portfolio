import { FaLinkedinIn, FaGithub, FaFacebook } from 'react-icons/fa';

export const SM = 640;
export const MD = 768;
export const LG = 1024;
export const XL = 1280;
export const XXL = 1536;

export const menuNavbar = [
	{
		id: 0,
		title: 'Home',
		url: '/',
	},
	{
		id: 1,
		title: 'About',
		url: '/about',
	},
	{
		id: 2,
		title: 'My Skills',
		url: '/skills',
	},
	{
		id: 3,
		title: 'Work',
		url: '/work',
	},
	{
		id: 4,
		title: 'Contact',
		url: '/contact',
	},
];

export const socialIcon = [
	{
		id: 1,
		icon: <FaLinkedinIn />,
		url: 'https://www.linkedin.com/in/toanpham1903/',
	},
	{
		id: 2,
		icon: <FaGithub />,
		url: 'https://github.com/saothatladep',
	},
	{
		id: 3,
		icon: <FaFacebook />,
		url: 'https://www.facebook.com/TonTon1903/',
	},
];

export const tags = [
	'ReactJS',
	'NodeJS',
	'VueJS',
	'Express',
	'Javascript',
	'Typescript',
	'C#',
	'Entity Framework',
	'NextJS',
	'SQL',
	'Antd',
	'TailwindCSS',
	'Restfull API',
	'Git',
	'HTML',
	'CSS',
	'SASS',
	'Highcharts',
	'ES6',
	'Redux',
];

export const spanVariants = {
	visible: { y: 0, scaleY: 1 },
	hover: {
		y: [-1, -2, -2.8, 2, 1.2, 0],
		scaleY: [1, 1.3, 0.8, 1, 1.2, 1],
	},
};

export const listWordAffect = {
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.15,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			when: 'afterChildren',
		},
	},
};

export const listWordAffect2 = {
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.15,
			delayChildren: 1.2,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			when: 'afterChildren',
		},
	},
};
export const wordAffect = {
	visible: {
		opacity: 1,
		y: [-1, -1.9, -2.7, 1],
		scaleY: [1, 1.3, 0.8, 1],
	},
	hidden: {
		opacity: 0,
	},
};

export const spanVariantsIntro = {
	visible: { y: 0, scaleY: 1 },
	hover: {
		y: [-1, -2, -2.8, 2, 1.2, 0],
		scaleY: [1, 1.3, 0.8, 1, 1.2, 1],
		color: '#08fdd8',
	},
};

export const listWord1 = {
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.15,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			when: 'afterChildren',
		},
	},
};

export const listWord2 = {
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.15,
			delayChildren: 0.6,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			when: 'afterChildren',
		},
	},
};

export const listWord3 = {
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.15,
			delayChildren: 2,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			when: 'afterChildren',
		},
	},
};

export const word = {
	visible: {
		opacity: 1,
		y: [-1, -1.9, -2.7, 1],
		scaleY: [1, 1.3, 0.8, 1],
	},
	hidden: {
		opacity: 0,
	},
};

export const containerUp = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.7,
			staggerChildren: 0.3,
		},
	},
};

export const containerDown = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 1,
			staggerChildren: 0.3,
		},
	},
};

export const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

export const optionParticle = {
	fullScreen: {
		enable: false,
		zIndex: -1,
	},
	background: {
		color: {
			value: 'transparent',
		},
	},
	fpsLimit: 120,
	interactivity: {
		events: {
			onClick: {
				enable: true,
				mode: 'push',
			},
			onHover: {
				enable: true,
				mode: 'repulse',
			},
			resize: true,
		},
		modes: {
			push: {
				quantity: 4,
			},
			repulse: {
				distance: 100,
				duration: 0.4,
			},
		},
	},
	particles: {
		color: {
			value: '#08fdd8',
		},
		links: {
			color: '#08fdd8',
			distance: 150,
			enable: true,
			opacity: 0.5,
			width: 1,
		},
		collisions: {
			enable: true,
		},
		move: {
			direction: 'none',
			enable: true,
			outModes: {
				default: 'bounce',
			},
			random: false,
			speed: 2,
			straight: false,
		},
		number: {
			density: {
				enable: true,
				area: 800,
			},
			value: 80,
		},
		opacity: {
			value: 0.5,
		},
		shape: {
			type: 'circle',
		},
		size: {
			value: { min: 1, max: 5 },
		},
	},
	detectRetina: true,
};
export const work = {
	visible: {
		opacity: 1,
		y: 0,
		scaleY: [1, 1.3, 0.8, 1],
	},
	hidden: {
		opacity: 0,
		y: 100,
	},
};
export const experiences = [
	{
		role: 'data analyst',
		company: 'Bizwork',
		time: '15/06/2020 - 01/12/2020',
		description:
			'Design data models for projects s company, develop procedures and scripts for data migration, develop and implement and optimize stored procedures and functions using T-SQL.',
	},

	{
		role: 'web developer',
		company: 'Aegona',
		time: '01/05/2021 - 14/07/2022',
		description:
			'Participate in the process of analyzing and designing websites including tasks related to designing and creating APIs (Back-end), creating user interfaces or dashboard page (Front-end).',
	},
];

export const works = [
	{
		id: 1,
		title: "TonTon's Furniture Shop",
		tech: ['MongoDB', 'NodeJS', 'Express', 'ReactJS', 'Redux', 'Material UI'],
		description: '',
		linkDemo: 'https://furnituretonton.web.app',
		linkSource: 'https://github.com/saothatladep/tontonshop',
	},
	{
		id: 2,
		title: "TonTon's Portfolio",
		tech: ['ReactJS', 'TailwindCSS'],
		description: '',
		linkDemo: 'https://tontonportfolio.netlify.app',
		linkSource: 'https://github.com/saothatladep/My_Portfolio',
	},
	{
		id: 3,
		title: "TonTon's Fortune Teller",
		tech: ['HTML', 'CSS', 'JS'],
		description: '',
		linkDemo: 'https://tontonfortuneteller.netlify.app',
		linkSource: 'https://github.com/saothatladep/fortune-teller',
	},
	{
		id: 4,
		title: "TonTon's Pokemon Flip Game",
		tech: ['VueJS'],
		description: '',
		linkDemo: 'https://pokemonmemoriesgame.netlify.app',
		linkSource: 'https://github.com/saothatladep/Pokemon-Memories-Game',
	},
	{
		id: 5,
		title: "TonTon's Pokemon List",
		tech: ['ReactJS', 'Typescript'],
		description: '',
		linkDemo: 'https://pokettypescript.netlify.app',
		linkSource: 'https://github.com/saothatladep/Pokemon-Typescript',
	},
	{
		id: 6,
		title: 'Admin Exam',
		tech: ['ReactJS', 'Material UI', 'Redux'],
		description: '',
		linkDemo: 'https://adminonline.netlify.app',
		linkSource: 'https://github.com/saothatladep/admin_hufi_exam',
	},
];
