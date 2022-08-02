import React, { useState } from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { FaArrowUp } from 'react-icons/fa';
import { listWordAffect, spanVariants, wordAffect } from 'utils/constant';
import { motion } from 'framer-motion';

const up = {
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

const MainLayout = ({ children }) => {
	const [toggleTab, setToggleTab] = useState(false);
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 250) {
			setVisible(true);
		} else if (scrolled <= 250) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
			/* you can also use 'auto' behaviour
			 in place of 'smooth' */
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<div>
			<Header toggleTab={toggleTab} setToggleTab={setToggleTab} />
			<Sidebar toggleTab={toggleTab} setToggleTab={setToggleTab} />
			<div className="m-0 xl:ml-[120px]">
				<div className="overflow-hidden">
					<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative sm:left-4">{`<html>`}</p>
					<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-3 sm:left-8">{`<body>`}</p>
				</div>
				{children}
				<div className="overflow-hidden">
					<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-3 sm:left-8">{`</body>`}</p>
					<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative sm:left-4">{`</html>`}</p>
				</div>
			</div>
			{visible && (
				<motion.div
					variants={listWordAffect}
					initial="hidden"
					animate="visible"
					style={{ zIndex: 999999 }}
					className="h-[42px] w-[42px] bg-transparent rounded-full fixed bottom-4 right-4 border-[1px] border-primary-100 hover:bg-primary-100 cursor-pointer group"
					onClick={scrollToTop}
				>
					<motion.i
						variants={up}
						className="flex justify-center mt-2 text-primary-100 text-2xl group-hover:text-background-50"
					>
						<FaArrowUp />
					</motion.i>
				</motion.div>
			)}
		</div>
	);
};

export default MainLayout;
