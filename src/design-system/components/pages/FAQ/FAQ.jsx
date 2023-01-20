import { useState } from 'react'
import { CgMenuRound } from 'react-icons/cg'
import {
	StyledSection,
	StyledDivTitle,
	StyledDivSubTitle,
	StyledWrapperTitles,
	StyledMainContentWrapper,
	StyledFAQWrapper,
	StyledAsideMenu,
} from './styled'

import url from '../../../api/api'
import axios from 'axios'

export default function FAQ() {

	const asideItems = [
		<a href="#General">General</a>,
		<><a href="#Quotations">Quotations</a></>,
		<><a href="#PricesTaxes">Prices / Taxes</a></>,
		<><a href="#Payment">Terms of Payment</a></>,
		<><a href="#Ownership">Change of Ownership</a></>,
		<><a href="#Information">Information on the Products supplied</a></>,
		<><a href="#Delivery">Delivery</a></>,
	]

	const [text, setText] = useState('')

	const generateText = () => {

		axios.get(url)
			.then(response => {
				const data = response.data.slip.advice
				setText(data)
			})
			.catch(error => console.log(error))
	}

	generateText()

	const handleScreenSize = () => {
		const fullWidth = window.innerWidth

		if (fullWidth >= 1024) {
			return (
				<>
					<StyledFAQWrapper>
						<StyledSection>
							<StyledWrapperTitles>
								<StyledDivTitle>
									<h1>Shop Terms & Conditions</h1>
								</StyledDivTitle>

								<StyledDivSubTitle>
									<h2>GENERAL TERMS AND CONDITIONS FOR SALE OF PRODUCTS AND SERVICES</h2>
								</StyledDivSubTitle>
							</StyledWrapperTitles>

							<StyledMainContentWrapper>
								<h4>Definitions & Interpretation</h4>

								<p className='titles'>In the following Terms and Conditions of sale, unless the context requires otherwise</p>

								<p>(a) "Shop" means Shop Pty Ltd ABN 11 222 333 444;</p>
								<p>(b) "Customer" means the person or corporation placing an order for the purchase of goods or services from Shop;</p>
								<p>(c) "Products" means any goods, materials, equipment or services provided to the Customer by Shop;</p>
								<p>(d) if the Customer comprises more than one person, each of those person’s liability is joint and several;</p>
								<p>(e) references to a party or a person includes any form of entity and their respective successors, assigns and representatives;</p>
								<p>(f) for all periods and times specified in clauses 5 and 11, time is of the essence; and</p>
								<p>(g) all references to currency are references to Australian dollars.</p>

								<h4 className='titles' id='General'>General</h4>
								<div>{text}</div>

								<h4 className='titles' id='Quotations'>Quotations</h4>
								<div>{text}</div>

								<h4 className='titles' id='PricesTaxes'>Prices / Taxes</h4>
								<div>{text}</div>

								<h4 className='titles' id='Payment'>Terms of Payment</h4>
								<div>{text}</div>

								<h4 className='titles' id='Ownership'>Change of Ownership</h4>
								<div>{text}</div>

								<h4 className='titles' id='Information'>Information on the Products supplied</h4>
								<div>{text}</div>

								<h4 className='titles' id='Delivery'>Delivery</h4>
								<div className='lastText'>{text}</div>
							</StyledMainContentWrapper>
						</StyledSection>

						<StyledAsideMenu>
							<h4>Definitions & Interpretation</h4>

							{asideItems.map((asideItems, key) => {
								return (
									<>
										<div key={key} className='asideItems'>{asideItems}</div>
									</>
								)
							})}

						</StyledAsideMenu>
						
					</StyledFAQWrapper>
				</>
			)
		}
		else if (fullWidth < 1024) {
			return (
				<>
					<StyledFAQWrapper>
						<StyledSection>
							<StyledWrapperTitles>
								<StyledDivTitle>
									<h1>Shop Terms & Conditions</h1>
								</StyledDivTitle>

								<StyledDivSubTitle>
									<h2>GENERAL TERMS AND CONDITIONS FOR SALE OF PRODUCTS AND SERVICES</h2>
								</StyledDivSubTitle>
							</StyledWrapperTitles>

							<StyledMainContentWrapper>
								<h4>Definitions & Interpretation</h4>

								<p className='titles'>In the following Terms and Conditions of sale, unless the context requires otherwise</p>

								<p>(a) "Shop" means Shop Pty Ltd ABN 11 222 333 444;</p>
								<p>(b) "Customer" means the person or corporation placing an order for the purchase of goods or services from Shop;</p>
								<p>(c) "Products" means any goods, materials, equipment or services provided to the Customer by Shop;</p>
								<p>(d) if the Customer comprises more than one person, each of those person’s liability is joint and several;</p>
								<p>(e) references to a party or a person includes any form of entity and their respective successors, assigns and representatives;</p>
								<p>(f) for all periods and times specified in clauses 5 and 11, time is of the essence; and</p>
								<p>(g) all references to currency are references to Australian dollars.</p>

								<h4 className='titles' id='General'>General</h4>
								<div>{text}</div>

								<h4 className='titles' id='Quotations'>Quotations</h4>
								<div>{text}</div>

								<h4 className='titles' id='PricesTaxes'>Prices / Taxes</h4>
								<div>{text}</div>

								<h4 className='titles' id='Payment'>Terms of Payment</h4>
								<div>{text}</div>

								<h4 className='titles' id='Ownership'>Change of Ownership</h4>
								<div>{text}</div>

								<h4 className='titles' id='Information'>Information on the Products supplied</h4>
								<div>{text}</div>

								<h4 className='titles' id='Delivery'>Delivery</h4>
								<div className='lastText'>{text}</div>
							</StyledMainContentWrapper>
						</StyledSection>

						<CgMenuRound size={45} color={'#020202'} />
						
					</StyledFAQWrapper>
				</>
			)
		}
	}

	return (
		<>
			{handleScreenSize()}
		</>
	)
}