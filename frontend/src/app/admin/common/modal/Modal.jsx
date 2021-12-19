import React, { Component } from 'react'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import If from '../../../utils/operators/If'
import { baseApiUrl } from '../../../utils/systemConstans'
import { setProductToInitialState } from '../../product/productActions'
import { setUserToInitialState } from '../../user/userActions'
import { setSubCategoryToInitialState, setSubCategoryOptions } from '../../sub-category/subCategoryActions'
import { setCategoryToInitialState, setCategoryOptions } from '../../category/categoryActions'
import { setOrderToInitialState } from '../../order/orderActions'
import { setModalVisibility, setModalToInitialState } from './modalActions'
import ModalForm from './ModalForm'

class Modal extends Component {

    constructor(props) {
        super(props)
        this.state = { mounted: false,  }
    }

    componentDidMount() {
        const {
            setModalToInitialState,
            model,
            modalCrudType,
            setCategoryOptions,
            setSubCategoryOptions,
        } = this.props

        if (modalCrudType !== 'delete' && model === 'product') {
            const categoryRequest = axios.get(`${baseApiUrl}/categories`)
            const subCategoryRequest = axios.get(`${baseApiUrl}/subcategories`)
            const promiseArray = [categoryRequest, subCategoryRequest]
            Promise.all(promiseArray)
                .then(payload => {
                    setCategoryOptions(payload[0].data)
                    setSubCategoryOptions(payload[1].data)
                    this.setState({ mounted: true })
                })
                .catch(e => {
                    if (e && e.response && e.response.data) {
                        toastr.error('Erro', e.response.data)
                    } else if (typeof e === 'string') {
                        toastr.error('Erro', e)
                    } else {
                        toastr.error('Erro', 'Oops.. Erro inesperado.')
                    }
                    setModalToInitialState()
                })
        }
        else this.setState({ mounted: true })
    }

    setToInitalState = _ => {
        const { model, modalCrudType, setProductToInitialState, setUserToInitialState,
            setSubCategoryToInitialState, setCategoryToInitialState, setOrderToInitialState, setModalToInitialState } = this.props
        if (modalCrudType !== 'delete') {
            switch (model) {
                case 'product':
                    setProductToInitialState()
                    break;
                case 'category':
                    setCategoryToInitialState()
                    break;
                case 'subcategory':
                    setSubCategoryToInitialState()
                    break;
                case 'user':
                    setUserToInitialState()
                    break;
                case 'order':
                    setOrderToInitialState()
                    break;
                default:
                    break;
            }
        }
        setModalToInitialState()
    }

    remove(id, model) {
        let apiUrl = model.charAt(model.length-1) === 'y' ? model.substring(0, model.length - 1)+'ies' : model + 's'
        axios.delete(`${baseApiUrl}/${apiUrl}/${id}`)
            .then(resp => {
                toastr.success('Success', 'Operation carried out successfully.')
            })
            .catch(e => {
                if (e && e.response && e.response.data) {
                    toastr.error('Error', e.response.data)
                } else if (typeof e === 'string') {
                    toastr.error('Error', e)
                } else {
                    toastr.error('Error', 'Oops.. Something went wrong.')
                }
            })
    }

    removeAndSetToInitialState = _ => {
        const { entityId, model, setModalToInitialState } = this.props
        this.remove(entityId, model)
        setModalToInitialState()
    }

    render() {
        const { modalVisibility, modalCrudType, modalTitle } = this.props
        return (
            <>
                <Dialog maxWidth={modalCrudType === 'delete' ? 'sm' : 'md'} open={modalVisibility} onClose={this.setToInitalState}>
                    <DialogTitle>{modalTitle}</DialogTitle>
                    <If test={modalCrudType === 'delete'}>
                        <DialogContent>
                            <DialogContentText>
                                By deleting this record it will no longer be available in the database permanently. Do you really want to delete?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.setToInitalState} style={{ color: '#363638' }}>Cancel</Button>
                            <Button onClick={this.removeAndSetToInitialState} style={{ color: '#00171F' }}>Delete</Button>
                        </DialogActions>
                    </If>
                    <If test={modalCrudType !== 'delete'}>
                        <DialogContent>
                            <ModalForm modalCrudType={this.props.modalCrudType} model={this.props.model} setToInitalState={this.setToInitalState} />
                        </DialogContent>
                    </If>
                </Dialog>
            </>
        )
    }
}

const mapStateToProps = state => {
    const initialState = {
        modalVisibility: state.modal.modalVisibility,
        modalTitle: state.modal.modalTitle,
        modalCrudType: state.modal.modalCrudType,
        entityId: state.modal.entityId,
        model: state.modal.model,
    }
    return initialState
}
const mapDispatchToProps = dispatch => bindActionCreators({
    setModalVisibility,
    setModalToInitialState,
    setProductToInitialState,
    setUserToInitialState,
    setCategoryToInitialState,
    setSubCategoryToInitialState,
    setOrderToInitialState,
    setSubCategoryOptions,
    setCategoryOptions
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Modal)