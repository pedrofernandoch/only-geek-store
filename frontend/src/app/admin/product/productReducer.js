import { SET_PRODUCT_TO_INITIAL_STATE, SET_CURRENT_PRODUCT } from '../../utils/actionTypes'

const INITIAL_STATE = {
    productCourse: {}
}

export default function productReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_CURRENT_PRODUCT:
            return { ...state, currentProduct: action.currentProduct }
        case SET_PRODUCT_TO_INITIAL_STATE:
            return INITIAL_STATE
        default:
            return state
    }
}