import { RiArrowRightSLine } from 'react-icons/ri'
import { StyledBreadCrumbs } from './styled'
import { Link } from "react-router-dom";

export default function Breadcrumbs() {

    const breadcrumbs = [
        <Link to="/"><a>Home</a></Link>,
        <Link to="/about-us"><a>About Us</a></Link>,
        <Link to="/faq"><a>FAQ</a></Link>,
        <Link to="/contact"><a>Contact Us</a></Link>,

    ]

    return (
        <>
            <StyledBreadCrumbs>
                <div>
                    {
                        breadcrumbs.map((breadcrumbs, keyBreadcrumbs) => {
                            return (
                                <>
                                    <a href="#" key={keyBreadcrumbs}> {breadcrumbs} </a>
                                    <RiArrowRightSLine size={18} style={{ color: '#0156FF' }} />
                                </>
                            )
                        })
                    }
                </div>
            </StyledBreadCrumbs>
        </>
    )
}
