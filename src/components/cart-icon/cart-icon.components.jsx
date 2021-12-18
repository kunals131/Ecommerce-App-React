import React from 'react';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.action';

import './cart-icon.styles.scss';

const CartIcon = (props)=>(
    <div className="cart-icon" onClick={()=>props.toggleCartHidden(!props.hidden)}>
        <ShoppingIcon className='shopping-icon'/>
        <span className= 'item-count'>0</span>
    </div>
);


const mapStateToProps = (state)=>{
    return {
    hidden  :state.cart.hidden
    }
}

export default connect(mapStateToProps, {
    toggleCartHidden
})(CartIcon);