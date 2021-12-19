import React, { Component } from 'react'
import { Field } from 'redux-form'
import Grid from '@mui/material/Grid'
import { renderTextField } from '../../utils/fieldRendering'
class CategoryForm extends Component {

    render() {
        return (
            <Grid container spacing={2}>
                
                <Grid item xs={6}>
                    <Field component={renderTextField} name="name" label="Name" margin="dense" fullWidth/>
                </Grid>
            </Grid>
        )
    }
}

export default CategoryForm