import ShopActionTypes from "./shop.type";

export const updateCollections = (collections)=>{

    return {
    type : ShopActionTypes.UPDATE_COLLECTIONS,
    payload : collections
    }
}