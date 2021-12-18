import React, { Component } from 'react'
import TableView from '../table/TableView'

const subCategoryColumns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
]

class SubCategoryView extends Component {

    render() {
        return (
            <TableView model="contact" field="id" columns={subCategoryColumns} functions={{
                setStateValue: this.props.setStateValue,
                setModalVisibility: this.props.setModalVisibility }} />
        )
    }
}

export default SubCategoryView