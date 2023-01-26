import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './design-system/components/header/Header'
import Footer from './design-system/components/footer/Footer'
import Cards from './design-system/components/cards/Cards'
import Breadcrumbs from './design-system/components/breadcrumbs/Breadcrumbs'
import AboutUs from "./design-system/components/pages/About-Us/About_Us"
import FAQ from "./design-system/components/pages/FAQ/FAQ"
import ContactUs from "./design-system/components/pages/Contact-Us/ContactUs"
import Home from "./design-system/components/pages/Home/Home"

export default function App() {

	return (
		<>
			{/* Rotas */}

			<BrowserRouter>
				<Header />
				<Breadcrumbs />

				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/about-us" element={<AboutUs />} />
					<Route exact path="/faq" element={<FAQ />} />
					<Route exact path="/contact" element={<ContactUs />} />
				</Routes>
				
				<Cards />
				<Footer />
			</BrowserRouter>

		</>
	)
}


