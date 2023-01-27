import styled from 'styled-components'
import {
    Colors
} from '../../utils/theme/colors'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyledProductWrapper = styled.div`


    img {
        border: 2px solid ${Colors.greyText};
        border-radius: 3%;
    }
   
`
export const Container = styled.div`

    #inStock {
        display: flex;
        align-items: center;
        color: ${Colors.green};
    }

    #checkAvailability {
        display: flex;
        align-items: center;
        color: ${Colors.red};
    }
`