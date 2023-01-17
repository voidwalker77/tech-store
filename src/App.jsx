import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './design-system/components/header/Header'
import Footer from './design-system/components/footer/Footer'
import Cards from './design-system/components/cards/Cards'
import Breadcrumbs from './design-system/components/breadcrumbs/Breadcrumbs'
import AboutUs from "./design-system/components/pages/About-Us/About_Us"
import FAQ from "./design-system/components/pages/FAQ/FAQ"

export default function App() {

	return (
		<>
			{/* Rotas */}

			<BrowserRouter>
				<Header />
				<Breadcrumbs />
				<Routes>
					<Route exact path="/" element={<AboutUs />} />
					<Route exact path="/faq" element={<FAQ />} />
				</Routes>
				<Cards />
				<Footer />
			</BrowserRouter>
			
		</>
	)
}


