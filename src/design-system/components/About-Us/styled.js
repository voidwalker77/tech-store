import styled from 'styled-components'
import {
    Colors
} from '../../utils/theme/colors'

export const StyledSection = styled.section`

    .breadcrumbs {
        display: flex;
        justify-content: left;
        align-items: center;
        flex-direction: row;
        margin-top: 2.1rem;
    }

    .main-title {
        font-size: 3.2rem;
        margin-inline: 8rem;
    }

    /* ---> black section <--- */
    .black {
        background: ${Colors.black};
        padding-inline: 0;
        width: 100vw;
        height: 100vh;
        margin-top: 2.1rem;
    }
    
    .container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
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
        max-width: 47rem;
        max-height: 48.8rem;
        margin-top: 6.6rem;

    }
`;