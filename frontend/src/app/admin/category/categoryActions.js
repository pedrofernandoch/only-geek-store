import { SET_CATEGORY_TO_INITIAL_STATE, SET_CURRENT_CATEGORY, SET_CATEGORY_OPTIONS } from '../../utils/actionTypes'

export function setCategoryToInitialState() {
    return {
        type: SET_CATEGORY_TO_INITIAL_STATE,
    }
}

export function setCategory(category) {
    const categoryData = {...category}
    delete categoryData.tableData
    return {
        type: SET_CURRENT_CATEGORY,
        currentCategory: categoryData
    }
}

export function setCategoryOptions(categories) {
    return {
        type: SET_CATEGORY_OPTIONS,
        categories
    }
}