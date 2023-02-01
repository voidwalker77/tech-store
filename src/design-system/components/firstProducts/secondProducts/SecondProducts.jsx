import { useState } from 'react'
import {
    StyledProductWrapper,
    Container,
    StyledMobileProductWrapper
} from './styled'

import { AiFillCheckCircle } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'

import Image1 from '../../../utils/theme/img/firstProducts/secondProducts/image1.svg'
import Image2 from '../../../utils/theme/img/firstProducts/secondProducts/image2.svg'
import Image3 from '../../../utils/theme/img/firstProducts/secondProducts/image3.svg'
import Image4 from '../../../utils/theme/img/firstProducts/secondProducts/image4.svg'
import Image5 from '../../../utils/theme/img/firstProducts/secondProducts/image5.svg'
import AsideBanner from '../../../utils/theme/img/firstProducts/secondProducts/AsideBanner.svg'

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Slider from "react-slick";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ marginBlock: 1, }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function SecondProducts() {

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
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,

                }
            }
        ],
        adaptiveHeight: true,
        variableWidth: true,
        pauseOnHover: true,
    }

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleScreenSize = () => {
        const fullWidth = window.innerWidth

        if (fullWidth >= 1280) {
            return (
                <>
                    <StyledProductWrapper>
                        <Box sx={{ width: '100%', }}>
                            <Box >
                                <Tabs value={value} onChange={handleChange} >
                                    <Tab label="MSI GS Series" {...a11yProps(0)} sx={{ fontSize: 15, color: 'grey', p: 1, fontWeight: 600 }} />
                                    <Tab label="MSI GT Series" {...a11yProps(1)} sx={{ fontSize: 15, color: 'grey', p: 1, fontWeight: 600 }} />
                                    <Tab label="MSI GL Series" {...a11yProps(2)} sx={{ fontSize: 15, color: 'grey', p: 1, fontWeight: 600 }} />
                                    <Tab label="MSI GE Series" {...a11yProps(3)} sx={{ fontSize: 15, color: 'grey', p: 1, fontWeight: 600 }} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0} sx={{}}>
                                <div className='cardsWrapper'>
                                    <div id='AsideBanner'>
                                        <img src={AsideBanner} />
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
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <div className='cardsWrapper'>
                                    <div id='AsideBanner'>
                                        <img src={AsideBanner} />
                                    </div>
                                    <div className='insideCardsWrapper'>
                                        <div id='card'>
                                            <Container>
                                                <div id='checkAvailability'>
                                                    <IoLogoWhatsapp />
                                                    check availability
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
                                                <Rating defaultValue={2.5} precision={0.5} readOnly />
                                                <p>Reviews (3246)</p>
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
                                                <Typography variant="h4" className='boldPrice'>2699,90</Typography>
                                            </Box>
                                        </div>

                                        <div id='card'>
                                            <Container>
                                                <div id='checkAvailability'>
                                                    <IoLogoWhatsapp />
                                                    check availability
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
                                                <Rating defaultValue={1.5} precision={0.5} readOnly />
                                                <p>Reviews (9178)</p>
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
                                                <Typography variant="h4" className='boldPrice'>2230,90</Typography>
                                            </Box>
                                        </div>

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
                                                <Rating defaultValue={3.5} precision={0.5} readOnly />
                                                <p>Reviews (387)</p>
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
                                                <Typography variant="h4" className='boldPrice'>5100,90</Typography>
                                            </Box>
                                        </div>

                                        <div id='card'>
                                            <Container>
                                                <div id='checkAvailability'>
                                                    <IoLogoWhatsapp />
                                                    check availability
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
                                                <Rating defaultValue={2} precision={0.5} readOnly />
                                                <p>Reviews (967)</p>
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
                                                <Typography variant="h4" className='boldPrice'>1799,90</Typography>
                                            </Box>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <div className='cardsWrapper'>
                                    <div id='AsideBanner'>
                                        <img src={AsideBanner} />
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
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <div className='cardsWrapper'>
                                    <div id='AsideBanner'>
                                        <img src={AsideBanner} />
                                    </div>
                                    <div className='insideCardsWrapper'>
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
                                                <Rating defaultValue={2.5} precision={0.5} readOnly />
                                                <p>Reviews (3246)</p>
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
                                                <Typography variant="h4" className='boldPrice'>2699,90</Typography>
                                            </Box>
                                        </div>

                                        <div id='card'>
                                            <Container>
                                                <div id='checkAvailability'>
                                                    <IoLogoWhatsapp />
                                                    check availability
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
                                                <Rating defaultValue={1.5} precision={0.5} readOnly />
                                                <p>Reviews (9178)</p>
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
                                                <Typography variant="h4" className='boldPrice'>2230,90</Typography>
                                            </Box>
                                        </div>

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
                                                <Rating defaultValue={3.5} precision={0.5} readOnly />
                                                <p>Reviews (387)</p>
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
                                                <Typography variant="h4" className='boldPrice'>5100,90</Typography>
                                            </Box>
                                        </div>

                                        <div id='card'>
                                            <Container>
                                                <div id='checkAvailability'>
                                                    <IoLogoWhatsapp />
                                                    check availability
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
                                                <Rating defaultValue={2} precision={0.5} readOnly />
                                                <p>Reviews (967)</p>
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
                                                <Typography variant="h4" className='boldPrice'>1799,90</Typography>
                                            </Box>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </Box>
                    </StyledProductWrapper>
                </>
            )
        } else if (fullWidth <= 1024) {
            return (
                <>
                    <StyledMobileProductWrapper>
                        <Box sx={{ width: '100%' }}>
                            <Box >
                                <Tabs value={value} onChange={handleChange} 
                                    variant="scrollable"
                                    scrollButtons="auto"
                                 
                                >
                                    <Tab label="MSI GS Series" {...a11yProps(0)} sx={{ fontSize: 15, color: 'grey', p: 1, fontWeight: 600 }} />
                                    <Tab label="MSI GT Series" {...a11yProps(1)} sx={{ fontSize: 15, color: 'grey', p: 1, fontWeight: 600 }} />
                                    <Tab label="MSI GL Series" {...a11yProps(2)} sx={{ fontSize: 15, color: 'grey', p: 1, fontWeight: 600 }} />
                                    <Tab label="MSI GE Series" {...a11yProps(3)} sx={{ fontSize: 15, color: 'grey', p: 1, fontWeight: 600 }} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0} >
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
                                        </Slider>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <div className='cardsWrapper'>
                                    <div id='AsideBanner'>
                                        <h2>Custome Builds</h2>
                                        <p>See all products</p>
                                    </div>
                                    <div className='insideCardsWrapper'>
                                        <Slider {...settings}>
                                            <div id='card' style={{ width: 220 }}>
                                                <Container>
                                                    <div id='checkAvailability'>
                                                        <IoLogoWhatsapp />
                                                        check availability
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
                                                    <Rating defaultValue={2.5} precision={0.5} readOnly />
                                                    <p>Reviews (3246)</p>
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
                                                    <Typography variant="h4" className='boldPrice'>2699,90</Typography>
                                                </Box>
                                            </div>

                                            <div id='card' style={{ width: 220 }}>
                                                <Container>
                                                    <div id='checkAvailability'>
                                                        <IoLogoWhatsapp />
                                                        check availability
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
                                                    <Rating defaultValue={1.5} precision={0.5} readOnly />
                                                    <p>Reviews (9178)</p>
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
                                                    <Typography variant="h4" className='boldPrice'>2230,90</Typography>
                                                </Box>
                                            </div>

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
                                                    <Rating defaultValue={3.5} precision={0.5} readOnly />
                                                    <p>Reviews (387)</p>
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
                                                    <Typography variant="h4" className='boldPrice'>5100,90</Typography>
                                                </Box>
                                            </div>

                                            <div id='card' style={{ width: 220 }}>
                                                <Container>
                                                    <div id='checkAvailability'>
                                                        <IoLogoWhatsapp />
                                                        check availability
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
                                                    <Rating defaultValue={2} precision={0.5} readOnly />
                                                    <p>Reviews (967)</p>
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
                                                    <Typography variant="h4" className='boldPrice'>1799,90</Typography>
                                                </Box>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
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
                                        </Slider>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={3}>
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
                                                <img src={Image3} height={200} width={200} />
                                                <Box
                                                    sx={{
                                                        mt: 1,
                                                        display: 'flex',
                                                        gap: '1rem',
                                                    }}
                                                >
                                                    <Rating defaultValue={2.5} precision={0.5} readOnly />
                                                    <p>Reviews (3246)</p>
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
                                                    <Typography variant="h4" className='boldPrice'>2699,90</Typography>
                                                </Box>
                                            </div>

                                            <div id='card' style={{ width: 220 }}>
                                                <Container>
                                                    <div id='checkAvailability'>
                                                        <IoLogoWhatsapp />
                                                        check availability
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
                                                    <Rating defaultValue={1.5} precision={0.5} readOnly />
                                                    <p>Reviews (9178)</p>
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
                                                    <Typography variant="h4" className='boldPrice'>2230,90</Typography>
                                                </Box>
                                            </div>

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
                                                    <Rating defaultValue={3.5} precision={0.5} readOnly />
                                                    <p>Reviews (387)</p>
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
                                                    <Typography variant="h4" className='boldPrice'>5100,90</Typography>
                                                </Box>
                                            </div>

                                            <div id='card' style={{ width: 220 }}>
                                                <Container>
                                                    <div id='checkAvailability'>
                                                        <IoLogoWhatsapp />
                                                        check availability
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
                                                    <Rating defaultValue={2} precision={0.5} readOnly />
                                                    <p>Reviews (967)</p>
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
                                                    <Typography variant="h4" className='boldPrice'>1799,90</Typography>
                                                </Box>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </TabPanel>
                        </Box>
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