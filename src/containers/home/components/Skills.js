import Dropdown from 'components/Dropdown';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { listWordAffect, SM, spanVariants, tags, wordAffect, XXL } from 'utils/constant';
import useWindowSize from 'utils/useWindowSize';

const h1Word = 'About myself';

const Skills = () => {
	const { width } = useWindowSize();

	useEffect(() => {
		var canvas = document.getElementById('myCanvas');
		if (width < SM) {
			canvas.height = 350;
			canvas.width = 350;
		} else if (width > XXL) {
			canvas.height = 700;
			canvas.width = 700;
		} else {
			canvas.height = 500;
			canvas.width = 500;
		}
	}, [width]);

	return (
		<section className="py-20 px-6 relative">
			<div className="flex justify-between items-center flex-col lg:flex-row">
				<div className="w-full lg:w-[50%]">
					<div className="px-4 sm:px-8 xl:pl-12">
						<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<h2>`}</p>
						<motion.h1 className="text-[55px] text-primary-100 font-bold tracking-[-1px] leading-[68px] lg:text-[64px] xl:text-[74px] break-words">
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
					<div className="px-4 sm:px-8 xl:pl-12">
						<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<p>`}</p>
						<p>
							I started out as a data analysis programmer, after six months of working I found a new direction for
							myself which is web programming, I spent about four months learning and developing programming skills and
							love it till now
						</p>
						<p className="my-4">
							For almost two years I had many opportunities to work in a vast spectrum of{' '}
							<a className="text-primary-100" href="/">
								web technologies
							</a>{' '}
							what let me gather a significant amount of various experience. Working for companies and individuals
							around the globe I met and learnt from amazing and ambitious people.
						</p>
						<p>I currently work remotely with a selected freelance client base being open for new opportunities.</p>
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
					<div id="myCanvasContainer">
						<canvas id="myCanvas" className="m-auto">
							<p>Anything in here will be replaced on browsers that support the canvas element</p>
						</canvas>
					</div>
					<div id="tags">
						<ul>
							{tags.map((x) => (
								<li key={x}>
									<a className="pointer-events-none cursor-default" onClick={(e) => e.preventDefault()}>
										{x}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<Dropdown />
		</section>
	);
};

export default Skills;
