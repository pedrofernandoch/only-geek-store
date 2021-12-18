import React, { Component } from 'react'
import { connect } from 'react-redux'
//import Store from './store/Store'
import Admin from './admin/Admin'
class StoreOrAdmin extends Component {

    render() {
        if (true || this.props.adminSession) {
            return <Admin>{this.props.children}</Admin>
        } else {
            return <span>Oi</span>/*<Store>{this.props.children}</Store>*/
        }
    }
}

// const mapStateToProps = state => ({ adminSession: state.auth.adminSession })
// export default connect(mapStateToProps, null)(StoreOrAdmin)
export default StoreOrAdmin