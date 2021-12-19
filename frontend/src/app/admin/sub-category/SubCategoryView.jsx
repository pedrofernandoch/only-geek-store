import React, { Component } from 'react'
import TableView from '../table/TableView'

const subCategoryColumns = [
    { title: "ID", field: "_id", hidden: true },
    { title: "Name", field: "name" },
]

class SubCategoryView extends Component {

    render() {
        return (
            <TableView customTitle="Subcategories" model="subcategory" apiUrl="subcategories" field="name" columns={subCategoryColumns} functions={{
                setStateValue: this.props.setStateValue,
                setModalVisibility: this.props.setModalVisibility }} />
        )
    }
}

export default SubCategoryView