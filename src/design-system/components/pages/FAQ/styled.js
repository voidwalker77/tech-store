import styled from 'styled-components'
import {
    Colors
} from '../../../utils/theme/colors'

export const StyledFAQWrapper = styled.div`
    max-width: 100%;
    margin-inline: 5.5vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > svg{
        position: fixed;
        right: 0.5vw;
        bottom: 3%;
        background-color: ${Colors.defaultBlue};
        border-radius: 100%;

        cursor: pointer;
    }

    > svg path {
        fill: white;
    }

    @media (max-width: 1024px) {
        margin-inline: 4vw;

        > svg{
            z-index: 750;
            
        }    
    }
`
export const StyledSection = styled.section`
    max-width: 65%;

    @media (max-width: 1024px) {
        max-width: 100%;
    }
`
export const StyledWrapperTitles = styled.div`

`
export const StyledDivTitle = styled.div`
    font-size: 1.8rem;
    margin-bottom: 2.3rem;
`
export const StyledDivSubTitle = styled.div`
    font-size: 1.2rem;
    margin-bottom: 3rem;
`
export const StyledMainContentWrapper = styled.div`
    .titles {
        margin-block: 3rem;
    }
    .lastText {
        margin-bottom: 4rem;
    }
`
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