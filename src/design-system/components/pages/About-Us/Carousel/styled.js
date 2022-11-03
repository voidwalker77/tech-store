import styled from 'styled-components'
import {
    Colors
} from '../../../../utils/theme/colors'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyledCarousel = styled.main `
    height: 100%;
    width: 80%;
    background: ${Colors.carouselBackground};

    display: flex;
    justify-content: center;
    box-shadow: .1rem .1rem .4rem rgba(0,0,0, 0.3);


    .container {
        width: 80%;
        margin-block: 5.2rem;

    }
    .container-slide {
        text-align: justify;
        cursor: pointer
    }

    .container-slide p {
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 2.7rem;
    }

    .author p {
        display: flex;
        justify-content: flex-end;

        font-size: 1.4rem;
        font-weight: 400;
        line-height: 2.1rem;
    }

    .carousel-button {
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 2.1rem;
        color: ${Colors.defaultBlue};
        cursor: pointer;

        padding: 0.8rem 2.6rem;
        gap: 1rem;

        border: 2px solid ${Colors.defaultBlue};
        border-radius: 50px;
        margin-top: 6.4rem;
        z-index: 50000000;

        position: relative;
        
        transition: .3s;
    }
    .carousel-button:hover {
        background-color: ${Colors.defaultBlue};
        color: ${Colors.whiteText};
    }

    .slick-dots li {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slick-dots li button {
        display: block;
			width: 1rem;
			height: 1rem;
			padding: 0;
			
			border: none;
			border-radius: 100%;
			background-color: ${Colors.greyLine};
			
			text-indent: -9999px;
    }

    li.slick-active button {
			background-color: ${Colors.defaultBlue};
		}
    
    li.slick-active > button::before {
        color: ${Colors.defaultBlue} !important;
        
    }


    @media (max-width: 768px) {
        .carousel-button {
            font-weight: 600;
            font-size: 1.4rem;
            line-height: 1.7rem;

            padding: 0.8rem 1.2rem;
        }
    }
    
    @media (max-width: 480px) {
        .carousel-button {
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 1.2rem;
            line-height: 1.5rem;

            padding: .8rem .6rem;
            width: 40%;
        }
    }
`