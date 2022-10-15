import { StyledSection } from './styled'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import BlackScreenImg1 from '../../utils/theme/img/AboutUs_BlackScreen_1.svg'

export default function AboutUs() {
    return (
        <>
            <div className="breadcrumbs">
                <Breadcrumbs />
            </div>
            <StyledSection>
                <h1 className="main-title">About Us</h1>
                <section className="black">
                    <div className="container">
                        <div className="text-container">
                            <h1 className="black-screen--title">A Family That Keeps On Growing</h1>
                            <p>We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.<br/><br/>
                            Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.</p>
                        </div>
                        <img src={BlackScreenImg1} />
                    </div>
                </section>
                
            </StyledSection>
        </>
    )
}
