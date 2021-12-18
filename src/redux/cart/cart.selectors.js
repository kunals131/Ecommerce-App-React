import {createSelector} from 'reselect';

//two types of selector 1. Input selector, 2. Output selector;

const selectCart = state=>state.cart;

export const selectCartItems= createSelector(
    [selectCart], (cart)=>cart.cartItem
);

export const selectCartItemsCount = createSelector(
    [selectCart], 
    cart=>
    cart.cartItems.reduce((accumalatedQuantity, cartItem)=>accumalatedQuantity+cartItem.quantity,0)
)