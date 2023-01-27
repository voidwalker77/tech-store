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

export const StyledHomeCarousel = styled.div`
    margin-bottom: 5rem;
    outline: transparent;
    img {
        -webkit-user-drag: none;
        width: 100%;
    }

`

export const StyledCardCarouselHome = styled.div``