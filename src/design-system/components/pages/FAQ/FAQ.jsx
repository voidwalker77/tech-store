import { useState } from 'react'
import {
	StyledSection,
	StyledDivTitle,
	StyledDivSubTitle,
	StyledWrapperTitles,
	StyledMainContentWrapper,
} from './styled'

import url from '../../../api/api'
import axios from 'axios'

export default function FAQ() {

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

	return (
		<>
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

					<h4 className='titles'>General</h4>
					<div>{text}</div>

					<h4 className='titles'>Quotations</h4>
					<div>{text}</div>
					
					<h4 className='titles'>Prices / Taxes</h4>
					<div>{text}</div>
					
					<h4 className='titles'>Terms of Payment</h4>
					<div>{text}</div>

					<h4 className='titles'>Change of Ownership</h4>
					<div>{text}</div>

					<h4 className='titles'>Information on the Products supplied</h4>
					<div>{text}</div>

					<h4 className='titles'>Delivery</h4>
					<div>{text}</div>
				</StyledMainContentWrapper>
			</StyledSection>
		</>
	)
}