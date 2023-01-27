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


export default function Products() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,

        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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
                    dots: false
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

    return (
        <>
            <StyledProductWrapper>
                <Slider {...settings}>
                    <div>
                        <Container>
                            <div id='inStock'>
                                <AiFillCheckCircle />
                                in stock
                            </div>
                        </Container>
                        <img src={image} height={200} width={200} />
                    </div>

                    <div>
                        <Container>
                            <div id='checkAvailability'>
                                <IoLogoWhatsapp />
                                check availability
                            </div>
                        </Container>
                        <img src={image2} height={200} width={200} />
                    </div>

                    <div>
                        <Container>
                            <div id='inStock'>
                                <AiFillCheckCircle />
                                in stock
                            </div>
                        </Container>
                        <img src={image3} height={200} width={200} />
                    </div>

                    <div>
                        <Container>
                            <div id='inStock'>
                                <AiFillCheckCircle />
                                in stock
                            </div>
                        </Container>
                        <img src={image4} height={200} width={200} />
                    </div>

                    <div>
                        <Container>
                            <div id='inStock'>
                                <AiFillCheckCircle />
                                in stock
                            </div>
                        </Container>
                        <img src={image5} height={200} width={200} />
                    </div>

                    <div>
                        <Container>
                            <div id='inStock'>
                                <AiFillCheckCircle />
                                in stock
                            </div>
                        </Container>
                        <img src={image6} height={200} width={200} />
                    </div>

                    <div>
                        <Container>
                            <div id='inStock'>
                                <AiFillCheckCircle />
                                in stock
                            </div>
                        </Container>
                        <img src={image7} height={200} width={200} />
                    </div>

                    <div>
                        <Container>
                            <div id='checkAvailability'>
                                <IoLogoWhatsapp />
                                check availability
                            </div>
                        </Container>
                        <img src={image8} height={200} width={200} />
                    </div>
                </Slider>
            </StyledProductWrapper>
        </>
    )
}