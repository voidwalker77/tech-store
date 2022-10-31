import styled from 'styled-components'
import {
    Colors
} from '../../utils/theme/colors'

export const StyledFooter = styled.footer `
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    padding-top: 4rem;
    flex-wrap: wrap;

    background-color: ${Colors.black};
    color: ${Colors.whiteText};


    .newsletter {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: 2rem;
    }

    .newsletter-title h1 {
        font-weight: 500;

    }

    .newsletter-title > p {
        color: ${Colors.greyText};
    }

    .newsletter-input {
        display: flex;
        flex-direction: row;

        gap: 2rem;
    }

    .newsletter-input form input[type=email] {
        background: none;
        border: 2px solid ${Colors.whiteText};
        color: ${Colors.whiteText};
        padding-block: 1rem;
        width: 25vw;
        max-width: 40rem;
        outline: none;
        padding-inline: 1rem;
        border-radius: .5rem;
        transition: .3s;
    }

    .newsletter-input form input[type=email]:focus {
        transform: scale(1.025);
        transition: .3s;
    }

    .newsletter-input button[type=submit] {
        background-color: ${Colors.defaultBlue};
        border: 2px solid ${Colors.defaultBlue};
        color: ${Colors.whiteText};
        font-weight: 600;
        padding-inline: 3rem;
        border-radius: 2rem;
        transition: .3s;
        cursor: pointer
    }

    .newsletter-input button[type=submit]:hover {
        transition: .3s;
        background: none;
        transform: scale(0.9);
    }

    .wrapper {
        display: flex;
        justify-content: space-around;
        width: 95%;
        gap: 1rem;
        border-bottom: 1px solid #CACDD8;

    }

    .chakra-accordion__button {
        margin-block: 4.5rem;
        
    }
    .footer-item {
        margin-block: 4.5rem;
        display: flex;
        flex-direction: column;
    }

    a, p {
        line-height: 2.5rem;
        color: ${Colors.whiteText};

        font-weight: 400;
        font-size: 1.3rem;
    }
    .clipboard {
        cursor: pointer;
        color: ${Colors.linkBlue};
    }

    .footer-item h4 {
        color: ${Colors.greyText};
        margin-bottom: 1.8rem;
        font-weight: 700;
    }


    .subfooter {
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        margin-block: 1.6rem;
        flex-wrap: wrap;
        gap: 2rem;
    }

    .social-icons {
        display: flex;
        gap: 1rem;
        cursor: pointer
    }

    .payment-methods {
        display: flex;
        gap: 1rem;
        cursor: pointer
    }

    .subfooter .copyright p {
        color: ${Colors.greyText};
    }

    @media (max-width: 768px) {

    }
`