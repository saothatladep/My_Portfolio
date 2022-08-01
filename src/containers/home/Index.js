import MainLayout from 'components/MainLayout';
import Introduce from './components/Introduce';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';

const Index = () => {
	return (
		<MainLayout>
			<div className='overflow-hidden'>
				<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative sm:left-4">{`<html>`}</p>
				<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-3 sm:left-8">{`<body>`}</p>
			</div>
			<Introduce />
			<Work />
			<Skills />
			<Contact />
			<div className='overflow-hidden'>
				<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-3 sm:left-8">{`</body>`}</p>
				<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative sm:left-4">{`</html>`}</p>
			</div>
		</MainLayout>
	);
};

export default Index;
