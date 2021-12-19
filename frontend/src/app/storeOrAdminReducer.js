import { SET_PRODUCTS } from './utils/actionTypes'

const INITIAL_STATE = {
    adminSession: false
}

export default function storeOrAdminReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return { adminSession: action.adminSession }
        default:
            return state
    }
}