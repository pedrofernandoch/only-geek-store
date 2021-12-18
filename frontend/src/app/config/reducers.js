import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import ModalReducer from '../admin/common/modal/modalReducer'
import UserReducer from '../admin/user/userReducer'
import CategoryReducer from '../admin/category/categoryReducer'

const rootReducer = combineReducers({
    modal: ModalReducer,
    user: UserReducer,
    category: CategoryReducer,
    toastr: toastrReducer,
    form: formReducer,
})

export default rootReducer