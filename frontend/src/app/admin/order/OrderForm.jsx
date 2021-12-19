import React, { Component } from 'react'
import { Field } from 'redux-form'
import Grid from '@mui/material/Grid'
import { renderTextField  } from '../../utils/fieldRendering'

class OrderForm extends Component {

    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Field component={renderTextField} name="orderid" label="Order ID" margin="dense" fullWidth/>
                </Grid>
                <Grid item xs={4}>
                    <Field component={renderTextField} name="userid" label="User ID" margin="dense" fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <Field component={renderTextField} name="name" label="Name" margin="dense" fullWidth/>
                </Grid>
                <Grid item xs={2}>
                    <Field component={renderTextField} name="price" label="Price" margin="dense" fullWidth/>
                </Grid>
            </Grid>
        )
    }
}

export default OrderForm