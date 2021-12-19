import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProductCard from '../product-card/ProductCard'
import { setProducts } from './productListActions'
import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { baseApiUrl } from '../../../../../utils/systemConstans'
import If from '../../../../../utils/operators/If'
import ProductView from '../product-view/ProductView'

const buttonStyleReset = { backgroundColor: 'var(--ocean-blue)', color: 'white', border: 'none', padding: 0, cursor: 'pointer' }
class ProductList extends Component {

    constructor(){
        super()
        this.state = {
            allProducts: 'active',
            animes: '',
            games: '',
            series: '',
            selectedProduct: {},
            showProductView: false,
            dialogState: false,
        }
    }

    componentDidMount() {
        axios.get(`${baseApiUrl}/products`)
            .then(res => {
                this.props.setProducts(res.data)
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

    renderProducts(products) {
        if (products.length > 0) {
            return products.map(product => {
                return <ProductCard setStateProductList={this.changeState.bind(this)} product={product} key={product._id} />
            })
        }
    }

    changeState(newState) {
        this.setState({
            ...newState
        })
    }

    changeCategory(e) {
        switch (e.target.innerHTML) {
            case 'All Products':
                this.setState({allProducts: 'active', animes: '', games: '', series: ''})
                break
            case 'Animes':
                this.setState({allProducts: '', animes: 'active', games: '', series: ''})
                break
            case 'Games':
                this.setState({allProducts: '', animes: '', games: 'active', series: ''})
                break
            case 'Series':
                this.setState({allProducts: '', animes: '', games: '', series: 'active'})
                break
            default:
                this.setState({allProducts: 'active', animes: '', games: '', series: ''})
        }
    }

    handleClose(){
        this.setState({showProductView: false})
    }

    render() {
        return (
            <>
            <section className="category__section section" id="category">
                <div className="tab__list">
                    <div className="title__container tabs">
                        <div className="section__titles category__titles ">
                            <div className={`section__title filter-btn ${this.state.allProducts}`} data-id="All Products">
                                <span className="dot"></span>
                                <button style={buttonStyleReset} onClick={this.changeCategory.bind(this)}><h1 className="primary__title">All Products</h1></button>
                            </div>
                        </div>
                        <div className="section__titles">
                            <div className={`section__title filter-btn ${this.state.animes}`} data-id="Anime">
                                <span className="dot"></span>
                                <button style={buttonStyleReset} onClick={this.changeCategory.bind(this)}><h1 className="primary__title">Animes</h1></button>
                            </div>
                        </div>

                        <div className="section__titles">
                            <div className={`section__title filter-btn ${this.state.games}`} data-id="Games">
                                <span className="dot"></span>
                                <button style={buttonStyleReset} onClick={this.changeCategory.bind(this)}><h1 className="primary__title">Games</h1></button>
                            </div>
                        </div>

                        <div className="section__titles">
                            <div className={`section__title filter-btn ${this.state.series}`} data-id="Series">
                                <span className="dot"></span>
                                <button style={buttonStyleReset} onClick={this.changeCategory.bind(this)}><h1 className="primary__title">Series</h1></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="category__container">
                    <div className="category__center">
                        {this.renderProducts.bind(this)(this.props.products)}
                    </div>
                </div>
            </section >
            <If test={this.state.showProductView}>
                <ProductView handleClose={this.handleClose.bind(this)} dialogState={this.state.dialogState} product={this.state.selectedProduct}/>
            </If>
            
            </>
        )
    }
}
const mapStateToProps = state => {
    const initialState = {
        products: state.productList.products
    }
    return initialState
}
const mapDispatchToProps = dispatch => bindActionCreators({
    setProducts,
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)