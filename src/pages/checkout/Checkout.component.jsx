import React from 'react'
import './Checkout.styles.scss'
import { connect } from 'react-redux'

import StripeCheckoutButton from '../../components/stripe-button/StripeButton.component'
import CheckoutItem from '../../components/checkout-item/CheckoutItem.component'

const Checkout = ({cartItems, total}) => {
    return (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((item)=>(
                <CheckoutItem key={item.id}  cartItem={item}/>
            ))
        }
        <div className="total">
            <span>TOTAL : {total}   </span>
        </div>

{total!==0&&<StripeCheckoutButton price={total}/>}
    </div>
    )
}

const mapStateToProps = (state)=>{
    let cartItems = state.cart.cartItems;
    let totalPrice = cartItems.reduce((accumulate,item)=>accumulate+item.quantity*item.price,0);
    return {
        cartItems : cartItems,
        total : totalPrice
    }
}
export default connect(mapStateToProps)(Checkout);
