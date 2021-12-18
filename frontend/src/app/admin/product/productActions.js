import { SET_PRODUCT_TO_INITIAL_STATE, SET_CURRENT_PRODUCT } from '../../utils/actionTypes'

export function setProductToInitialState() {
    return {
        type: SET_PRODUCT_TO_INITIAL_STATE,
    }
}

export function setProduct(product) {
    const productData = {...product}
    delete productData.tableData
    return {
        type: SET_CURRENT_PRODUCT,
        currentProduct: productData
    }
}