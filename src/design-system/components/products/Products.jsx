import { useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import {
    StyledProductWrapper,
    Container
} from './styled'
import Slider from "react-slick";

import axios from 'axios'
import { API } from './../../api/api'

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


export default function Products() {

    const settings = {
        dots: false,
        className: 'SliderProduct',
        touchThreshold: 10,
        swipeToSlide: true,
        infinite: true,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    
                }
            }
        ],
        adaptiveHeight: true,
        pauseOnHover: true,
    }

    const [image, setImage] = useState()
    const [image2, setImage2] = useState()
    const [image3, setImage3] = useState()
    const [image4, setImage4] = useState()
    const [image5, setImage5] = useState()
    const [image6, setImage6] = useState()
    const [image7, setImage7] = useState()
    const [image8, setImage8] = useState()

    const getImages = () => {
        axios.get(API.urlProducts)
            .then(response => {

                setImage(response.data[0].image_link)
                setImage2(response.data[1].image_link)
                setImage3(response.data[2].image_link)
                setImage4(response.data[3].image_link)
                setImage5(response.data[4].image_link)
                setImage6(response.data[5].image_link)
                setImage7(response.data[6].image_link)
                setImage8(response.data[7].image_link)
            })
            .catch(error => console.log(error))
    }
    getImages()

    const [value, setValue] = useState(4);

    return (
        <>
            <StyledProductWrapper>
                <Slider {...settings}>
                    <div id='card'>
                        <Container>
                            <div id='inStock'>
                                <AiFillCheckCircle />
                                in stock
                            </div>
                        </Container>
                        <img src={image} height={200} width={200} />
                        <Box
                            sx={{
                                mt: 1,
                                display: 'flex',
                                gap: '1rem',
                            }}
                        >
                            <Rating name="read-only" value={value} readOnly />
                            <p>Reviews (4)</p>
                        </Box>
                        <Box
                            sx={{
                                mt: 1,
                            }}
                        >
                            <Typography variant="h5" component="" >EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</Typography>
                        </Box>
                        <Box
                            sx={{
                                mt: 1.2,
                                color: '#A2A6B0',
                                textDecoration: 'line-through',
                            }}
                        >
                            <Typography variant="h5" >499,90</Typography>
                        </Box>
                        <Box
                            sx={{
                                color: '#000',
                            }}
                        >
                            <Typography variant="h4" className='boldPrice'>499,90</Typography>
                        </Box>
                    </div>

                    <div id='card'>
                        <Container>
                            <div id='checkAvailability'>
                                <IoLogoWhatsapp />
                                check availability
                            </div>
                        </Container>
                        <img src={image2} height={200} width={200} />
                        <Box
                            sx={{
                                mt: 1,
                                display: 'flex',
                                gap: '1rem',
                            }}
                        >
                            <Rating name="read-only" value={value} readOnly />
                            <p>Reviews (4)</p>
                        </Box>
                        <Box
                            sx={{
                                mt: 1,
                            }}
                        >
                            <Typography variant="h5" component="" >EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</Typography>
                        </Box>
                        <Box
                            sx={{
                                mt: 1.2,
                                color: '#A2A6B0',
                                textDecoration: 'line-through',
                            }}
                        >
                            <Typography variant="h5" >499,90</Typography>
                        </Box>
                        <Box
                            sx={{
                                color: '#000',
                            }}
                        >
                            <Typography variant="h4" className='boldPrice'>499,90</Typography>
                        </Box>
                    </div>

                    <div id='card'>
                        <Container>
                            <div id='inStock'>
                                <AiFillCheckCircle />
                                in stock
                            </div>
                        </Container>
                        <img src={image3} height={200} width={200} />
                        <Box
                            sx={{
                                mt: 1,
                                display: 'flex',
                                gap: '1rem',
                            }}
                        >
                            <Rating name="read-only" value={value} readOnly />
                            <p>Reviews (4)</p>
                        </Box>
                        <Box
                            sx={{
                                mt: 1,
                            }}
                        >
                            <Typography variant="h5" component="" >EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</Typography>
                        </Box>
                        <Box
                            sx={{
                                mt: 1.2,
                                color: '#A2A6B0',
                                textDecoration: 'line-through',
                            }}
                        >
                            <Typography variant="h5" >499,90</Typography>
                        </Box>
                        <Box
                            sx={{
                                color: '#000',
                            }}
                        >
                            <Typography variant="h4" className='boldPrice'>499,90</Typography>
                        </Box>
                    </div>

                    <div id='card'>
                        <Container>
                            <div id='inStock'>
                                <AiFillCheckCircle />
                                in stock
                            </div>
                        </Container>
                        <img src={image4} height={200} width={200} />
                        <Box
                            sx={{
                                mt: 1,
                                display: 'flex',
                                gap: '1rem',
                            }}
                        >
                            <Rating name="read-only" value={value} readOnly />
                            <p>Reviews (4)</p>
                        </Box>
                        <Box
                            sx={{
                                mt: 1,
                            }}
                        >
                            <Typography variant="h5" component="" >EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</Typography>
                        </Box>
                        <Box
                            sx={{
                                mt: 1.2,
                                color: '#A2A6B0',
                                textDecoration: 'line-through',
                            }}
                        >
                            <Typography variant="h5" >499,90</Typography>
                        </Box>
                        <Box
                            sx={{
                                color: '#000',
                            }}
                        >
                            <Typography variant="h4" className='boldPrice'>499,90</Typography>
                        </Box>
                    </div>

                    <div id='card'>
                        <Container>
                            <div id='inStock'>
                                <AiFillCheckCircle />
                                in stock
                            </div>
                        </Container>
                        <img src={image5} height={200} width={200} />
                        <Box
                            sx={{
                                mt: 1,
                                display: 'flex',
                                gap: '1rem',
                            }}
                        >
                            <Rating name="read-only" value={value} readOnly />
                            <p>Reviews (4)</p>
                        </Box>
                        <Box
                            sx={{
                                mt: 1,
                            }}
                        >
                            <Typography variant="h5" component="" >EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</Typography>
                        </Box>
                        <Box
                            sx={{
                                mt: 1.2,
                                color: '#A2A6B0',
                                textDecoration: 'line-through',
                            }}
                        >
                            <Typography variant="h5" >499,90</Typography>
                        </Box>
                        <Box
                            sx={{
                                color: '#000',
                            }}
                        >
                            <Typography variant="h4" className='boldPrice'>499,90</Typography>
                        </Box>
                    </div>

                    <div id='card'>
                        <Container>
                            <div id='inStock'>
                                <AiFillCheckCircle />
                                in stock
                            </div>
                        </Container>
                        <img src={image6} height={200} width={200} />
                        <Box
                            sx={{
                                mt: 1,
                                display: 'flex',
                                gap: '1rem',
                            }}
                        >
                            <Rating name="read-only" value={value} readOnly />
                            <p>Reviews (4)</p>
                        </Box>
                        <Box
                            sx={{
                                mt: 1,
                            }}
                        >
                            <Typography variant="h5" component="" >EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</Typography>
                        </Box>
                        <Box
                            sx={{
                                mt: 1.2,
                                color: '#A2A6B0',
                                textDecoration: 'line-through',
                            }}
                        >
                            <Typography variant="h5" >499,90</Typography>
                        </Box>
                        <Box
                            sx={{
                                color: '#000',
                            }}
                        >
                            <Typography variant="h4" className='boldPrice'>499,90</Typography>
                        </Box>
                    </div>

                    <div id='card'>
                        <Container>
                            <div id='inStock'>
                                <AiFillCheckCircle />
                                in stock
                            </div>
                        </Container>
                        <img src={image7} height={200} width={200} />
                        <Box
                            sx={{
                                mt: 1,
                                display: 'flex',
                                gap: '1rem',
                            }}
                        >
                            <Rating name="read-only" value={value} readOnly />
                            <p>Reviews (4)</p>
                        </Box>
                        <Box
                            sx={{
                                mt: 1,
                            }}
                        >
                            <Typography variant="h5" component="" >EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</Typography>
                        </Box>
                        <Box
                            sx={{
                                mt: 1.2,
                                color: '#A2A6B0',
                                textDecoration: 'line-through',
                            }}
                        >
                            <Typography variant="h5" >499,90</Typography>
                        </Box>
                        <Box
                            sx={{
                                color: '#000',
                            }}
                        >
                            <Typography variant="h4" className='boldPrice'>499,90</Typography>
                        </Box>
                    </div>

                    <div id='card'>
                        <Container>
                            <div id='checkAvailability'>
                                <IoLogoWhatsapp />
                                check availability
                            </div>
                        </Container>
                        <img src={image8} height={200} width={200} />
                        <Box
                            sx={{
                                mt: 1,
                                display: 'flex',
                                gap: '1rem',
                            }}
                        >
                            <Rating name="read-only" value={value} readOnly />
                            <p>Reviews (4)</p>
                        </Box>
                        <Box
                            sx={{
                                mt: 1,
                            }}
                        >
                            <Typography variant="h5" component="" >EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</Typography>
                        </Box>
                        <Box
                            sx={{
                                mt: 1.2,
                                color: '#A2A6B0',
                                textDecoration: 'line-through',
                            }}
                        >
                            <Typography variant="h5" >499,90</Typography>
                        </Box>
                        <Box
                            sx={{
                                color: '#000',
                            }}
                        >
                            <Typography variant="h4" className='boldPrice'>499,90</Typography>
                        </Box>
                    </div>
                </Slider>
                
            </StyledProductWrapper>
        </>
    )
}