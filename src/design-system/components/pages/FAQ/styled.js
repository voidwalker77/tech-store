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
`
export const StyledSection = styled.section`
    max-width: 55%;
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
    max-height: 40vh;
    padding: 2rem;
    background-color: ${Colors.carouselBackground};

    .asideItems {
        line-height: 3rem;
    }
`