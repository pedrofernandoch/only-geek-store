import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import ModalReducer from '../admin/common/modal/modalReducer'
import ProductReducer from '../admin/product/productReducer'
import CategoryReducer from '../admin/category/categoryReducer'
import SubCategoryReducer from '../admin/sub-category/subCategoryReducer'
import UserReducer from '../admin/user/userReducer'
import OrderReducer from '../admin/order/orderReducer'

const rootReducer = combineReducers({
    modal: ModalReducer,
    product: ProductReducer,
    category: CategoryReducer,
    subcategory: SubCategoryReducer,
    user: UserReducer,
    order: OrderReducer,
    toastr: toastrReducer,
    form: formReducer,
})

export default rootReducer