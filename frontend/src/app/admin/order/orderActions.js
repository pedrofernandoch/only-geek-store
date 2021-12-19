import { SET_ORDER_TO_INITIAL_STATE, SET_CURRENT_ORDER } from '../../utils/actionTypes'

export function setOrderToInitialState() {
    return {
        type: SET_ORDER_TO_INITIAL_STATE,
    }
}

export function setOrder(order) {
    const ordertData = {...order}
    delete ordertData.tableData
    return {
        type: SET_CURRENT_ORDER,
        currentOrder: ordertData
    }
}