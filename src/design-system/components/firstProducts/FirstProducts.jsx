import { useState } from 'react'
import {
    StyledProductWrapper,
    Container
} from './styled'

import { AiFillCheckCircle } from 'react-icons/ai'

import Image1 from '../../utils/theme/img/firstProducts/image1.svg'
import AsideBanner from '../../utils/theme/img/firstProducts/AsideBanner.svg'


import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function FirstProducts() {
    

    return (
        <>
            <StyledProductWrapper>
                <div id='AsideBanner'>
                    <img src={AsideBanner} />
                    <h2>Custome Builds</h2>
                    <p>See all products</p>
                </div>
                <div id='card'>
                    <Container>
                        <div id='inStock'>
                            <AiFillCheckCircle />
                            in stock
                        </div>
                    </Container>
                    <img src={Image1} height={200} width={200} />
                    <Box
                        sx={{
                            mt: 1,
                            display: 'flex',
                            gap: '1rem',
                        }}
                    >
                        <Rating defaultValue={2.5} precision={0.5} readOnly />
                        <p>Reviews (18)</p>
                    </Box>
                    <Box
                        sx={{
                            mt: 1,
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Typography variant="h5" component="body1" >EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</Typography>
                    </Box>
                    <Box
                        sx={{
                            mt: 1.2,
                            color: '#A2A6B0',
                            textDecoration: 'line-through',
                        }}
                    >
                        <Typography variant="h5" >499,90</Typography>
                    </Box>
                    <Box
                        sx={{
                            color: '#000',
                        }}
                    >
                        <Typography variant="h4" className='boldPrice'>499,90</Typography>
                    </Box>
                </div>
                
            </StyledProductWrapper>
        </>
    )
}