import { RiArrowRightSLine } from 'react-icons/ri'
import { StyledBreadCrumbs } from './styled'

export default function Breadcrumbs() {

    const breadcrumbs = [
        'Home',
        'About Us',
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
