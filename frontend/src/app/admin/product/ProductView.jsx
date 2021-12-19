import React, { Component } from 'react'
import TableView from '../table/TableView'
import Avatar from 'react-avatar'

const productColumns = [
  { title: "ID", field: "_id", hidden: true },
  { title: "Photo", field: "photo", render: rowData =>  <Avatar round={true} size="70" src={rowData.photo} />},
  { title: "Name", field: "name" },
  { title: "Category", field: "category" },
  { title: "Subcategory", field: "sub_category" },
  { title: "Description", field: "description" },
  { title: "Price", field: "price" },
  { title: "Stock", field: "stock" },
  { title: "Units Sold", field: "units_sold" },
]
class ProductView extends Component {

  render() {
    return (
      <TableView model="product" field="name" columns={productColumns} functions={{ 
        setStateValue: this.props.setStateValue,
        setModalVisibility: this.props.setModalVisibility }} />
    )
  }
}

export default ProductView