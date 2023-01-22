
import {
    StyledAsideMenu
} from './styled'

export default function AsideMenu() {

    const asideItems = [
		<a href="#General">General</a>,
		<a href="#Quotations">Quotations</a>,
		<a href="#PricesTaxes">Prices / Taxes</a>,
		<a href="#Payment">Terms of Payment</a>,
		<a href="#Ownership">Change of Ownership</a>,
		<a href="#Information">Information on the Products supplied</a>,
		<a href="#Delivery">Delivery</a>,
	]

    return (
        <>
            <StyledAsideMenu>
                <h4>Definitions & Interpretation</h4>

                {asideItems.map((asideItems, keyAside) => {
                    return (
                        <>
                            <div key={keyAside} className='asideItems'>{asideItems}</div>
                        </>
                    )
                })}
            </StyledAsideMenu>
        </>
    )
}