import styled from 'styled-components'
import {
    Colors
} from '../../../utils/theme/colors'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyledHomeWrapper = styled.div`
    margin-inline: 5.5vw;

    #newProductWrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
    }

    a {
        color: ${Colors.defaultBlue};
        text-decoration: underline;
    }
`
export const StyledBannerCarouselHome = styled.div`
    margin-bottom: 5rem;
    outline: transparent;
    img {
        -webkit-user-drag: none;
        width: 100%;
    }

`
export const StyledCardCarouselHome = styled.div``

export const StyledCommentary = styled.div`
    font-size: 1.6rem;
    color: ${Colors.blueCommentary};
    margin-block: 4rem;

    img {
        margin-right: 0.2rem;
        width: 6rem;
    }

    @media screen and (max-width: 412px) {
        font-size: 1.5rem;

        img {
            width: 5rem;
        }
    }
    

    #Commentary {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.4rem;
    }
    #boldCommentary {
        font-weight: bold;
    }

    #linkCommentary {
        text-decoration: underline;
        font-size: 1.5rem;
        cursor: pointer;
    }

    @media screen and (max-width: 360px) {
        font-size: 1.1rem;

        img {
            width: 4rem;
        }

        #linkCommentary {
            font-size: 1.2rem;
        }
    }
`
export const StyledMainProductsWrapper = styled.section`
    display: flex;
    flex-direction: column;

`
export const StyledFirstProductsSection = styled.section`


`