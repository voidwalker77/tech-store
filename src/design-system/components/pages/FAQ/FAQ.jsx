import { useState } from 'react'
import { CgMenuRound } from 'react-icons/cg'
import {
	StyledSection,
	StyledDivTitle,
	StyledDivSubTitle,
	StyledWrapperTitles,
	StyledMainContentWrapper,
	StyledFAQWrapper,
} from './styled'
import AsideMenu from '../../aside-menu/AsideMenu'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

import {API} from '../../../api/api'
import axios from 'axios'

export default function FAQ() {

	

	const [text, setText] = useState('')

	const generateText = () => {

		axios.get(API.url)
			.then(response => {
				const data = response.data.slip.advice
				setText(data)
			})
			.catch(error => console.log(error))
	}

	generateText()

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);


	const style = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: "100%",
		height: '100%',
		bgcolor: 'background.paper',
		boxShadow: 24,
		p: 4,
	};

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

						<AsideMenu />

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

						<CgMenuRound size={45} color={'#020202'} onClick={handleOpen} />
						<Modal
							open={open}
							onClose={handleClose}
							aria-labelledby="modal-modal-title"
							aria-describedby="modal-modal-description"
							closeAfterTransition
							BackdropComponent={Backdrop}
							BackdropProps={{
								timeout: 500,
							}}
						>
							<Fade in={open}>
								<Box sx={style} >
									
									<Typography id="modal-modal-title" variant="h6" component="h6" sx={{
										lineHeight: "3rem",
										textAlign: "center",
										fontSize: "1.7rem"
									}}>
										<AsideMenu />
									</Typography>

									<Button variant="outlined" color="error" onClick={handleClose} sx={{
										fontSize: 16,
										height: "8%",
										width: "60%",
										marginTop: "3rem",
										color: 'success',
									}}>
										CLOSE
									</Button>
								</Box>
							</Fade>
						</Modal>

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