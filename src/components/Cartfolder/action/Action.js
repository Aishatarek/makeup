import {ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART ,ADD_TO_WICH ,REMOVE_FROM_WICH} from "./Types";
export function addToCart(productInfo,quantity) {
    return {
        type: ADD_TO_CART,
        productInfo,
        quantity,
       
    }
    
}
export function removefromcart(index) {
    return {
        type: REMOVE_FROM_CART,
         index
    }
    
}
export function addToWich(productInfo1) {
    return {
        type: ADD_TO_WICH,
        productInfo1,
       
       
    }
    
}
export function removefromWich(index) {
    return {
        type: REMOVE_FROM_WICH,
         index
    }
    
}
export function clearcart() {
    return {
        type: CLEAR_CART
    
    }
    
}