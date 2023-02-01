import styled from 'styled-components'
import {
    Colors
} from '../../utils/theme/colors'

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