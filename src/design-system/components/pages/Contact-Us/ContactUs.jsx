import {
	StyledTitlesAndFormWrapper,
	StyledContactUsWrapper,
	StyledTitle,
	StyledDescription,
	StyledFormWrapper,
	StyledContactUsAsideMenuWrapper,
	StyledAdress,
} from './styled'
import {
	AiFillStar,
	AiOutlineWhatsApp,
	AiOutlineClockCircle,
	AiOutlineMail,
} from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'

export default function ContactUs() {

	const handleScreenSize = () => {
		const fullWidth = window.innerWidth

		if (fullWidth >= 1024) {
			return (
				<>
					<StyledContactUsWrapper>
						<StyledTitlesAndFormWrapper>
							<StyledTitle>
								<h1>Contact Us</h1>
							</StyledTitle>

							<StyledDescription>
								<p>
									We love hearing from you, our Shop customers.<br />
									Please contact us and we will make sure to get back to you as soon as we possibly can.
								</p>
							</StyledDescription>

							<StyledFormWrapper>
								<form method='POST' action='https://media4.giphy.com/media/RE5iREBNhI0Ok/giphy.gif'>
									<div className="wrapperInsideForm">
										<label className='labelException1'>
											<div>Your Name<AiFillStar size={10} color="red" /></div>
											<input type="text" placeholder='Your Name' />
										</label>

										<label className='labelException2'>
											<div>Your E-mail<AiFillStar size={10} color="red" /></div>
											<input type="email" placeholder='Your E-mail' />
										</label>


									</div>

									<label className='labelException3'>
										<div>Your Phone Number</div>
										<input type="number" placeholder='Your Phone' />
									</label>

									<label>
										<div>What's on your mind ?<AiFillStar size={10} color="red" /></div>
										<textarea placeholder='Jot us a note and we’ll get back to you as quickly as possible' maxLength={300}></textarea>
									</label>

									<div className='checkboxWrapper'>
										<input type="checkbox" />
										<label>Join our newsletter</label>
									</div>

									<button type="submit" className="Button">Enviar</button>
								</form>
							</StyledFormWrapper>
						</StyledTitlesAndFormWrapper>

						<StyledContactUsAsideMenuWrapper>
							<StyledAdress>
								<div className='wrapper'>
									<div className='field'>
										<div className="icon"><IoLocationOutline size={20} /></div>
										<div className='text'>
											<h4>Adress:</h4>
											<p>1234 Street Adress City Address, 1234</p>
										</div>
									</div>

									<div className='field'>
										<div className="icon"><AiOutlineWhatsApp size={20} /></div>
										<div className='text'>
											<h4>Phone:</h4>
											<p>(00)1234 5678</p>
										</div>
									</div>

									<div className='field'>
										<div className="icon"><AiOutlineClockCircle size={20} /></div>
										<div className='text'>
											<h4>We Are Open:</h4>
											<p>Monday - Thursday: 9:00 AM - 5:30 PM<br />
												Friday 9:00 AM - 6:00 PM<br />
												Saturday: 11:00 AM - 5:00 PM</p>
										</div>
									</div>

									<div className='field'>
										<div className="icon"><AiOutlineMail size={20} /></div>
										<div className='text'>
											<h4>E-mail:</h4>
											<p className='email'>shop@email.com</p>
										</div>
									</div>

								</div>
							</StyledAdress>
						</StyledContactUsAsideMenuWrapper>
					</StyledContactUsWrapper>
				</>
			)
		}
		else if (fullWidth < 1024) {
			return (
				<>
					<StyledContactUsWrapper>
						<StyledTitlesAndFormWrapper>
							<StyledTitle>
								<h1>Contact Us</h1>
							</StyledTitle>

							<StyledDescription>
								<p>
									We love hearing from you, our Shop customers.<br />
									Please contact us and we will make sure to get back to you as soon as we possibly can.
								</p>
							</StyledDescription>

							<StyledFormWrapper>
								<form method='POST' action='https://media4.giphy.com/media/RE5iREBNhI0Ok/giphy.gif'>
									<div className="wrapperInsideForm">
										<label className='labelException1'>
											<div>Your Name<AiFillStar size={10} color="red" /></div>
											<input type="text" placeholder='Your Name' />
										</label>

										<label className='labelException2'>
											<div>Your E-mail<AiFillStar size={10} color="red" /></div>
											<input type="email" placeholder='Your E-mail' />
										</label>

									</div>

									<label className='labelException3'>
										<div>Your Phone Number</div>
										<input type="number" placeholder='Your Phone' />
									</label>

									<label>
										<div>What's on your mind ?<AiFillStar size={10} color="red" /></div>
										<textarea placeholder='Jot us a note and we’ll get back to you as quickly as possible' maxLength={300}></textarea>
									</label>

									<div className='checkboxWrapper'>
										
										<label>Join our newsletter
											<input type="checkbox" />
										</label>
									</div>

									<button type="submit" className="Button">Enviar</button>
								</form>
							</StyledFormWrapper>
						</StyledTitlesAndFormWrapper>
					</StyledContactUsWrapper>
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