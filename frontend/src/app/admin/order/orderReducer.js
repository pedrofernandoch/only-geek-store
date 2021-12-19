import { SET_ORDER_TO_INITIAL_STATE, SET_CURRENT_ORDER } from '../../utils/actionTypes'

const INITIAL_STATE = {
    currentOrder: {}
}

export default function orderReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_CURRENT_ORDER:
            return { ...state, currentOrder: action.currentOrder }
        case SET_ORDER_TO_INITIAL_STATE:
            return INITIAL_STATE
        default:
            return state
    }
}