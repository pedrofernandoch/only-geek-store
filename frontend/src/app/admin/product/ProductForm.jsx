import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field } from 'redux-form'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import { renderTextField, renderSelectField, renderSelectOptions } from '../../utils/fieldRendering'
class ProductForm extends Component {

    render() {
        const { categories, subCategories } = this.props
        return (
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Field component={renderTextField} name="name" label="Name" margin="dense" fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <Field component={renderTextField} name="photo" label="Photo URL" margin="dense" fullWidth/>
                </Grid>
                <Grid item xs={6} >
                <Field fullWidth name="category" id="category-select" component={renderSelectField} label="Category">
                        <MenuItem value={null}></MenuItem>
                        {renderSelectOptions(categories, '_category')}
                    </Field>
                </Grid>
                <Grid item xs={6} >
                <Field fullWidth name="sub_category" id="subCategory-select" component={renderSelectField} label="Subcategory">
                        <MenuItem value={null}></MenuItem>
                        {renderSelectOptions(subCategories, '_subCategory')}
                    </Field>
                </Grid>
                <Grid item xs={4}>
                    <Field component={renderTextField} name="price" label="Price" margin="dense" type="number" fullWidth/>
                </Grid>
                <Grid item xs={4}>
                    <Field component={renderTextField} name="stock" label="Stock" margin="dense" type="number" fullWidth/>
                </Grid>
                <Grid item xs={4}>
                    <Field component={renderTextField} name="units_sold" label="Units Sold" type="number" margin="dense" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <Field component={renderTextField} name="description" label="Description" margin="dense" fullWidth multiline maxRows={6}/>
                </Grid>
            </Grid>
        )
    }
}
const mapStateToProps = state => {
    const initialState = {
        categories: state.category.categories,
        subCategories: state.subcategory.subCategories,
    }
    return initialState
}
export default connect(mapStateToProps, null)(ProductForm)