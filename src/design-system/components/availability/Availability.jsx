
import {
    Container
} from './styled'

export default function Availability(props) {

    const handleAvailability = () => {

        if (props.result >= 4) {
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


    return (
        <>
            <Container>
                {handleAvailability()}
            </Container>
        </>
    )
}