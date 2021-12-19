import { SET_CATEGORY_TO_INITIAL_STATE, SET_CURRENT_CATEGORY, SET_CATEGORY_OPTIONS } from '../../utils/actionTypes'

const INITIAL_STATE = {
    currentCategory: {}, categories:[]
}

export default function categoryReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_CURRENT_CATEGORY:
            return { ...state, currentCategory: action.currentCategory }
        case SET_CATEGORY_OPTIONS:
            return { ...state, categories: action.categories }
        case SET_CATEGORY_TO_INITIAL_STATE:
            return INITIAL_STATE
        default:
            return state
    }
}