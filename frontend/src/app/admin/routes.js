import React, { Component } from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProductView from './product/ProductView'
import CategoryView from './category/CategoryView'
import SubCategoryView from './sub-category/SubCategoryView'
import UserView from './user/UserView'
import OrderView from './order/OrderView'
import Modal from './common/modal/Modal'
import { setModalVisibility } from './common/modal/modalActions'
import If from '../utils/operators/If'
import { setProduct } from './product/productActions'
import { setCategory } from './category/categoryActions'
import { setSubCategory } from './sub-category/subCategoryActions'
import { setUser } from './user/userActions'
import { setOrder } from './order/orderActions'

class Routes extends Component {
    render() {
        return (
            <div className='content-wrapper'>
                <Switch>
                    <Route path='/' element={<ProductView setStateValue={this.props.setProduct} setModalVisibility={this.props.setModalVisibility} />} />
                    <Route path='/categories' element={<CategoryView setStateValue={this.props.setCategory} setModalVisibility={this.props.setModalVisibility} />} />
                    <Route path='/subcategories' element={<SubCategoryView setStateValue={this.props.setSubCategory} setModalVisibility={this.props.setModalVisibility} />} />
                    <Route path='/users' element={<UserView setStateValue={this.props.setUser} setModalVisibility={this.props.setModalVisibility} />} />
                    <Route path='/orders' element={<OrderView setStateValue={this.props.setOrder} setModalVisibility={this.props.setModalVisibility} />} />
                </Switch>
                <If test={this.props.modalVisibility}>
                    <Modal />
                </If>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    modalVisibility: state.modal.modalVisibility,
})
const mapDispatchToProps = dispatch => bindActionCreators({
    setModalVisibility,
    setProduct,
    setCategory,
    setSubCategory,
    setUser,
    setOrder
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Routes)