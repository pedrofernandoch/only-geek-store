import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field } from 'redux-form'
import Grid from '@mui/material/Grid'
import { renderTextField, defaultAsyncSelectOption, promiseOptions } from '../utils/fieldRendering'
import AsyncSelect from 'react-select/async'
import { setUser } from '../user/userActions'

class CategoryForm extends Component {

    handleChange(newValue) {
        if (newValue.value !== null && newValue.value !== undefined) {
            this.props.setUser(newValue.value)
        }
    }

    loadOptions = inputValue => promiseOptions(inputValue, 'name')

    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12} >
                        <AsyncSelect placeholder={<div>Search user</div>} defaultOptions={defaultAsyncSelectOption} loadOptions={this.loadOptions} onChange={this.handleChange.bind(this)} />
                </Grid>
                <Grid item xs={6}>
                    <Field component={renderTextField} name="name" label="Name" margin="dense" disabled fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <Field component={renderTextField} name="email" label="Email" margin="dense" disabled fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <Field component={renderTextField} name="feedback" label="Feedback" margin="dense" fullWidth multiline maxRows={6}/>
                </Grid>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setUser,
}, dispatch)
export default connect(null, mapDispatchToProps)(CategoryForm)