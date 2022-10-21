import styled from 'styled-components'
import {
    Colors
} from '../../../../utils/theme/colors'


export const StyledCarousel = styled.main`
    height: 100%;
    width: 80%;
    background: ${Colors.carouselBackground};

    display: flex;
    justify-content: center;
    box-shadow: 0 .4rem .4rem rgba(0,0,0, 0.45);


    .container {
        width: 80%;
    }
    .container-slide {
        word-break: break-all;
    }

    p {
        margin-top: 5rem;
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 2.7rem;
    }

    .carousel-button {
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 2.1rem;
        color: ${Colors.defaultBlue};
        cursor: pointer;

        padding: 0.8rem 2.6rem;
        gap: 1rem;

        border: 2px solid #0156FF;
        border-radius: 50px;
        margin-top: 6.4rem;
        
        transition: .3s;
    }
    .carousel-button:hover {
        background-color: ${Colors.defaultBlue};
        color: ${Colors.whiteText};
    }
    
    .slick-dots {
        margin-top: 6.4rem;
    }

`