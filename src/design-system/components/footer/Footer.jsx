import { StyledFooter } from './styled'

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

            <div className="wrapper">
                <div className="footer-item">
                    <h4>Information</h4>
                    {
                        footerItemsInfo.map((footerItemsInfo, key) => {
                            return(
                                <a href="#" key={key}>{footerItemsInfo}</a> 
                            )
                        })
                    }
                </div>
                <div className="footer-item">
                    <h4>PC Parts</h4>
                    {
                        footerItemsPCParts.map((footerItemsPCParts, key) => {
                            return(
                                <a href="#" key={key}>{footerItemsPCParts}</a> 
                            )
                        })
                    }
                </div>
                <div className="footer-item">
                    <h4>PC Parts</h4>
                    {
                        footerItemsPCParts.map((footerItemsPCParts, key) => {
                            return(
                                <a href="#" key={key}>{footerItemsPCParts}</a> 
                            )
                        })
                    }
                </div>
            </div>
        </StyledFooter>
    )
}