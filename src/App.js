import HomePage from 'containers/home/Index';
import AboutPage from 'containers/about/Index';
import ContactPage from 'containers/contact/Index';
import SkillsPage from 'containers/skills/Index';
import WorkPage from 'containers/work/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/skills" element={<SkillsPage />} />
				<Route path="/work" element={<WorkPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
