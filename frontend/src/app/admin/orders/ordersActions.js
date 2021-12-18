import { SET_ORDERS_TO_INITIAL_STATE, SET_CURRENT_ORDERS } from '../../utils/actionTypes'

export function setOrdersToInitialState() {
    return {
        type: SET_ORDERS_TO_INITIAL_STATE,
    }
}

export function setProduct(product) {
    const productData = {...product}
    delete productData.tableData
    return {
        type: SET_CURRENT_ORDERS,
        currentProduct: productData
    }
}