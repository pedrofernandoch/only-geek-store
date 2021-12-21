import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field } from 'redux-form'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import { renderTextField, renderSelectField, renderSelectOptions } from '../../utils/fieldRendering'

class OrderForm extends Component {

    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Field component={renderTextField} name="userid" label="User ID" margin="dense" fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <Field component={renderTextField} name="number" label="Number" margin="dense" fullWidth/>
                </Grid>
                <Grid item xs={6} >
                {/* <Field fullWidth name="product" id="products-select" component={renderSelectField} label="Product">
                        <MenuItem value={null}></MenuItem>
                        {renderSelectOptions(product, '_product')}
                </Field> */}
                </Grid>
            </Grid>
        )
    }
}

export default OrderForm