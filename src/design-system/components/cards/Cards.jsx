import {
    StyledCards
} from './styled'

import Support from '../../utils/theme/subfooter/Support.svg'
import Account from '../../utils/theme/subfooter/Account.svg'
import Saving from '../../utils/theme/subfooter/Saving.svg'

export default function Cards() {
    return (
        <>
            <StyledCards>
            <div className="wrapper">
                    <div className="subfooter-card">
                        <img src={Support} />
                        <h3>Product Support</h3>
                        <p>Up to 3 years on-site warranty available for your peace of mind.</p>
                    </div>
                    <div className="subfooter-card">
                        <img src={Account} />
                        <h3>Personal Account</h3>
                        <p>With big discounts, free delivery and a dedicated support specialist.</p>
                    </div>
                    <div className="subfooter-card">
                        <img src={Saving} />
                        <h3>Amazing Savings</h3>
                        <p>Up to 70% off new Products, you can be sure of the best price.</p>
                    </div>
                </div>
            </StyledCards>
        </>
    )
}