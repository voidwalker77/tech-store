export default function NavbarComponent (props) {
    
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
                <nav>
                    {
                        navbarLinks.map((navbarLinks, key) => {
                            return(
                                <a href="#" key={key}>{navbarLinks}</a> 
                            )
                        })
                    }
                    <button className="Button btn2">Our Deals!</button>
                </nav>
            }                        
        </>
    )
}