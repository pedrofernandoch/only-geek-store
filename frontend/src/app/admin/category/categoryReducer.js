import { SET_CATEGORY_TO_INITIAL_STATE, SET_CURRENT_CATEGORY } from '../../utils/actionTypes'

const INITIAL_STATE = {
    currentCategory: {}
}

export default function categoryReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_CURRENT_CATEGORY:
            return { ...state, currentCategory: action.currentCategory }
        case SET_CATEGORY_TO_INITIAL_STATE:
            return INITIAL_STATE
        default:
            return state
    }
}