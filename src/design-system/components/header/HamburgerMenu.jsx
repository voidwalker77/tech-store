import { StyledContainer } from './styled'
import NavbarComponent from './Navbar'
import { IoClose } from 'react-icons/io5'
import { useEffect } from 'react'

export default function HamburgerMenu ({menuIsVisible, setMenuIsVisible}) {
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
    }, [menuIsVisible])

    return(
        <StyledContainer isVisible={menuIsVisible}>
            <IoClose size={35} onClick={() => setMenuIsVisible(false)} />
            <NavbarComponent />
        </StyledContainer>
    )
}