import React from 'react';
import Logo from 'assets/icon/logo';
import { menuNavbar, socialIcon } from 'utils/constant';
const Sidebar = ({ toggleTab, setToggleTab }) => {
	return (
		<aside
			className={`w-full h-0 fixed top-0 left-0 ${
				!toggleTab ? 'overflow-hidden' : ''
			} xl:overflow-visible xl:w-[120px]`}
			style={{ zIndex: 1 }}
		>
			<div className="h-[100vh] flex justify-between items-center flex-col bg-gray-400">
				<div className="min-h-[30vh] w-full flex justify-center items-center flex-col bg-gray-900 xl:min-h-[26vh]">
					<a href="/" className="flex justify-center items-center flex-col">
						<Logo />
						<p className="text-2xl font-bold mt-1">Toan</p>
					</a>
					<p className="text-gray-100 text-sl mt-2">Web Developer</p>
				</div>

				<nav>
					{menuNavbar.map((x, idx) => (
						<div key={x.id}>
							<a
								href={x.url}
								className={`text-gray-100 hover:text-primary-100 block text-center leading-[48px] before:content-[''] before:w-full before:h-[1px] before:absolute before:right-0 before:bg-gray-300 ${
									menuNavbar.length - 1 === idx
										? `after:content-[''] after:w-full after:h-[1px] after:absolute after:right-0 after:mt-[52px] after:bg-gray-300`
										: ''
								}`}
							>
								{x.title}
							</a>
						</div>
					))}
				</nav>

				<ul className="flex items-center justify-center gap-4 pb-4">
					{socialIcon.map((y) => (
						<li key={y.id}>
							<a href={y.url} className="text-gray-100 cursor-pointer hover:text-primary-100 text-1.5xl ">
								{y.icon}
							</a>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
