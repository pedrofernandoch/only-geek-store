import React, { Component } from 'react'
import TableView from '../table/TableView'

const ordersColumns = [
  { title: "OrderID", field: "_id", hidden: true },
  { title: "Order Number", field: "number"},
  { title: "Status", field: "status" },
  { title: "User", field: "user" },
]

class OrderView extends Component {

  render() {
    return (
      <TableView model="order" field="_id" columns={ordersColumns} functions={{ 
        setStateValue: this.props.setStateValue,
        setModalVisibility: this.props.setModalVisibility }} />
    )
  }
}

export default OrderView