import React from 'react';

const Button = ({ text }) => {
	return (
		<a
			href="/"
			className="no-underline w-full max-w-[200px] text-primary-100 text-center h-[50px] block leading-[50px] tracking-[3px] relative group"
		>
			<div className="relative w-full h-full overflow-hidden transition-all duration-300 ease-in-out">
				<span className="absolute w-0 h-full left-[-7px] top-0 transition-all duration-300 ease-in-out bg-primary-100 skew-x-[-19deg] group-hover:w-[110%]"></span>
				<span className="w-full h-full absolute left-0 border-[1px] border-primary-100 box-border"></span>
				<span className="absolute w-full h-full top-0 left-0 group-hover:text-background-50">{text}</span>
			</div>
		</a>
	);
};

export default Button;
