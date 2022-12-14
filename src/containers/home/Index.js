import MainLayout from 'components/MainLayout';
import Introduce from './components/Introduce';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';

const Index = () => {
	return (
		<MainLayout>
			<Introduce />
			<Work />
			<Skills />
			<Contact />
		</MainLayout>
	);
};

export default Index;
