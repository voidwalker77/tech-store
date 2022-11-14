import { StyledSubHeaderNav, StyledHeader } from './styled'
import { useState } from 'react'
import NavbarComponent from './Navbar'
import { Link } from "react-router-dom";
import HamburgerMenu from './HamburgerMenu'

import { RiMenu3Fill } from 'react-icons/ri'
import DropdownClock from '../../utils/theme/img/bx_bx-time.svg'
import ArrowDown from '../../utils/theme/img/arrowdown.svg'
import Logo from '../../utils/theme/img/Logo.svg'
import Facebook from '../../utils/theme/img/facebook-icon.svg'
import Instagram from '../../utils/theme/img/instagram-icon.svg'
import Location from '../../utils/theme/img/location.svg'
import SearchIcon from '../../utils/theme/img/Search_Icon.svg'
import Carrito from '../../utils/theme/img/CarritoDeCompra.svg'
import UserIcon from '../../utils/theme/img/UserIcon.svg'

export default function Header() {
    const [isActive, setIsActive] = useState(false)
    const [menuIsVisible, setMenuIsVisible] = useState(false )
    
    const handleSearchBar = () => {
        isActive ? setIsActive(false) : setIsActive(true)
    }

    const navbar = () => {
        if (isActive === false) {
            return (
                <NavbarComponent logo={<Link to="/home" className="Link"><a><img className="Logo" src={Logo}/></a></Link>}/>
            )
        }
        else if (isActive === true) {
            return (<img src={Logo}/>)
        }
    }

    const handleScreenSize = () => {
		const fullWidth = window.innerWidth
		
		if (fullWidth > 1024) {
			return (
                <>
                    {navbar()}
                    <div className="user-area">
                        <div className={isActive ? "search-box active" : "search-box"}>
                            <input className={isActive ? "input-alpha active" : "input-alpha"} type="text" placeholder="Type to search.." />
                            <div className={isActive ? "search-icon active" : "search-icon"}
                                onClick={() => handleSearchBar()}>
                                <img src={SearchIcon} />
                            </div>
                        </div>

                        <a><img className="Carrito" src={Carrito} /></a>
                        <img className='user-icon' src={UserIcon} />
                    </div>
                </>
            )
		}
        else if (fullWidth <= 1024) {
            return(
                <>
                    <a href="home" ><img className="Logo" src={Logo}/></a>
                    <div className={isActive ? "search-box active" : "search-box"}>
                            <input className={isActive ? "input-alpha active" : "input-alpha"} type="text" placeholder="Type to search.." />
                            <div className={isActive ? "search-icon active" : "search-icon"}
                                onClick={() => handleSearchBar()}>
                                <img src={SearchIcon} />
                            </div>
                        </div>
                    <RiMenu3Fill onClick={() => setMenuIsVisible(true)} className="mobile" />
                    <HamburgerMenu 
                        menuIsVisible={menuIsVisible}
                        setMenuIsVisible={setMenuIsVisible} 
                    /> 
                </>
            )
        }
	}
    
    return (
        <>
            <StyledSubHeaderNav>
                <nav>
                    <ul>
                        <li className='title-list'>Mon-thu: <a href="#">9:00 AM - 5:30 PM <img src={ArrowDown} /></a>
                            <div className="sub-menu-1">
                                <ul>
                                    <li className="black"><img src={DropdownClock} />We are open:</li>
                                    <li className="margin">Mon-Thu: &nbsp;<a href="#" className="black">9:00 AM - 5:30 PM</a></li>
                                    <li className="margin">Fr: &nbsp;<a href="#" className="black">9:00 AM - 6:00 PM</a></li>
                                    <li className="margin">Sat: &nbsp;<a href="#" className="black">11:00 AM - 5:00 PM</a></li>
                                </ul>
                                <hr></hr>
                                <ul className="margin-top">
                                    <li className="black thin"><img src={Location} />Address: 1234 Street Address, City Address, 1234</li>
                                </ul>
                                <hr></hr>
                                <ul className="margin-top bottom">
                                    <p className="margin black-p">Phones: <a href="#" className="blue">(00) 1234 5678</a></p>
                                    <p className="margin black-p">E-mail: <a href="#" className="blue">shop@email.com</a></p>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
                <p>Visit our showroom in 1234 Street Address City Address, 1234 <a className="contact-us" href="#">Contact Us</a></p>
                <a className="call-us" href="#">Call Us: (00) 1234-5678 <img src={Facebook} /><img src={Instagram} /></a>
            </StyledSubHeaderNav>
            <StyledHeader>
                <div className="Container">
                    <div className="Header">
                        {handleScreenSize()}
                    </div>
                </div>
            </StyledHeader>
        </>
    )
}