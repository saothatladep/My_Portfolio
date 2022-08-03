import Button from 'components/Button';
import { motion } from 'framer-motion';
import { listWordAffect, spanVariants, wordAffect, work } from 'utils/constant';

const h1Word = 'My Portfolio';

const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const workContainer = {
// 	visible: {
// 		opacity: 1,
// 		transition: {
// 			when: 'beforeChildren',
// 			staggerChildren: 0.1,
// 		},
// 	},
// 	hidden: {
// 		opacity: 0,
// 		transition: {
// 			when: 'afterChildren',
// 		},
// 	},
// };

const Work = () => {
	return (
		<>
			<section className="py-20 px-6 relative">
				<div className="px-4 sm:px-8 xl:pl-12">
					<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<h2>`}</p>
					<motion.h1 className="text-[55px] text-primary-100 font-bold tracking-[-1px] leading-[68px] lg:text-[64px] xl:text-[74px] ">
						<motion.div variants={listWordAffect} initial="hidden" animate="visible" className="flex">
							{h1Word.split('').map((x, idx) => (
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
							))}
						</motion.div>
					</motion.h1>
					<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<h2>`}</p>
				</div>
				<div className="flex flex-col xl:flex-row">
					<div className="px-4 sm:px-8 xl:pl-12 w-full xl:w-[50%]">
						<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<p>`}</p>
						<p className="leading-6">
							A small gallery of recent projects chosen by me. I've done them all by myself to improve my programming
							skills and also learn many new technologies. It's only a drop in the ocean compared to the entire list.
							<br />
							Interested to see some more? Visit{' '}
							<a className="text-primary-100" href="/work">
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

			<div className="my-4 mx-auto w-[94%]">
				<motion.div
					variants={listWordAffect}
					initial="hidden"
					animate="visible"
					className="flex justify-between items-center flex-col sm:flex-wrap sm:flex-row"
				>
					{fakeData.map((x) => (
						<motion.article
							variants={work}
							key={x}
							className="border-t-[2px] border-primary-100 w-full h-[220px] bg-background-50 p-6 text-gray-200 shadow-box mb-8 sm:w-[48%] xl:w-[32%] sm:h-[250px] xl:h-[280px]"
						>
							<div className="">
								<p className="text-base uppercase text-primary-100 tracking-[3px]">Web Developer</p>
								<div>
									<h5>
										<a className="text-[26px] text-white-500 block my-4 mx-0 hover:text-primary-100" href="/">
											E-commerce website
										</a>
									</h5>
								</div>
								<div className="text-ellipsis line-clamp-3">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
									industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
									scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
									into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
									release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
									software like Aldus PageMaker including versions of Lorem Ipsum.
								</div>
							</div>
						</motion.article>
					))}
				</motion.div>
			</div>
			<p className="font-aurore tracking-[3px] w-[100px] text-gray-100 text-1xl relative left-3 sm:left-8 overflow-hidden">{`</section>`}</p>
		</>
	);
};

export default Work;
