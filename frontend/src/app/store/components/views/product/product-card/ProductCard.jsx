import React, { Component } from 'react'

class ProductCard extends Component {

    render() {
        return (
            <div className="product category__products">
                <div className="product__header">
                    <img src={this.props.product.photo} alt="product" />
                </div>
                <div className="product__footer">
                    <h3>{this.props.product.name}</h3>
                    <div className="product__price">
                        <h4>${this.props.product.price}</h4>
                    </div>
                    <button onClick={e => this.props.setStateProductList({showProductView: true, selectedProduct: this.props.product, dialogState: true})} className="product__btn">View</button>
                </div>
                <ul>
                    <li>
                        <a data-tip="Quick View" data-place="left" href="/">
                            <svg>
                                <use xlinkHref="img/sprite.svg#icon-eye"></use>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="/">
                            <svg>
                                <use xlinkHref="img/sprite.svg#icon-heart-o"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ProductCard