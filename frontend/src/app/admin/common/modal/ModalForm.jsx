import React, { Component } from 'react'
import axios from 'axios'
import compose from 'recompose/compose'
import { reduxForm } from 'redux-form'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import { withStyles } from '@mui/styles'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import { ThemeProvider } from '@mui/material/styles'
import { baseApiUrl } from '../../../utils/systemConstans'
import { backdropStyles, paperStyles, formStyles, theme } from '../../assets/styles'
import ProductForm from '../../product/ProductForm'
import CategoryForm from '../../category/CategoryForm'
import SubCategoryForm from '../../sub-category/SubCategoryForm'
import UserForm from '../../user/UserForm'
import OrderForm from '../../order/OrderForm'

const styles = (theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        padding: '15px',
    },
    paper: paperStyles,
    form: formStyles,
    submit: {
        margin: theme.spacing(4, 0, 0),
    },
    backdrop: backdropStyles,
})

class ModalForm extends Component {

    constructor(props) {
        super(props)
        this.state = { showBackDrop: false }
    }

    renderContent(model) {
        switch (model) {
            case 'product':
                return <ProductForm />
            case 'category':
                return <CategoryForm />
            case 'subcategory':
                return <SubCategoryForm />
            case 'user':
                return <UserForm />
            case 'order':
                return <OrderForm />
            default:
                return <CircularProgress color="inherit" />
        }
    }

    onSubmit = async values => {
        const { model, setToInitalState } = this.props
        let body = { ...values }
        let id = values._id === null || values._id === undefined ? '' : values._id
        let method = id ? 'put' : 'post'
        let apiUrl = model.charAt(model.length-1) === 'y' ? model.substring(0, model.length - 1)+'ies' : model + 's'
        if (body) {
            await this.setState({ showBackDrop: true })
            axios[method](`${baseApiUrl}/${apiUrl}/${id}`, body)
                .then(async _ => {
                    await this.setState({ showBackDrop: false })
                    toastr.success('Success', 'Operation carried out successfully.')
                    setToInitalState()
                })
                .catch(async e => {
                    await this.setState({ showBackDrop: false })
                    if (e && e.response && e.response.data) {
                        toastr.error('Error', e.response.data)
                    } else if (typeof e === 'string') {
                        toastr.error('Error', e)
                    } else {
                        toastr.error('Error', 'Oops.. Something went wrong.')
                    }
                })
        } else {
            toastr.error('Erro', 'Preencha os campos obrigatórios')
        }
    }

    render() {
        const { handleSubmit, classes, model } = this.props
        return (
            <div className={classes.root}>
                <div className={classes.paper}>
                    <ThemeProvider theme={theme}>
                        <form className={classes.form} noValidate onSubmit={handleSubmit(this.onSubmit)}>
                            {this.renderContent(model)}
                            <Grid container spacing={0} className={classes.submit} direction='row'>
                                <Grid item xs={7} />
                                <Grid item xs={3}>
                                    <Button style={{ color: '#363638' }} onClick={e => this.props.setToInitalState()}>Cancel</Button>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button type="submit" style={{ backgroundColor: '#00171F', color: '#ffffff' }}>Save</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </ThemeProvider>
                </div >
                <Backdrop className={classes.backdrop} open={this.state.showBackDrop}><CircularProgress color="inherit" /></Backdrop>
            </div>
        )
    }
}

ModalForm = reduxForm({ form: 'ModalForm', enableReinitialize: true })(ModalForm)
ModalForm.propTypes = {
    classes: PropTypes.object.isRequired,
}
const mapStateToProps = state => {
    let initialValues = { ...state[state.modal.model][`current${state.modal.model.charAt(0).toUpperCase() + state.modal.model.slice(1)}`] }
    return { initialValues }
}
export default compose(withStyles(styles, { name: 'ModalForm', withTheme: true }), connect(mapStateToProps, null))(ModalForm)