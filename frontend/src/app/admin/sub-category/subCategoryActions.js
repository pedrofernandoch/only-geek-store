import { SET_SUBCATEGORY_TO_INITIAL_STATE, SET_CURRENT_SUBCATEGORY } from '../../utils/actionTypes'

export function setSubCategoryToInitialState() {
    return {
        type: SET_SUBCATEGORY_TO_INITIAL_STATE,
    }
}

export function setSubCategory(contact) {
    const contactData = {...contact}
    delete contactData.tableData
    return {
        type: SET_CURRENT_SUBCATEGORY,
        currentContact: contactData
    }
}