import { useState } from 'react'
import {
    StyledProductWrapper,
    Container,
    StyledMobileProductWrapper
} from './styled'

import { AiFillCheckCircle } from 'react-icons/ai'

import Image1 from '../../utils/theme/img/firstProducts/image1.svg'
import Image2 from '../../utils/theme/img/firstProducts/image2.svg'
import Image3 from '../../utils/theme/img/firstProducts/image3.svg'
import Image4 from '../../utils/theme/img/firstProducts/image4.svg'
import Image5 from '../../utils/theme/img/firstProducts/image5.svg'
import AsideBanner from '../../utils/theme/img/firstProducts/AsideBanner.svg'

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Slider from "react-slick";

export default function FirstProducts() {

    const settings = {
        dots: false,
        touchThreshold: 10,
        swipeToSlide: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
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
                breakpoint: 960,
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
        variableWidth: true,
        pauseOnHover: true,
    }

    const handleScreenSize = () => {
        const fullWidth = window.innerWidth

        if (fullWidth >= 1280) {
            return (
                <>
                    <StyledProductWrapper>
                        <div className='cardsWrapper'>
                            <div id='AsideBanner'>
                                <img src={AsideBanner} />
                                <h2>Custome Builds</h2>
                                <p>See all products</p>
                            </div>
                            <div className='insideCardsWrapper'>
                                    <div id='card'>
                                        <Container>
                                            <div id='inStock'>
                                                <AiFillCheckCircle />
                                                in stock
                                            </div>
                                        </Container>
                                        <img src={Image1} height={200} width={200} />
                                        <Box
                                            sx={{
                                                mt: 1,
                                                display: 'flex',
                                                gap: '1rem',
                                            }}
                                        >
                                            <Rating defaultValue={4.5} precision={0.5} readOnly />
                                            <p>Reviews (3688)</p>
                                        </Box>
                                        <Box
                                            sx={{
                                                mt: 1,
                                                display: 'flex',
                                                flexWrap: 'wrap',
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
                                            <Typography variant="h5" >3499,90</Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                color: '#000',
                                            }}
                                        >
                                            <Typography variant="h4" className='boldPrice'>2399,90</Typography>
                                        </Box>
                                    </div>

                                    <div id='card'>
                                        <Container>
                                            <div id='inStock'>
                                                <AiFillCheckCircle />
                                                in stock
                                            </div>
                                        </Container>
                                        <img src={Image2} height={200} width={200} />
                                        <Box
                                            sx={{
                                                mt: 1,
                                                display: 'flex',
                                                gap: '1rem',
                                            }}
                                        >
                                            <Rating defaultValue={5} precision={0.5} readOnly />
                                            <p>Reviews (1138)</p>
                                        </Box>
                                        <Box
                                            sx={{
                                                mt: 1,
                                                display: 'flex',
                                                flexWrap: 'wrap',
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
                                            <Typography variant="h5" >2560,90</Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                color: '#000',
                                            }}
                                        >
                                            <Typography variant="h4" className='boldPrice'>1230,90</Typography>
                                        </Box>
                                    </div>

                                    <div id='card'>
                                        <Container>
                                            <div id='inStock'>
                                                <AiFillCheckCircle />
                                                in stock
                                            </div>
                                        </Container>
                                        <img src={Image3} height={200} width={200} />
                                        <Box
                                            sx={{
                                                mt: 1,
                                                display: 'flex',
                                                gap: '1rem',
                                            }}
                                        >
                                            <Rating defaultValue={1.5} precision={0.5} readOnly />
                                            <p>Reviews (142)</p>
                                        </Box>
                                        <Box
                                            sx={{
                                                mt: 1,
                                                display: 'flex',
                                                flexWrap: 'wrap',
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
                                            <Typography variant="h5" >5699,90</Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                color: '#000',
                                            }}
                                        >
                                            <Typography variant="h4" className='boldPrice'>4900,90</Typography>
                                        </Box>
                                    </div>

                                    <div id='card'>
                                        <Container>
                                            <div id='inStock'>
                                                <AiFillCheckCircle />
                                                in stock
                                            </div>
                                        </Container>
                                        <img src={Image4} height={200} width={200} />
                                        <Box
                                            sx={{
                                                mt: 1,
                                                display: 'flex',
                                                gap: '1rem',
                                            }}
                                        >
                                            <Rating defaultValue={4} precision={0.5} readOnly />
                                            <p>Reviews (9)</p>
                                        </Box>
                                        <Box
                                            sx={{
                                                mt: 1,
                                                display: 'flex',
                                                flexWrap: 'wrap',
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
                                            <Typography variant="h5" >3199,90</Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                color: '#000',
                                            }}
                                        >
                                            <Typography variant="h4" className='boldPrice'>2799,90</Typography>
                                        </Box>
                                    </div>
                            </div>
                        </div>
                    </StyledProductWrapper>
                </>
            )
        } else if (fullWidth <= 1024) {
            return (
                <>
                    <StyledMobileProductWrapper>
                        <div className='cardsWrapper'>
                            <div id='AsideBanner'>
                                <h2>Custome Builds</h2>
                                <p>See all products</p>
                            </div>
                            <div className='insideCardsWrapper'>
                                <Slider {...settings}>
                                    <div id='card' style={{ width: 220 }}>
                                        <Container>
                                            <div id='inStock'>
                                                <AiFillCheckCircle />
                                                in stock
                                            </div>
                                        </Container>
                                        <img src={Image1} height={200} width={200} />
                                        <Box
                                            sx={{
                                                mt: 1,
                                                display: 'flex',
                                                gap: '1rem',
                                            }}
                                        >
                                            <Rating defaultValue={4.5} precision={0.5} readOnly />
                                            <p>Reviews (3688)</p>
                                        </Box>
                                        <Box
                                            sx={{
                                                mt: 1,
                                                display: 'flex',
                                                flexWrap: 'wrap',
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
                                            <Typography variant="h5" >3499,90</Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                color: '#000',
                                            }}
                                        >
                                            <Typography variant="h4" className='boldPrice'>2399,90</Typography>
                                        </Box>
                                    </div>

                                    <div id='card' style={{ width: 220 }}>
                                        <Container>
                                            <div id='inStock'>
                                                <AiFillCheckCircle />
                                                in stock
                                            </div>
                                        </Container>
                                        <img src={Image2} height={200} width={200} />
                                        <Box
                                            sx={{
                                                mt: 1,
                                                display: 'flex',
                                                gap: '1rem',
                                            }}
                                        >
                                            <Rating defaultValue={5} precision={0.5} readOnly />
                                            <p>Reviews (1138)</p>
                                        </Box>
                                        <Box
                                            sx={{
                                                mt: 1,
                                                display: 'flex',
                                                flexWrap: 'wrap',
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
                                            <Typography variant="h5" >2560,90</Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                color: '#000',
                                            }}
                                        >
                                            <Typography variant="h4" className='boldPrice'>1230,90</Typography>
                                        </Box>
                                    </div>

                                    <div id='card' style={{ width: 220 }}>
                                        <Container>
                                            <div id='inStock'>
                                                <AiFillCheckCircle />
                                                in stock
                                            </div>
                                        </Container>
                                        <img src={Image3} height={200} width={200} />
                                        <Box
                                            sx={{
                                                mt: 1,
                                                display: 'flex',
                                                gap: '1rem',
                                            }}
                                        >
                                            <Rating defaultValue={1.5} precision={0.5} readOnly />
                                            <p>Reviews (142)</p>
                                        </Box>
                                        <Box
                                            sx={{
                                                mt: 1,
                                                display: 'flex',
                                                flexWrap: 'wrap',
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
                                            <Typography variant="h5" >5699,90</Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                color: '#000',
                                            }}
                                        >
                                            <Typography variant="h4" className='boldPrice'>4900,90</Typography>
                                        </Box>
                                    </div>

                                    <div id='card' style={{ width: 220 }}>
                                        <Container>
                                            <div id='inStock'>
                                                <AiFillCheckCircle />
                                                in stock
                                            </div>
                                        </Container>
                                        <img src={Image4} height={200} width={200} />
                                        <Box
                                            sx={{
                                                mt: 1,
                                                display: 'flex',
                                                gap: '1rem',
                                            }}
                                        >
                                            <Rating defaultValue={4} precision={0.5} readOnly />
                                            <p>Reviews (9)</p>
                                        </Box>
                                        <Box
                                            sx={{
                                                mt: 1,
                                                display: 'flex',
                                                flexWrap: 'wrap',
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
                                            <Typography variant="h5" >3199,90</Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                color: '#000',
                                            }}
                                        >
                                            <Typography variant="h4" className='boldPrice'>2799,90</Typography>
                                        </Box>
                                    </div>

                                    <div id='card' style={{ width: 220 }}>
                                        <Container>
                                            <div id='inStock'>
                                                <AiFillCheckCircle />
                                                in stock
                                            </div>
                                        </Container>
                                        <img src={Image5} height={200} width={200} />
                                        <Box
                                            sx={{
                                                mt: 1,
                                                display: 'flex',
                                                gap: '1rem',
                                            }}
                                        >
                                            <Rating defaultValue={5} precision={0.5} readOnly />
                                            <p>Reviews (59)</p>
                                        </Box>
                                        <Box
                                            sx={{
                                                mt: 1,
                                                display: 'flex',
                                                flexWrap: 'wrap',
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
                                            <Typography variant="h5" >4199,90</Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                color: '#000',
                                            }}
                                        >
                                            <Typography variant="h4" className='boldPrice'>3299,90</Typography>
                                        </Box>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </StyledMobileProductWrapper>
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