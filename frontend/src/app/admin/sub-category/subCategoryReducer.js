import { SET_SUBCATEGORY_TO_INITIAL_STATE, SET_CURRENT_SUBCATEGORY, SET_SUB_CATEGORY_OPTIONS } from '../../utils/actionTypes'

const INITIAL_STATE = {
    currentSubcategory: {}, subCategories: []
}

export default function subCategoryReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_CURRENT_SUBCATEGORY:
            return { ...state, currentSubcategory: action.currentSubcategory }
        case SET_SUB_CATEGORY_OPTIONS:
            return { ...state, subCategories: action.subCategories }
        case SET_SUBCATEGORY_TO_INITIAL_STATE:
            return INITIAL_STATE
        default:
            return state
    }
}