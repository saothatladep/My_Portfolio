import { motion } from 'framer-motion';
import React from 'react';
import { listWordAffect, listWordAffect2, spanVariants, tags, wordAffect, XXL } from 'utils/constant';

const h1Word = 'Skills &';
const h1Word1 = 'Experience';

const Skills = () => {
	return (
		<section className="min-h-[86vh] px-6 relative">
			<div className="flex justify-between items-center flex-col lg:flex-row">
				<div className="w-full lg:w-[50%]">
					<div className="px-4 sm:px-8 xl:pl-12">
						<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<h2>`}</p>
						<motion.h1 className="text-[55px] text-primary-100 font-bold tracking-[-1px] leading-[68px] lg:text-[64px] xl:text-[74px] break-all">
							<motion.p variants={listWordAffect} initial="hidden" animate="visible" className="flex">
								{h1Word.split('').map((x, idx) => {
									return x === '_' ? (
										<br />
									) : (
										<motion.span variants={wordAffect} key={idx}>
											<motion.p
												variants={spanVariants}
												initial="visible"
												whileHover="hover"
												className={`${x === ' ' ? 'mr-2 lg:mr-4' : ''}`}
											>
												{x}
											</motion.p>
										</motion.span>
									);
								})}
							</motion.p>
						</motion.h1>
						<motion.h1 className="text-[55px] text-primary-100 font-bold tracking-[-1px] leading-[68px] lg:text-[64px] xl:text-[74px] break-all">
							<motion.p variants={listWordAffect2} initial="hidden" animate="visible" className="flex">
								{h1Word1.split('').map((x, idx) => {
									return x === '_' ? (
										<br />
									) : (
										<motion.span variants={wordAffect} key={idx}>
											<motion.p
												variants={spanVariants}
												initial="visible"
												whileHover="hover"
												className={`${x === ' ' ? 'mr-2 lg:mr-4' : ''}`}
											>
												{x}
											</motion.p>
										</motion.span>
									);
								})}
							</motion.p>
						</motion.h1>
						<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<h2>`}</p>
					</div>
					<div className="px-4 sm:px-8 xl:pl-12">
						<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<p>`}</p>
						<p>
							Since beginning my journey as a freelance developer nearly 10 years ago, I've done remote work for
							agencies, consulted for startups, and collaborated with talented people to create web products for both
							business and consumer use.
						</p>
						<p className="my-4">
							I create successful responsive websites that are fast, easy to use, and built with best practices. The
							main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps,
							custom plugins, features, animations, and coding interactive layouts.
						</p>

						<p className="my-4">
							I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento,
							Keystone.js and others) .
						</p>

						<p className="mt-4">
							Visit my{' '}
							<a className="text-primary-100" href="/">
								Linkedln
							</a>{' '}
							profile for detail or just{' '}
							<a className="text-primary-100" href="/">
								contact
							</a>{' '}
							me
						</p>
						<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<p>`}</p>
					</div>
					<div
						style={{ zIndex: -999 }}
						className="leading-0 xl:text-[28rem] lg:text-[24rem] sm:text-[18rem] text-[12rem] tracking-[-10px] text-gray-600 font-bold absolute left-0 xl:top-[10px] lg:top-[30px] sm:top-[180px] top-[396px] "
					>
						Skills
					</div>
				</div>
				<div className="w-full mt-10 lg:mt-0 lg:w-[50%]">asdfaswdf</div>
			</div>
		</section>
	);
};

export default Skills;
