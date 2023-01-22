import {
	StyledContactUsWrapper,
	StyledTitle,
	StyledDescription,
	StyledFormWrapper,
} from './styled'
import { AiFillStar } from 'react-icons/ai'


export default function ContactUs() {

	return (
		<StyledContactUsWrapper>
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
				<form>
					<div className="Separator">
						<label>
							<div>Your Name<AiFillStar size={10} color="red" /></div>
							<input placeholder='Your Name'/>
						</label>
						<label>
							<div>Your E-mail<AiFillStar size={10} color="red" /></div>
							<input placeholder='Your E-mail'/>
						</label>
					</div>

					<label>
						<div>Your Phone Number</div>
						<input />
					</label>

					<label>
						<div>What's on your mind?<AiFillStar size={10} color="red" /></div>
						<textarea placeholder='Jot us a note and we’ll get back to you as quickly as possible'></textarea>
					</label>
				</form>
			</StyledFormWrapper>
		</StyledContactUsWrapper>
	)
}