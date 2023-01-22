import styled from 'styled-components'
import {
    Colors
} from '../../../utils/theme/colors'

export const StyledContactUsWrapper = styled.section`
    max-width: 100%;
    margin-inline: 5.5vw;
`
export const StyledTitle = styled.div`
    margin-bottom: 3rem;
`
export const StyledDescription = styled.div`
    line-height: 2.5rem;
`
export const StyledFormWrapper = styled.section`
    margin-block: 3.5rem;
    
    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    
    label {
        display: flex;
        flex-direction: column;
        font-weight: bold;
    }

    .Separator {
        display: flex;
        flex-direction: row;
        gap: 3rem;
    }

    input {
        border: 1px solid black;
        border: 1px solid ${Colors.greyLine};
        border-radius: 0.3rem;
        width: 32.5%;
    }

    textarea {
        border: 1px solid ${Colors.greyLine};
        border-radius: 0.3rem;
        resize: none;
        padding: 0.8rem;
        width: 65%;
    }

    textarea::placeholder {
        color: ${Colors.greyText};
        font-size: 1.4rem;
    }
`