import styled from 'styled-components'
import {
    Colors
} from '../../../utils/theme/colors'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyledSection = styled.section`

    .main-title {
        font-size: 3.2rem;
        margin-inline: 5.5vw;
    }

    /* ---> black section <--- */
    .first--black-section {
        margin-top: 2.1rem;
    }
    .black {
        background: ${Colors.black};
        padding-inline: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    
    .container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 5rem;
    }

    .text-container {
        width: 46.5rem;
    }
    .text-container > p {
        color: ${Colors.whiteText};
        font-weight: 300;
        font-size: 1.8rem;
        line-height: 2.6rem;
    }

    .black-screen--title {
        color: ${Colors.whiteText};
        font-size: 4rem;
        font-weight: 500;
        line-height: 5rem;
        margin-top: 12.1rem;
    }

    img {
        max-width: 60%;
        max-height: 48.8rem;
        margin-top: 6.6rem;
    }

    /* ---> white section <--- */
    .black.white { 
        background: white;
        margin-top: auto;

    }

    .container.white {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: row-reverse;
    }
    
    .text-container.white {
        color: ${Colors.black};
    }
    .text-container.white > p {
        color: ${Colors.black};
    }
    
    .black-screen--title.white {
        color: ${Colors.black};
        height: auto;
    }

    @media (max-width: 1024px) {
        
        
        .black {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .container {
            margin-bottom: 12rem;
            gap: 5rem;
        }
        
        img {
            max-width: 40%;
        }
    }
    
    @media (max-width: 900px) {

        .main-title {
            font-size: 2.6rem;
        }
        
        .black-screen--title {
            font-size: 2.8rem;
        }
        
        .container {
            gap: 0rem;
        }
        
        .text-container {
            width: 44%;
        }

        .text-container > p {
            font-size: 1.4rem;
        }
    }

    @media (max-width: 768px) {

        .container {
            flex-direction: column;
        }
        .container.white {
            flex-direction: column;
        }
        
        .text-container {
            width: 80%;
        }

        img {
            max-width: 35%;
            margin-top: 2.2rem;
        }
    }
`;

export const StyledCarouselContainer = styled.article`

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6rem;
`

export const StyledCardSection = styled.section`    
    height: 100%;
    width: 100%;
    background: ${Colors.carouselBackground};

    .wrapper {
        display: flex;
        justify-content: space-around;
        align-items: center;

        flex-direction: row;
        flex-wrap: wrap
    }

    .subfooter-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding-block: 6.1rem;
        width: 26rem;

        gap: 1.4rem;

        text-align: center;
    }
`

