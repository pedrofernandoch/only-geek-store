import { SET_SUBCATEGORY_TO_INITIAL_STATE, SET_CURRENT_SUBCATEGORY, SET_SUB_CATEGORY_OPTIONS } from '../../utils/actionTypes'

export function setSubCategoryToInitialState() {
    return {
        type: SET_SUBCATEGORY_TO_INITIAL_STATE,
    }
}

export function setSubCategory(subCategory) {
    const subCategoryData = {...subCategory}
    delete subCategoryData.tableData
    return {
        type: SET_CURRENT_SUBCATEGORY,
        currentSubcategory: subCategoryData
    }
}


export function setSubCategoryOptions(subCategories) {
    return {
        type: SET_SUB_CATEGORY_OPTIONS,
        subCategories
    }
}