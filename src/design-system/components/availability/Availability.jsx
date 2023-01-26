import { AiFillCheckCircle } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import {
    Container
} from './styled'
import axios from 'axios'
import { API } from '../../api/api'

import { useState } from 'react'

export default function Availability() {

    const [rating, setRating] = useState()

    const handleAvailability = () => {
        if (rating > 3) {
            return <div id='inStock'>
                <AiFillCheckCircle />
                in stock
            </div>
        } else {
            return <div id='checkAvailability'>
                <IoLogoWhatsapp />
                check availability
            </div>
        }
    }

    const checkAvailability = () => {
        axios.get(API.urlProducts)
            .then(response => {
                setRating(response.data[0].rating) 
            })
            .catch(error => console.log(error))
    }

    checkAvailability()

    return (
        <>
            <Container>
                {handleAvailability()}
            </Container>
        </>
    )
}