import { SET_PRODUCTS } from '../../../../../utils/actionTypes'

export function setProducts(products){
    return {
        type: SET_PRODUCTS,
        products,
    }
}