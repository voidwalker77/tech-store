import styled from 'styled-components'
import { Colors } from '../../utils/theme/colors'

export const StyledBreadCrumbs = styled.section`
    a {
        color: black;
        transition: transform .5s;
    }
    a:hover {
        color: ${Colors.defaultBlue};
        transition: .5s;
    }
    a:active {
        transform: scale(1.4);
        transition: .5s;
    }

    div {
    display: flex;
    justify-content: left;
    padding-inline: 6vw;
    align-items: center;
    flex-direction: row;
    margin-block: 2.1rem;
    }
`;