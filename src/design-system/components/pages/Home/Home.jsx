import { useState } from 'react'
import {
    StyledHomeWrapper,
    StyledHomeCarousel,
    StyledCardCarouselHome,
} from './styled'
import Slider from "react-slick";

import HomeCarouselImg1 from '../../../utils/theme/img/Home_CarouselImg1.svg'
import HomeCarouselImg2 from '../../../utils/theme/img/Home_CarouselImg2.svg'

import { Products } from '../../exports';

export default function Home() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
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

    

    return (
        <>
            <StyledHomeWrapper>
                <StyledHomeCarousel>
                    <div className="container">

                        <Slider {...settings}>
                            <div className="container-slide">
                                <img src={HomeCarouselImg1} />
                            </div>
                            <div className="container-slide">
                                <img src={HomeCarouselImg2} />
                            </div>
                        </Slider>
                    </div>
                </StyledHomeCarousel>

                <div id='newProductWrapper'>
                    <h2>New Products</h2>
                    <a href="#">See All New Products</a>
                </div>

                <StyledCardCarouselHome>

                    <Products />
                    
                </StyledCardCarouselHome>

            </StyledHomeWrapper>
        </>
    )
}