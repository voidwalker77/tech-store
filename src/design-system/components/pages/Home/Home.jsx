import { useState } from 'react'
import {
    StyledHomeWrapper,
    StyledBannerCarouselHome,
    StyledCardCarouselHome,
    StyledCommentary,
    StyledMainProductsWrapper,
    StyledFirstProductsSection,
} from './styled'
import Slider from "react-slick";

import HomeCarouselImg1 from '../../../utils/theme/img/Home_CarouselImg1.svg'
import HomeLogoCommentary from '../../../utils/theme/img/Home_Logo_Commentary.svg'

import { 
    Products, 
    FirstProducts
} from '../../exports';

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
                <StyledBannerCarouselHome>
                    <div className="container">

                        <Slider {...settings}>
                            <div className="container-slide">
                                <img src={HomeCarouselImg1} />
                            </div>
                            <div className="container-slide">
                                <img src={HomeCarouselImg1} />
                            </div>
                        </Slider>
                    </div>
                </StyledBannerCarouselHome>

                <div id='newProductWrapper'>
                    <h2>New Products</h2>
                    <a href="#">See All New Products</a>
                </div>

                <StyledCardCarouselHome>

                    <Products />
                    
                </StyledCardCarouselHome>

                <StyledCommentary>
                    <div id='Commentary'>
                        <img src={HomeLogoCommentary} />
                        <p id='boldCommentary'>own</p>
                        <p>it now, up to 6 months interest free</p>
                        <p id='linkCommentary'>learn more</p>
                    </div>
                </StyledCommentary>

                <StyledMainProductsWrapper>
                    <StyledFirstProductsSection>
                        <FirstProducts />
                    </StyledFirstProductsSection>
                </StyledMainProductsWrapper>

            </StyledHomeWrapper>
        </>
    )
}