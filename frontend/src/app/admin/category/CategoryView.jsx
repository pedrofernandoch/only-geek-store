import React, { Component } from 'react'
import TableView from '../table/TableView'

const categoryColumns = [
    { title: "ID", field: "_id", hidden: true },
    { title: "Name", field: "name"},
]

class CategoryView extends Component {

    render() {
        return (
            <TableView customTitle="Categories" model="category" apiUrl="categories" field="name" columns={categoryColumns} functions={{
                setStateValue: this.props.setStateValue,
                setModalVisibility: this.props.setModalVisibility, }} />
        )
    }
}

export default CategoryView