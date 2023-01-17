import { Link } from "react-router-dom";

export default function NavbarComponent(props) {

    const navbarLinks = [
        'Laptops',
        'Desktop PCs',
        'Networking Devices',
        'Printers & Scanners',
        'PC Parts',
        'All Other Products',
        'Repairs'
    ]

    return (
        <>
            {props.logo}
            {
                <>
                    <nav>
                        {navbarLinks.map((navbarLinks, key) => {
                            return (
                                <a href="#" key={key}>{navbarLinks}</a>
                            );
                        })}
                        <Link to="/faq"><button className="Button btn2">FAQ</button></Link>
                    </nav>
                </>
            }
        </>
    )
}