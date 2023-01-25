import styled from 'styled-components'
import {
    Colors
} from '../../utils/theme/colors'

export const StyledAsideMenu = styled.aside`
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 5.5vw;
    z-index: 0;
    max-height: 40vh;
    padding: 2rem;
    background-color: ${Colors.carouselBackground};

    @media (max-width: 1024px) {
        position: static;
        background-color: initial;
        right: initial;
        max-height: initial;
        padding: initial;

        .asideItems a {
            line-height: 1rem;
        }
    }

    .asideItems a{
        line-height: 3rem;
        color: black;
    }

    .asideItems:hover {
        transform: scale(1.025);
        transition: .075s;
    }
`