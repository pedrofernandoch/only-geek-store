import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import ModalReducer from '../admin/common/modal/modalReducer'
import ProductReducer from '../admin/product/productReducer'
import ProductListReducer from '../store/components/views/product/product-list/productListReducer'
import CategoryReducer from '../admin/category/categoryReducer'
import SubCategoryReducer from '../admin/sub-category/subCategoryReducer'
import UserReducer from '../admin/user/userReducer'
import OrderReducer from '../admin/order/orderReducer'
import CartReducer from '../store/components/views/cart/cartReducer'
import StoreOrAdminReducer from '../storeOrAdminReducer'

const rootReducer = combineReducers({
    modal: ModalReducer,
    product: ProductReducer,
    productList: ProductListReducer,
    category: CategoryReducer,
    subcategory: SubCategoryReducer,
    user: UserReducer,
    order: OrderReducer,
    toastr: toastrReducer,
    cart: CartReducer,
    storeOrAdmin: StoreOrAdminReducer,
    form: formReducer,
})

export default rootReducer