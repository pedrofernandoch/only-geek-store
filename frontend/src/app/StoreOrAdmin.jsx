import React, { Component } from 'react'
import { connect } from 'react-redux'
import Store from './store/Store'
import Admin from './admin/Admin'
class StoreOrAdmin extends Component {

    render() {
        if (this.props.adminSession) {
            return <Admin>{this.props.children}</Admin>
        } else {
            return <Store>{this.props.children}</Store>
        }
    }
}

const mapStateToProps = state => ({ adminSession: state.storeOrAdmin.adminSession })
export default connect(mapStateToProps, null)(StoreOrAdmin)