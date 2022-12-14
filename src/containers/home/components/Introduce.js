import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import {
	containerDown,
	containerUp,
	item,
	listWord1,
	listWord2,
	listWord3,
	optionParticle,
	spanVariantsIntro,
	word,
} from 'utils/constant';

export const logo = {
	visible: {
		opacity: 1,
		x: 0,
		rotate: 0,
	},
	hidden: {
		rotate: 45,
		x: 100,
		opacity: 0,
	},
};

const Introduce = () => {
	const particlesInit = async (main) => {
		await loadFull(main);
	};

	return (
		<>
			<section className="min-h-[100vh] flex items-center p-4 xl:px-6 relative">
				<div className="absolute">
					<Particles className="w-full h-[100vh]" id="tsparticles" init={particlesInit} options={optionParticle} />
				</div>
				<div className="flex items-center">
					<div className="px-3 sm:px-8 xl:pl-12">
						<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<h1>`}</p>
						<motion.h1
							aria-label=" Hi,  I’m  oan,  web developer"
							className="text-[54px] font-bold tracking-[-4px] leading-[54px] sm:leading-[80px] lg:leading-[104px] sm:text-[80px] lg:text-[104px]"
						>
							<motion.div variants={listWord1} initial="hidden" animate="visible" className="flex">
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover">
										H
									</motion.p>
								</motion.span>
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover">
										i
									</motion.p>
								</motion.span>
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover">
										,
									</motion.p>
								</motion.span>
							</motion.div>
							<motion.div variants={listWord2} initial="hidden" animate="visible" className="flex">
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover">
										I
									</motion.p>
								</motion.span>
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover">
										’
									</motion.p>
								</motion.span>
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover" className="mr-3 lg:mr-6">
										m
									</motion.p>
								</motion.span>
								<motion.span
									variants={{
										visible: {
											opacity: 1,
											rotate: 0,
										},
										hidden: {
											rotate: -90,
											opacity: 0,
										},
									}}
								>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover" className="flex relative">
										<div className="text-primary-100 ">T</div>
										<div className="text-primary-50 absolute left-3">T</div>
									</motion.p>
								</motion.span>
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover">
										o
									</motion.p>
								</motion.span>
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover">
										a
									</motion.p>
								</motion.span>
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover">
										n
									</motion.p>
								</motion.span>
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover">
										,
									</motion.p>
								</motion.span>
							</motion.div>

							<motion.div variants={listWord3} initial="hidden" animate="visible" className="flex">
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover">
										w
									</motion.p>
								</motion.span>
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover">
										e
									</motion.p>
								</motion.span>
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover" className="mr-3 lg:mr-6">
										b
									</motion.p>
								</motion.span>
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover">
										d
									</motion.p>
								</motion.span>
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover">
										e
									</motion.p>
								</motion.span>
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover">
										v
									</motion.p>
								</motion.span>
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover">
										e
									</motion.p>
								</motion.span>
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover">
										l
									</motion.p>
								</motion.span>
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover">
										o
									</motion.p>
								</motion.span>
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover">
										p
									</motion.p>
								</motion.span>
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover">
										e
									</motion.p>
								</motion.span>
								<motion.span variants={word}>
									<motion.p variants={spanVariantsIntro} initial="visible" whileHover="hover">
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
					<motion.div variants={listWord2} initial="hidden" animate="visible">
						<motion.p className="relative text-[400px] font-bold ml-12 rotate-[30deg] hidden xl:block animate-logo">
							<motion.div variants={logo} className="text-primary-100 ">
								T
							</motion.div>
							<motion.div variants={logo} className="text-primary-50 absolute left-8 top-0">
								T
							</motion.div>
						</motion.p>
					</motion.div>
				</div>
				<Dropdown />
			</section>
		</>
	);
};

export default Introduce;
