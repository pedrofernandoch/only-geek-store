import React, { Component } from 'react'
import TableView from '../table/TableView'
import Avatar from 'react-avatar'

const userColumns = [
    { title: 'Photo', field: 'photo', render: rowData =>  <Avatar round={true} size="70" src={rowData.photo} /> },
    { title: "ID", field: "_id", hidden: true },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Adress", field: "adress" },
    { title: "Phone", field: "phone" },
    { title: "Register Date", field: "register_date" },
]
class UserView extends Component {

    render() {
        return (
            <TableView model="user" columns={userColumns} field="name" functions={{
                setStateValue: this.props.setStateValue,
                setModalVisibility: this.props.setModalVisibility }} />
        )
    }
}

export default UserView