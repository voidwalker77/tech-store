import styled from 'styled-components'
import {
    Colors
} from '../../../utils/theme/colors'

export const StyledContactUsWrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline: 5.5vw;

    @media (max-width: 1024px) {
        margin-inline: 4vw;
    }

    @media (max-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const StyledTitlesAndFormWrapper = styled.section`
   width: 65%;
   
   @media (max-width: 1024px) {
    width: 100%;
   }

   @media (max-width: 400px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
   }
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
        gap: 1rem;
        width: 100%;
    }

    @media (max-width: 400px) {
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        label {
            width: 100%;
        }
    }
    
    label {
        font-weight: bold;
        display: flex;
        flex-direction: column;
        padding-block: 2rem;
        position: relative;
    }
    label.labelException1 {
        width: 100%;
    }
    label.labelException2 {
        width: 100%;
    }
    label.labelException3 {
        width: 48%;
    }

    .wrapperInsideForm {
        display: flex;
        flex-direction: row;
        gap: 3rem;
    }

    @media (max-width: 768px) {

        
        .wrapperInsideForm {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 3rem;
        }

        label.labelException3 {
            width: 100%;
        }
    }

    input[type="text"],
    input[type="email"] {
        margin-top: 0.5rem;
        border: 1px solid black;
        border: 1px solid ${Colors.greyLine};
        border-radius: 0.3rem;
        height: 6vh;
        padding-inline: 0.8rem;
        width: 100%;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        -moz-appearance: textfield;
    }
    input::placeholder {
        color: ${Colors.greyLine};
    }

    textarea {
        border: 1px solid ${Colors.greyLine};
        border-radius: 0.3rem;
        resize: none;
        padding: 0.8rem;
        width: 100%;
        height: 25vh;
    }

    textarea::placeholder {
        color: ${Colors.greyText};
        font-size: 1.4rem;
    }

    input[type="checkbox"] {
        width: 20px;
        height: 20px;
        margin-top: 0rem;
        margin-right: 0.5rem;
    }

    .checkboxWrapper, .checkboxWrapper label{
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: flex-start;
        font-size: 1.3rem;
        font-weight: normal;
        text-align: center;
    }
    @media (max-width: 1024px) {
        .checkboxWrapper, .checkboxWrapper label {
            flex-direction: row-reverse;
            justify-content: flex-end;
        }
    }

    .Button {
        color: ${Colors.whiteText};
        height: 3.7rem;
        width: 15rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        
        padding: 2rem 2.6rem;
        background: ${Colors.defaultBlue};
        border: 2px solid ${Colors.defaultBlue};
        border-radius: 2.5rem;
        transition: .2s;
        cursor: pointer;
    }

    .Button:hover {
        color: ${Colors.defaultBlue};
        background: none;
        transition: .3s;
    }

    span {
        top: 90%;
        position: absolute;
        color: red;
        font-weight: normal;
        font-size: 1.4rem;
        position: absolute;
    }

    span.textareaMessage {
        top: 95%;
    }
   
`
export const StyledContactUsAsideMenuWrapper = styled.aside`
    display: flex;
    flex-direction: column;
    max-height: 40vh;
    background-color: ${Colors.carouselBackground};
    margin-top: 6vw;

    .field {
        display: flex;
        margin: 1rem;
    }

    .email {
        color: ${Colors.defaultBlue};
    }
`
export const StyledAdress = styled.section`
`
