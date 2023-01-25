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