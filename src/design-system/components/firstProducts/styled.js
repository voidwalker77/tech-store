import styled from 'styled-components';
import {
    Colors
} from '../../utils/theme/colors';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyledProductWrapper = styled.div`
    background: ${Colors.whiteText};
    padding-block: 2rem;
    padding-inline: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-around;
    margin-bottom: 2rem;

    .cardsWrapper {
        display: flex;
        gap: 2rem;
    }

    .insideCardsWrapper {
        display: flex;
        gap: 2rem;
        
    }

    #card {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        width: auto;
        justify-content: space-between;

        img {
            width: auto;
        }
    }

    img {
        border: 1px solid ${Colors.carouselBackground};
        border-radius: 3%;
    }

    p {
        color: ${Colors.greyText};
    }

    .boldPrice {
        font-weight: bold;
        font-size: 1.8rem;
    }

    #AsideBanner {
        display: flex;
        align-items: center;
        justify-content: center;

        h2 {
            font-size: 2.8rem;
            position: absolute;
            color: white;
        }

        p {
            color: white;
            font-size: 1.6rem;
            position: absolute;
            text-decoration: underline;
            cursor: pointer;
            margin-top: 15%;
        }
    }
`

export const StyledMobileProductWrapper = styled.div`
    background: ${Colors.whiteText};
    padding-block: 2rem;
    padding-inline: 1rem;
    margin-bottom: 2rem;
    
    img {
        border: 1px solid ${Colors.carouselBackground};
        border-radius: 3%;
        width: auto;
    }

    p {
        color: ${Colors.greyText};
    }

    .boldPrice {
        font-weight: bold;
        font-size: 1.8rem;
    }

    #AsideBanner {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 2rem;
        h2 {
            font-size: 2.8rem;
            
        }

        p {
            font-size: 1.6rem;
            color: black;
            text-decoration: underline;
            cursor: pointer;
        }
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