import React, { Component } from 'react'
import TableView from '../table/TableView'

const productColumns = [
  { title: "Photo", field: "photo", hidden: true },
  { title: "ID", field: "id" },
  { title: "Name", field: "name" },
  { title: "Category", field: "category" },
  { title: "Description", field: "description" },
  { title: "Price", field: "price" },
  { title: "Stock", field: "stock" },
  { title: "Units Sold", field: "units_sold" },
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

class CourseView extends Component {

  render() {
    return (
      <TableView detailPanel={detailPanel} model="course" field="name" columns={productColumns} functions={{ 
        setStateValue: this.props.setStateValue,
        setModalVisibility: this.props.setModalVisibility }} />
    )
  }
}

export default CourseView