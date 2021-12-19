import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL_FROM_CART } from '../../../utils/actionTypes'

export function addProductToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product,
    }
}

export function removeProductFromCart(productID) {
    return {
        type: REMOVE_FROM_CART,
        payload: productID,
    }
}

export function clearCart() {
    return {
        type: CLEAR_ALL_FROM_CART,
    }
}