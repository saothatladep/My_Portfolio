import Logo from 'assets/images/logo.png';
import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import { motion } from 'framer-motion';

const spanVariants = {
	visible: { y: 0, scaleY: 1 },
	hover: {
		y: [-1, -2, -2.8, 2, 1.2, 0],
		scaleY: [1, 1.3, 0.8, 1, 1.2, 1],
		color: '#08fdd8',
	},
};

const listWord1 = {
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

const listWord2 = {
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

const listWord3 = {
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

const word = {
	visible: {
		opacity: 1,
		y: [-1, -1.9, -2.7, 1],
		scaleY: [1, 1.3, 0.8, 1],
	},
	hidden: {
		opacity: 0,
	},
};

const containerUp = {
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

const containerDown = {
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

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

const Introduce = () => {
	return (
		<section className="min-h-[100vh] flex items-center p-4 xl:px-6 relative">
			<div>
				<div className="px-3 sm:px-8 xl:pl-12">
					<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<h1>`}</p>
					<motion.h1
						aria-label=" Hi,  I’m  oan,  web developer"
						className="text-[54px] font-bold tracking-[-4px] leading-[54px] sm:leading-[80px] lg:leading-[104px] sm:text-[80px] lg:text-[104px]"
					>
						<motion.div variants={listWord1} initial="hidden" animate="visible" className="flex">
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									H
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									i
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									,
								</motion.p>
							</motion.span>
						</motion.div>
						<motion.div variants={listWord2} initial="hidden" animate="visible" className="flex">
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									I
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									’
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover" className="mr-3 lg:mr-6">
									m
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<img
									src={Logo}
									alt="logo"
									className="inline h-[44px] w-[36px] sm:h-[64px] sm:w-[48px] lg:h-[80px] lg:w-[52px]"
								/>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									o
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									a
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									n
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									,
								</motion.p>
							</motion.span>
						</motion.div>

						<motion.div variants={listWord3} initial="hidden" animate="visible" className="flex">
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									w
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									e
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover" className="mr-3 lg:mr-6">
									b
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									d
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									e
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									v
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									e
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									l
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									o
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									p
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									e
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									r
								</motion.p>
							</motion.span>
							<span className="font-aurore tracking-[3px] text-gray-100 text-1xl ml-1 sm:ml-6 relative top-5 sm:top-7 lg:top-9">{`<h1/>`}</span>
						</motion.div>
					</motion.h1>
					<motion.div variants={containerUp} initial="hidden" animate="visible" className="mt-0">
						<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<p>`}</p>
						<motion.p variants={item} className="text-gray-500 tracking-[3px] text-xl sm:text-1xl relative">
							Front-End Developer / Back-End Developer
						</motion.p>
						<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<p/>`}</p>
					</motion.div>

					<br />
					<motion.div variants={containerDown} initial="hidden" animate="visible" className="mt-0">
						<motion.div variants={item}>
							<Button text="Contact me!" url="/contact" />
						</motion.div>
					</motion.div>
				</div>
			</div>
			<Dropdown />
		</section>
	);
};

export default Introduce;
