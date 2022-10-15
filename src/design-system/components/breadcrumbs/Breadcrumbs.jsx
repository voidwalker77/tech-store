import { RiArrowRightSLine } from 'react-icons/ri'
import { StyledBreadCrumbs } from './styled'

export default function AboutUs() {

    const breadcrumbs = [
        'Home',
        'About Us'
    ]

    return (
        <>
            <StyledBreadCrumbs>
                <div>
                    {
                        breadcrumbs.map((breadcrumbs, key) => {
                            return (
                                <>
                                    <a href="#" key={key}>{breadcrumbs}</a>
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