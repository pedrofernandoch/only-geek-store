import { SET_ORDERS_TO_INITIAL_STATE, SET_CURRENT_ORDERS } from '../../utils/actionTypes'

const INITIAL_STATE = {
    ordersCourse: {}
}

export default function ordersReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_CURRENT_ORDERS:
            return { ...state, currentOrders: action.currentOrders }
        case SET_ORDERS_TO_INITIAL_STATE:
            return INITIAL_STATE
        default:
            return state
    }
}