import styled from 'styled-components'
import {
    Colors
} from '../../../design-system/utils/theme/colors'

export const StyledCards = styled.section`    
    height: 100%;
    width: 100%;
    background: ${Colors.whiteText};
    z-index: 500;
    position: relative;

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
