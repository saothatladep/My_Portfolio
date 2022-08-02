import React, { useState, useEffect } from 'react';
import { RiSoundcloudFill } from 'react-icons/ri';
import { FaBars, FaTimes } from 'react-icons/fa';
import Audio from 'assets/audio/audio.mp3';
const Header = ({ toggleTab, setToggleTab }) => {
	const [statusSound, setStatusSound] = useState(false);

	useEffect(() => {
		const audio = document.getElementById('myAudio');
		if (statusSound) {
			audio.play();
		} else {
			audio.pause();
		}
	}, [statusSound]);

	return (
		<header
			className="w-full h-[10vh] m-auto flex items-center justify-between fixed bg-transparent px-4 xl:justify-end "
			style={{ zIndex: 2 }}
		>
			<div className="rounded-1xl flex items-center p-2 bg-background-50/[0.8]">
				<audio id="myAudio">
					<source src={Audio} />
				</audio>
				<button className={`text-2xl ${statusSound ? 'text-primary-100' : 'text-primary-50'}`}>
					<RiSoundcloudFill />
				</button>
				<span className="mx-2">Sound</span>
				<span
					className={`uppercase cursor-pointer ${statusSound ? 'text-primary-100' : 'text-primary-50'}`}
					onClick={() => setStatusSound(!statusSound)}
				>
					{statusSound ? 'on' : 'off'}
				</span>
			</div>
			<div className="xl:hidden">
				<button onClick={() => setToggleTab(!toggleTab)} className="text-4xl p-2 bg-background-50/[0.8] rounded-1xl">
					{!toggleTab ? <FaBars /> : <FaTimes />}
				</button>
			</div>
		</header>
	);
};

export default Header;
