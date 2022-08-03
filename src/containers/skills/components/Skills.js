import { motion } from 'framer-motion';
import { TagCloud } from 'react-tagcloud';
import { experiences, listWordAffect, listWordAffect2, spanVariants, wordAffect, work } from 'utils/constant';

const h1Word = 'Skills &';
const h1Word1 = 'Experience';

const data = [
	{ value: 'ReactJS', count: 25 },
	{ value: 'NodeJS', count: 18 },
	{ value: 'Express', count: 38 },
	{ value: 'Javascript', count: 30 },
	{ value: 'C#', count: 28 },
	{ value: 'Entity Framework', count: 25 },
	{ value: 'NextJS', count: 33 },
	{ value: 'SQL', count: 20 },
	{ value: 'Antd', count: 22 },
	{ value: 'Material UI', count: 7 },
	{ value: 'TailwindCSS', count: 25 },
	{ value: 'Restfull API', count: 15 },
	{ value: 'GIT', count: 17 },
	{ value: 'HTML', count: 27 },
	{ value: 'CSS', count: 30 },
	{ value: 'SASS', count: 15 },
	{ value: 'Highcharts', count: 30 },
	{ value: 'ES6', count: 11 },
	{ value: 'Redux', count: 11 },
];

const Skills = () => {
	return (
		<section className="min-h-[86vh] px-6 relative flex items-center">
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
							Since beginning my journey as a web developer nearly two years ago, I've done many project related to
							education, stock, insurance, financial... and collaborated with talented people to create web products for
							both business and consumer use.
						</p>
						<p className="my-4">
							I create successfully responsive websites that are fast, easy to use. The main area of expertise is
							front-end development, HTML, CSS, JS, building small and medium web apps, features, animation and coding
							interactive layouts.
						</p>

						<p>I also have back-end developer experience with Entity Framework (C#), Nodejs (JS)</p>

						<p className="my-4">
							Visit my{' '}
							<a
								className="text-primary-100"
								href="https://www.linkedin.com/in/toanpham1903/"
								target="_blank"
								rel="noreferrer"
							>
								Linkedln
							</a>{' '}
							profile for more details or just{' '}
							<a className="text-primary-100" href="/contact">
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
				<div className="w-full mt-10 lg:mt-0 lg:w-[50%]">
					<div className="w-full">
						<TagCloud minSize={16} maxSize={36} tags={data} shuffle />
					</div>
					<motion.div
						variants={listWordAffect}
						initial="hidden"
						animate="visible"
						className="w-full mt-8 flex justify-between flex-col md:flex-row"
					>
						{experiences.map((x) => (
							<motion.article
								variants={work}
								key={x.company}
								className="border-t-[2px] border-primary-50 w-full h-[220px] bg-gray-400 p-6 text-gray-200  mb-8 md:w-[48%] sm:h-[250px] xl:h-[280px]"
							>
								<div className="">
									<p className="text-1xl uppercase text-primary-100 tracking-[3px]">{x.role}</p>
									<div className="my-4 text-white-500 text-xl">
										<p>
											Company: <span>{x.company}</span>
										</p>
										<p className="italic">{`(${x.time})`}</p>
									</div>
									<div className="text-ellipsis line-clamp-4">{x.description}</div>
								</div>
							</motion.article>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
