import React, { Component } from 'react'
import TableView from '../table/TableView'

const ordersColumns = [
  { title: "OrderID", field: "id" },
  { title: "Status", field: "id" },
  { title: "UserID", field: "id" },
  { title: "Price", field: "price" },
]

const detailPanel = data => {
  return (
    <iframe
      title={data.rowData.name}
      width="100%"
      height="315"
      src={data.rowData.photo}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

class OrdersView extends Component {

  render() {
    return (
      <TableView detailPanel={detailPanel} model="course" field="name" columns={ordersColumns} functions={{ 
        setStateValue: this.props.setStateValue,
        setModalVisibility: this.props.setModalVisibility }} />
    )
  }
}

export default CourseView