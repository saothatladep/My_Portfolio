import React from 'react';
import MainLayout from 'components/MainLayout';
import Button from 'components/Button';
import Logo from 'assets/images/logo.png';
import { CgChevronDoubleDown } from 'react-icons/cg';

const Index = () => {
	return (
		<MainLayout>
			<section className="min-h-[100vh] flex items-center px-6">
				<div className='pl-12'>
					<h1
						aria-label=" Hi,  I’m  oan,  web developer"
						className="text-[54px] font-bold tracking-[-4px] leading-[54px] sm:leading-[80px] lg:leading-[94px] sm:text-[80px] lg:text-[104px]"
					>
						<span>H</span>
						<span>i</span>
						<span>,</span>
						<br></br>
						<span>I</span>
						<span>’</span>
						<span>m</span> <img src={Logo} alt="logo" className="inline h-[78px] w-[52px]" />
						<span>o</span>
						<span>a</span>
						<span>n</span>
						<span>,</span>
						<br></br>
						<span>w</span>
						<span>e</span>
						<span>b</span> <span>d</span>
						<span>e</span>
						<span>v</span>
						<span>e</span>
						<span>l</span>
						<span>o</span>
						<span>p</span>
						<span>e</span>
						<span>r</span>
					</h1>
					<p className="mt-8 text-gray-500 tracking-[3px] text-1xl relative">
						Front-End Developer / Back-End Developer
					</p>
					<br />
					<Button text="Contact me!" />
				</div>
				<div className="absolute right-[-24px] bottom-[52px] flex items-center justify-center gap-x-1 rotate-90 text-sl">
					<span className='animate-scroll'>Scroll down</span>
					<span className="text-1xl rotate-[-90deg]">
						<CgChevronDoubleDown />
					</span>
				</div>
				<div className="absolute left-[-24px] xl:left-[90px] bottom-[52px] flex items-center justify-center gap-x-1 rotate-90 text-sl">
					<span className='animate-scroll' >Scroll down</span>
					<span className="text-1xl rotate-[-90deg]">
						<CgChevronDoubleDown />
					</span>
				</div>
			</section>
		</MainLayout>
	);
};

export default Index;
