import { useLocation } from 'react-router-dom';
import { menuNavbar, socialIcon } from 'utils/constant';

const Sidebar = ({ toggleTab, setToggleTab }) => {
	const location = useLocation().pathname;

	return (
		<aside
			className={`w-full h-0 fixed top-0 left-0 ${
				!toggleTab ? 'overflow-hidden' : ''
			} xl:overflow-visible xl:w-[120px]`}
			style={{ zIndex: 1 }}
		>
			<div className="h-[100vh] flex justify-between items-center flex-col bg-gray-400">
				<div className="min-h-[30vh] w-full flex justify-center items-center flex-col bg-gray-900 xl:min-h-[30vh]">
					<a href="/" className="flex justify-center items-center flex-col">
						<p className="flex relative text-[132px] font-bold mr-3 leading-[132px]">
							<div className="text-primary-100 ">T</div>
							<div className="text-primary-50 absolute left-3 top-0">T</div>
						</p>
						<p className="text-[22px] font-bold mt-1">@TonTon</p>
					</a>
					<p className="text-gray-100 text-sl mt-2">Web Developer</p>
				</div>

				<nav>
					{menuNavbar.map((x, idx) => (
						<div key={x.id}>
							<a
								href={x.url}
								className={`${
									location === x.url ? 'text-primary-100' : 'text-gray-100'
								} hover:text-primary-100 block text-center leading-[48px] before:content-[''] before:w-full before:h-[1px] before:absolute before:right-0 before:bg-gray-300 ${
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
							<a
								href={y.url}
								target="_blank"
								className="text-gray-100 cursor-pointer hover:text-primary-100 text-1.5xl "
								rel="noreferrer"
							>
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
