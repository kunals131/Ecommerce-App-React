import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = (status)=>({
    type : CartActionTypes.TOGGLE_CART_HIDDEN,
    payload : status
})

export const addItem = item=>({
    type : CartActionTypes.ADD_ITEM,
    payload : item
})