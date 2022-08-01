import React from 'react';
import { CgChevronDoubleDown } from 'react-icons/cg';

const Dropdown = () => {
	return (
		<div>
			<div className="absolute right-[-24px] bottom-[52px] flex items-center justify-center gap-x-1 rotate-90 text-sl">
				<span className="animate-scroll">Scroll down</span>
				<span className="text-1xl rotate-[-90deg]">
					<CgChevronDoubleDown />
				</span>
			</div>
			<div className="absolute left-[-24px] bottom-[52px] flex items-center justify-center gap-x-1 rotate-90 text-sl">
				<span className="animate-scroll">Scroll down</span>
				<span className="text-1xl rotate-[-90deg]">
					<CgChevronDoubleDown />
				</span>
			</div>
		</div>
	);
};

export default Dropdown;
