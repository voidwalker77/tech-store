import { StyledCarousel } from './styled'
import Slider from "react-slick";

export default function Carousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        adaptiveHeight: true,
        pauseOnHover: true,
        appendDots: dots => (
            <div style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginBlock: "-6.8rem"
            }}>
                <ul style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}
                >
                    {dots} </ul>
            </div>
        ),
        dotsClass: `slick-dots`

    }

    return (
        <>
            <StyledCarousel>
                <div className="container">

                    <Slider {...settings}>
                        <div className="container-slide">
                            <p>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
                            <div className="author">
                                <p>- Fulano de tal</p>
                            </div>
                        </div>
                        <div className="container-slide">
                            <p>Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.</p>
                            <div className="author">
                                <p>- Ciclano de tal</p>
                            </div>
                        </div>
                        <div className="container-slide">
                            <p>Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
                                Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.</p>
                            <div className="author">
                                <p>- Beltrano de tal</p>
                            </div>
                        </div>
                        <div className="container-slide">
                            <p>Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                            <div className="author">
                                <p>- Fulano de tal Jr.</p>
                            </div>
                        </div>
                    </Slider>

                    <button className="carousel-button">Leave Us A Review</button>
                </div>
            </StyledCarousel>
        </>
    )
}