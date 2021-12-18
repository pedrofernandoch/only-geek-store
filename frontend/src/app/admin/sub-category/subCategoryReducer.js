import { SET_SUBCATEGORY_TO_INITIAL_STATE, SET_CURRENT_SUBCATEGORY } from '../../utils/actionTypes'

const INITIAL_STATE = {
    currentContact: {}
}

export default function contactReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_CURRENT_SUBCATEGORY:
            return { ...state, currentContact: action.currentContact }
        case SET_SUBCATEGORY_TO_INITIAL_STATE:
            return INITIAL_STATE
        default:
            return state
    }
}