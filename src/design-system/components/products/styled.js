import styled from 'styled-components'
import {
    Colors
} from '../../utils/theme/colors'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyledProductWrapper = styled.div`

    background: ${Colors.whiteText};
    padding: 1rem;
    
    #card:hover {
        cursor: pointer;
    }
    
    
    img {
        border: 1px solid ${Colors.carouselBackground};
        border-radius: 3%;
    }
    @media screen and (max-width: 480px) {
        img {
            width: 100%;
        }
    }
    
    p {
        color: ${Colors.greyText};
    }

    .boldPrice {
        font-weight: bold;
        font-size: 1.8rem;
    }

    .SliderProduct {
        outline: none;
    }
   
`
export const Container = styled.div`

    #inStock {
        display: flex;
        align-items: center;
        color: ${Colors.green};
        margin-bottom: 1rem;
        cursor: pointer;
    }

    #checkAvailability {
        display: flex;
        align-items: center;
        color: ${Colors.red};
        margin-bottom: 1rem;
        cursor: pointer;
    }

    #checkAvailability:hover, #inStock:hover {
        text-decoration: underline;
    }
   
`