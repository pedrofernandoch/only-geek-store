import React, { Component } from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProductView from './product/ProductView'
import UserView from './user/UserView'
import Modal from './common/modal/Modal'
import { setModalVisibility } from './common/modal/modalActions'
import If from '../utils/operators/If'
import { setUser } from './user/userActions'

class Routes extends Component {
    render() {
        return (
            <div className='content-wrapper'>
                <Switch>
                    <Route path='/' element={<UserView setStateValue={this.props.setUser} setModalVisibility={this.props.setModalVisibility} />} />
                    <Route path='/users' element={<UserView setStateValue={this.props.setUser} setModalVisibility={this.props.setModalVisibility} />} />
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
    setUser,
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Routes)