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
		url: '#',
	},
	{
		id: 1,
		title: 'About',
		url: '#',
	},
	{
		id: 2,
		title: 'My Skills',
		url: '#',
	},
	{
		id: 3,
		title: 'Work',
		url: '#',
	},
	{
		id: 4,
		title: 'Contact',
		url: '#',
	},
	{
		id: 5,
		title: 'Blog',
		url: '#',
	},
];

export const socialIcon = [
	{
		id: 1,
		icon: <FaLinkedinIn />,
		href: '#',
	},
	{
		id: 2,
		icon: <FaGithub />,
		href: '#',
	},
	{
		id: 3,
		icon: <FaFacebook />,
		href: '#',
	},
];

export const tags = [
	'ReactJs',
	'NodeJs',
	'Express',
	'Javascript',
	'C#',
	'Entity Framework',
	'NextJs',
	'SQL',
	'Antd',
	'Tailwindcss',
	'Restfull API',
	'Git',
	'HTML',
	'CSS',
	'Sass',
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
			staggerChildren: 0.2,
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