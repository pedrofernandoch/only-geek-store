import { SET_PRODUCTS } from '../../../../../utils/actionTypes'

const INITIAL_STATE = {
    products: []
}

export default function productListReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return { products: action.products }
        default:
            return state
    }
}