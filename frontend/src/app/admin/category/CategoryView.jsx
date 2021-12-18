import React, { Component } from 'react'
import TableView from '../table/TableView'

const categoryColumns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name"},
]

class CategoryView extends Component {

    render() {
        return (
            <TableView model="category" field="id" columns={categoryColumns} functions={{
                setStateValue: this.props.setStateValue,
                setModalVisibility: this.props.setModalVisibility, }} />
        )
    }
}

export default CategoryView