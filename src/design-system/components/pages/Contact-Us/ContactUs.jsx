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

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState, useEffect } from 'react';

const schema = yup.object({
	name: yup.string().min(2, "Um nome deve possuir no mínimo 2 letras.").max(40, "Um nome deve possuir no máximo 40 letras.").required("Nome é obrigatório."),
	email: yup.string().max(60, "Um email deve ter no máximo 60 caracteres.").email("Digite um email válido.").required("Email é obrigatório."),
	phoneNumber: yup.string(),
	textarea: yup.string().max(300).required("Uma menssagem é obrigatória."),
}).required();

export default function ContactUs() {

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema)
	});

	const onSubmit = (contactData) => {
		console.log(contactData)
	}

	const phoneValue = watch('phoneNumber')

	useEffect(() => {
		setValue('phoneNumber', maskPhoneNumber(phoneValue))
	}, [phoneValue])

	console.log(errors) //apagar depois.

	const [nameField, setNameField] = useState('');

	const handleChange = event => {
		const result = event.target.value.replace(/[^a-z]/gi, '');

		setNameField(result);
	};

	const maskPhoneNumber = (value) => {
		if (!value) return '';

		return value.replace(/[\D]/g, '')
			.replace(/(\d{2})(\d)/, '($1) $2')
			.replace(/(\d{5})(\d)/, '$1-$2')
			.replace(/(-\d{4})(\d+?)/, '$1')
	}

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
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className="wrapperInsideForm">
										<label className='labelException1'>
											<div>Your Name<AiFillStar size={10} color="red" /></div>
											<input {...register("name", { required: true })} type="text" placeholder='Your Name' value={nameField}
												onChange={handleChange} />
											{errors.name &&
												<span>{errors.name?.message}</span>
											}
										</label>

										<label className='labelException2'>
											<div>Your E-mail<AiFillStar size={10} color="red" /></div>
											<input {...register("email", { required: true })} type="email" placeholder='Your E-mail' />
											{errors.email &&
												<span>{errors.email?.message}</span>
											}
										</label>
									</div>

									<label className='labelException3'>
										<div>Your Phone Number</div>
										<input {...register("phoneNumber")} type="text" placeholder='(XX) XXXXX-XXXX' />
									</label>

									<label>
										<div>What's on your mind ?<AiFillStar size={10} color="red" /></div>
										<textarea {...register("textarea", { required: true })} placeholder='Jot us a note and we’ll get back to you as quickly as possible' maxLength={300}></textarea>
										{errors.textarea &&
											<span className='textareaMessage'>{errors.textarea?.message}</span>
										}
									</label>

									<div className='checkboxWrapper'>
										<input {...register("checkbox")} type="checkbox" />
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
							<form onSubmit={handleSubmit(onSubmit)}>
									<div className="wrapperInsideForm">
										<label className='labelException1'>
											<div>Your Name<AiFillStar size={10} color="red" /></div>
											<input {...register("name", { required: true })} type="text" placeholder='Your Name' value={nameField}
												onChange={handleChange} />
											{errors.name &&
												<span>{errors.name?.message}</span>
											}
										</label>

										<label className='labelException2'>
											<div>Your E-mail<AiFillStar size={10} color="red" /></div>
											<input {...register("email", { required: true })} type="email" placeholder='Your E-mail' />
											{errors.email &&
												<span>{errors.email?.message}</span>
											}
										</label>
									</div>

									<label className='labelException3'>
										<div>Your Phone Number</div>
										<input {...register("phoneNumber")} type="text" placeholder='(XX) XXXXX-XXXX' />
									</label>

									<label>
										<div>What's on your mind ?<AiFillStar size={10} color="red" /></div>
										<textarea {...register("textarea", { required: true })} placeholder='Jot us a note and we’ll get back to you as quickly as possible' maxLength={300}></textarea>
										{errors.textarea &&
											<span className='textareaMessage'>{errors.textarea?.message}</span>
										}
									</label>

									<div className='checkboxWrapper'>
										<label>Join our newsletter
											<input {...register("checkbox")} type="checkbox" />
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