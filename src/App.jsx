import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './design-system/components/header/Header'
import Footer from './design-system/components/footer/Footer'
import AboutUs from "./design-system/components/pages/About-Us/About_Us"
import FAQ from "./design-system/components/pages/FAQ/FAQ"

export default function App() {

	return (
		<>
			{/* Rotas */}

			<BrowserRouter>
				<Header />
					<Routes>
						<Route path="" element={<AboutUs />} />
						<Route path="/faq" element={<FAQ />} />
					</Routes>
				<Footer />
			</BrowserRouter>
			
		</>
	)
}


