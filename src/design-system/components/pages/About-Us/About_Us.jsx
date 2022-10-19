import { StyledSection } from './styled'
import Breadcrumbs from '../../breadcrumbs/Breadcrumbs'
import BlackScreenImg1 from '../../../utils/theme/img/AboutUs_BlackScreen_1.svg'
import BlackScreenImg2 from '../../../utils/theme/img/AboutUs_BlackScreen_2.svg'
import BlackScreenImg3 from '../../../utils/theme/img/AboutUs_BlackScreen_3.svg'
import BlackScreenImg4 from '../../../utils/theme/img/AboutUs_BlackScreen_4.svg'
import BlackScreenImg5 from '../../../utils/theme/img/AboutUs_BlackScreen_5.svg'


export default function AboutUs() {
    return (
        <>
            <Breadcrumbs />
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
                <section className="black white">
                    <div className="container white">
                        <div className="text-container white">
                            <h1 className="black-screen--title white">shop.com</h1>
                            <p>Shop is a proudly Australian owned, Melbourne based supplier of I.T. goods and services, operating since 1991. Our client base encompasses individuals, small business, corporate and government organisations. We provide complete business IT solutions, centred on high quality hardware and exceptional customer service.</p>
                        </div>
                        <img src={BlackScreenImg2} />
                    </div>
                </section>  
                <section className="black">
                    <div className="container">
                        <div className="text-container">
                            <h1 className="black-screen--title">You're In Safe Hands</h1>
                            <p>Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience. <br /><br />
                            *Performance compared to i7-9700. Specs varies by model.
                            </p>
                        </div>
                        <img src={BlackScreenImg3} />
                    </div>
                </section>
                <section className="black white">
                    <div className="container white">
                        <div className="text-container white">
                            <h1 className="black-screen--title white">The Highest Quality of Products</h1>
                            <p>We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.</p>
                        </div>
                        <img src={BlackScreenImg4} />
                    </div>
                </section>
                <section className="black">
                    <div className="container">
                        <div className="text-container">
                            <h1 className="black-screen--title">Delivery to All Regions</h1>
                            <p>We deliver our goods all across Australia. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be.
                            </p>
                        </div>
                        <img src={BlackScreenImg5} />
                    </div>
                </section> 
            </StyledSection>
        </>
    )
}
