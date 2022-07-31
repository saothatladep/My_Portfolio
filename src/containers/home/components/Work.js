import React from 'react';
import Button from 'components/Button';
import { motion } from 'framer-motion';
import HoverImage from 'assets/images/circle.png';
import Image1 from 'assets/images/3.jpg';

const spanVariants = {
	visible: { y: 0, scaleY: 1 },
	hover: {
		y: [-1, -2, -2.8, 2, 1.2, 0],
		scaleY: [1, 1.3, 0.8, 1, 1.2, 1],
	},
};

const listWord = {
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

const Work = () => {
	return (
		<>
			<section className="py-20 px-6 relative">
				<div className="px-4 sm:px-8 xl:pl-12">
					<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<h2>`}</p>
					<motion.h1 className="text-[55px] text-primary-100 font-bold tracking-[-1px] leading-[68px] lg:text-[64px] xl:text-[74px] ">
						<motion.div variants={listWord} initial="hidden" animate="visible" className="flex">
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									M
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover" className="mr-2 lg:mr-4">
									y
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									P
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									o
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									r
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									t
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									f
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									o
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									l
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									i
								</motion.p>
							</motion.span>
							<motion.span variants={word}>
								<motion.p variants={spanVariants} initial="visible" whileHover="hover">
									o
								</motion.p>
							</motion.span>
						</motion.div>
					</motion.h1>
					<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<h2>`}</p>
				</div>
				<div className="flex flex-col xl:flex-row">
					<div className="px-4 sm:px-8 xl:pl-12 w-full xl:w-[50%]">
						<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<p>`}</p>
						<p className="leading-6">
							A small gallery of recent projects chosen by me. I've done them all together with amazing people from
							companies around the globe. It's only a drop in the ocean compared to the entire list.
							<br />
							Interested to see some more? Visit{' '}
							<a className="text-primary-100" href="/">
								my work
							</a>{' '}
							page
						</p>
						<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<p>`}</p>
					</div>
					<div className="w-[50%] flex my-4 ml-4 xl:m-0 xl:justify-end xl:items-end">
						<Button text="See more!" />
					</div>
				</div>
				<div
					style={{ zIndex: -999 }}
					className="leading-0 xl:text-[28rem] lg:text-[24rem] sm:text-[18rem] text-[12rem] tracking-[-10px] text-gray-600 font-bold absolute right-0 xl:top-[-64px] lg:top-[30px] sm:top-[180px] top-[296px] "
				>
					Work
				</div>
			</section>
			<p className="font-aurore tracking-[3px] w-[100px] text-gray-100 text-1xl relative left-3 sm:left-8 overflow-hidden">{`<section>`}</p>

			<div className="bg-gray-900/10 my-4">
				<ul className="flex flex-wrap list-work">
					{[...Array(10)]
						.map((x, idx) => 0)
						.map((x, idx) => (
							<li
								className="w-[33.3%] h-[10rem] sm:w-[25%] sm:h-[12rem] lg:w-[20%] lg:h-[14rem] xl:h-[18rem] overflow-hidden relative list-item cursor-pointer group"
								key={idx}
							>
								<div className="absolute top-0 left-0 bottom-0 right-0 group-hover:scale-[1.14] item">
									<img className="w-full h-full object-cover" src={Image1} alt="thumbnail" />
									<div></div>
									<img
										alt="img"
										src={HoverImage}
										className={`block absolute top-0 left-0 w-full h-full opacity-0 transition-all duration-150 ease-out scale-[0.2] group-hover:scale-[0.3] group-hover:opacity-100`}
									></img>
								</div>
							</li>
						))}
				</ul>
			</div>
            <p className="font-aurore tracking-[3px] w-[100px] text-gray-100 text-1xl relative left-3 sm:left-8 overflow-hidden">{`</section>`}</p>

		</>
	);
};

export default Work;
