import styled from 'styled-components'
import {
    Colors
} from '../../utils/theme/colors'

export const StyledProductWrapper = styled.div`
    background: ${Colors.whiteText};
    padding: 1rem;
    display: flex;
    gap: 1.5rem;

    @media screen and (max-width: 600px) {
        #AsideBanner {
            
        }
    }

    #card {
        cursor: pointer;
        width: 26vw;
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