
export default function NavbarComponent (props) {
    return (
        <>
                        <nav>
                            {props.logo}
                            <a href="#">Laptops</a>
                            <a href="#">Desktop PCs</a>
                            <a href="#">Networking Devices</a>
                            <a href="#">Printers & Scanners</a>
                            <a href="#">PC Parts</a>
                            <a href="#">All Other Products</a>
                            <a href="#">Repairs</a>
                            <button className="Button btn2">Our Deals</button>
                        </nav>    
        </>
    )
}