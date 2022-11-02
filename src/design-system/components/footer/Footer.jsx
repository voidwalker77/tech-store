import { useState } from 'react'
import { StyledFooter } from './styled'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/accordion"

import { RiFacebookBoxFill } from 'react-icons/ri'
import { RiInstagramFill } from 'react-icons/ri'

import {
    FaCcPaypal,
    FaCcVisa,
    FaCcMastercard,
    FaCcDiscover
} from 'react-icons/Fa'
import { SiAmericanexpress } from 'react-icons/si'

export default function Footer() {

    const footerItemsInfo = [
        'About Us',
        'About Zip',
        'Privacy Policy',
        'Search',
        'Terms',
        'Orders And Return',
        'Contact us',
        'Advanced Search',
        'Newsletter Subscription'
    ]
    const footerItemsPCParts = [
        'CPUs',
        'Add On Cards',
        'Hard Drives (internal)',
        'Graphic Cards',
        'Keyboard / Mouse',
        'Cases / Power Supplies / Cooling',
        'RAM (Memory)',
        'Software',
        'Speakers / Headsets',
        'Motherboards'
    ]
    const footerItemsDesktop = [
        'Custom PCs',
        'Servers',
        'MSI All-in-One PCs',
        'HP/Compaq PCs',
        'ASUS PCs',
        'Techs PCs'
    ]
    const footerItemsLaptops = [
        'Everyday Use Notebooks',
        'MSI Workstation Series',
        'MSI Prestige Series',
        'Tablets and Pads',
        'Netbooks',
        'Infinity Gaming Notebooks'
    ]

    const [addressNumber, setAddressNumber] = useState("(00) 00000-0000")
    const [email, setEmail] = useState("shop@email.com")

    const copyNumber = () => {
        setTimeout(async () => alert(
            await "Copiado com sucesso!"), 150)
        navigator.clipboard.writeText(addressNumber)
    }
    const copyEmail = () => {
        setTimeout(async () => alert(
            await "Copiado com sucesso!"), 150)
        navigator.clipboard.writeText(email)
    }

    const renderFooter = () => {
        const fullWidth = window.innerWidth

        if (fullWidth >= 900) {
            return (
                <div className="wrapper">
                    <div className="footer-item">
                        <h4>Information</h4>
                        {
                            footerItemsInfo.map((footerItemsInfo, key) => {
                                return (
                                    <a href="#" key={key}>{footerItemsInfo}</a>
                                )
                            })
                        }
                    </div>
                    <div className="footer-item">
                        <h4>PC Parts</h4>
                        {
                            footerItemsPCParts.map((footerItemsPCParts, key) => {
                                return (
                                    <a href="#" key={key}>{footerItemsPCParts}</a>
                                )
                            })
                        }
                    </div>
                    <div className="footer-item">
                        <h4>Desktop PCs</h4>
                        {
                            footerItemsDesktop.map((footerItemsDesktop, key) => {
                                return (
                                    <a href="#" key={key}>{footerItemsDesktop}</a>
                                )
                            })
                        }
                    </div>
                    <div className="footer-item">
                        <h4>Laptops</h4>
                        {
                            footerItemsLaptops.map((footerItemsLaptops, key) => {
                                return (
                                    <a href="#" key={key}>{footerItemsLaptops}</a>
                                )
                            })
                        }
                    </div>
                    <div className="footer-item">
                        <h4>Address</h4>
                        <p>Address: 1234 Street Adress City Address, 1234</p>
                        <p>Phones: <a onClick={copyNumber} className="clipboard" value={addressNumber}>(00) 1234 5678</a></p>
                        <p>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</p>
                        <p>Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 11:00 AM - 5:00 PM</p>
                        <p>Email: <a onClick={copyEmail} className="clipboard" value={email}>shop@email.com</a></p>
                    </div>
                </div>
            )

        }
        else if (fullWidth <= 900) {
            return (
                <>
                    <div className="wrapper">
                        <Accordion defaultIndex={[1]} allowMultiple>
                            <AccordionItem>
                                <h4>
                                    <AccordionButton>
                                        Information
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h4>
                                <AccordionPanel pb={4}>
                                    <div className="footer-item">

                                        {
                                            footerItemsInfo.map((footerItemsInfo, key) => {
                                                return (
                                                    <a href="#" key={key}>{footerItemsInfo}</a>
                                                )
                                            })
                                        }
                                    </div>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                        
                        <Accordion defaultIndex={[1]} allowMultiple>
                            <AccordionItem>
                                <h4>
                                    <AccordionButton>
                                        PC Parts
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h4>
                                <AccordionPanel pb={4}>
                                    <div className="footer-item">

                                        {
                                            footerItemsPCParts.map((footerItemsPCParts, key) => {
                                                return (
                                                    <a href="#" key={key}>{footerItemsPCParts}</a>
                                                )
                                            })
                                        }
                                    </div>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>

                        <Accordion defaultIndex={[1]} allowMultiple>
                            <AccordionItem>
                                <h4>
                                    <AccordionButton>
                                        Desktop PCs
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h4>
                                <AccordionPanel pb={4}>
                                    <div className="footer-item">

                                        {
                                            footerItemsDesktop.map((footerItemsDesktop, key) => {
                                                return (
                                                    <a href="#" key={key}>{footerItemsDesktop}</a>
                                                )
                                            })
                                        }
                                    </div>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>

                        <Accordion defaultIndex={[1]} allowMultiple>
                            <AccordionItem>
                                <h4>
                                    <AccordionButton>
                                        Laptops
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h4>
                                <AccordionPanel pb={4}>
                                    <div className="footer-item">

                                        {
                                            footerItemsLaptops.map((footerItemsLaptops, key) => {
                                                return (
                                                    <a href="#" key={key}>{footerItemsLaptops}</a>
                                                )
                                            })
                                        }
                                    </div>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>

                        
                        
                    </div>
                    <div className="footer-item mobile">
                        <h4>Address</h4>
                        <p>Address: 1234 Street Adress City Address, 1234</p>
                        <p>Phones: <a onClick={copyNumber} className="clipboard" value={addressNumber}>(00) 1234 5678</a></p>
                        <p>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</p>
                        <p>Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 11:00 AM - 5:00 PM</p>
                        <p>Email: <a onClick={copyEmail} className="clipboard" value={email}>shop@email.com</a></p>
                    </div>
                </>
                
            )
        }
    }

    return (
        <StyledFooter>

            <div className="newsletter">
                <div className="newsletter-title">
                    <h1>Sign Up To Our Newsletter.</h1>
                    <p>Be the first to hear about the latest offers.</p>
                </div>
                <div className="newsletter-input">
                    <form>
                        <input type="email" placeholder="Your Email" />
                    </form>
                    <button type="submit">Subscribe</button>
                </div>
            </div>

            {renderFooter()}
            <hr></hr>

            <div className="subfooter">
                <div className="social-icons">
                    <RiFacebookBoxFill size={26} color={"grey"} />
                    <RiInstagramFill size={26} color={"grey"} />
                </div>
                <div className="payment-methods">
                    <FaCcPaypal size={26} color={"grey"} />
                    <FaCcVisa size={26} color={"grey"} />
                    <FaCcMastercard size={26} color={"grey"} />
                    <FaCcDiscover size={26} color={"grey"} />
                    <SiAmericanexpress size={26} color={"grey"} />
                </div>

                <div className="copyright">
                    <p>Copyright © 2020 Shop Pty. Ltd.</p>
                </div>
            </div>
        </StyledFooter>
    )
}