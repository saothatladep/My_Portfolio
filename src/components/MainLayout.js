import React, { useState } from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

const MainLayout = ({ children }) => {
	const [toggleTab, setToggleTab] = useState(false);

	return (
		<div>
			<Header toggleTab={toggleTab} setToggleTab={setToggleTab} />
			<Sidebar toggleTab={toggleTab} setToggleTab={setToggleTab}/>
			{children}
		</div>
	);
};

export default MainLayout;
