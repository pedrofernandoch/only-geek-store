import React, { Component } from 'react'
import { Paper } from '@material-ui/core';
import Slider from "react-slick";
import parse from 'html-react-parser';
//import { GetProductDetails } from '../../services';
import { connect } from 'react-redux';
import { addToCart } from '../../../store/actions/cartActions';
import producstData from '../products/producstData';
import './single-product.css'
class Singleproduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: '',
        }
    }
    async componentDidMount() {
        window.scrollTo(0, 0)
        let url = window.location.href.split('/');
        var lastSegment = url.pop() || url.pop();
        // let list = await GetProductDetails.getProductById(lastSegment);
        this.setState({ product: producstData[lastSegment || 0] })
    }
    render() {
        const { product } = this.state;
        const settings = {
            customPaging: function (i) {
                return (
                    <div id="sync1" className="owl-carousel">
                        <div className="item">
                            <img src={product.productphotos[i].imgUrl} alt={product.desc} />
                        </div>
                    </div>
                );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div>
                <section className="pt-3 pb- page-info section-padding border-bottom bg-white single-product-header-bk">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <a href="/"><strong><span className="mdi mdi-home" /> Home</strong></a> <span className="mdi mdi-chevron-right" /> <a href="/#products">Products</a> <span className="mdi mdi-chevron-right" /> <a href="/">{product.category}</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="shop-single section-padding pt-3">
                    <div className="container">
                        {
                            product ?
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="shop-detail-left">
                                            <Paper className="shop-detail-slider">
                                                <Slider {...settings}>
                                                    {
                                                        product.productphotos ?
                                                            product.productphotos.map((r, index) => {
                                                                return (
                                                                    <div key={index}>
                                                                        <img src={"../../../../../" + r.imgUrl} className="img-fluid img-center" alt={product.desc} />
                                                                    </div>
                                                                )
                                                            })
                                                            : "Please Upload Image"
                                                    }

                                                </Slider>

                                            </Paper>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="shop-detail-right">
                                            <div class="block">
                                                <span className="badge badge-success">{product.discountPer}% OFF</span>
                                                <h2>{product.name}</h2>
                                                <h6><strong><span className="mdi mdi-approval" /> In stock</strong> - {product.unitSize}</h6>
                                                <div className="pdp-product__old-price">
                                                    <span className="space__right--2-unit">Product MRP:</span><span className="regular-price">$ {product.price}</span>
                                                </div>

                                                <div className="pdp-product__new-price">
                                                    <span className="space__right--2-unit">Selling price:</span>
                                                    <span className="pdp-product__price--new">$ {product.netPrice}</span>
                                                    <div className="pdp-product__tax-disclaimer">(Inclusive of all taxes)</div>
                                                </div>
                                            </div>

                                            <button type="button" className="btn btn-secondarycart btn-lg" onClick={() => this.props.addToCart(product)}><i className="mdi mdi-cart-outline" /> Add To Cart</button>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="feature-box">
                                                        <i className="mdi mdi-truck-fast" />
                                                        <h6 className="text-info"><span>Easy Returns &amp; Refunds</span></h6>
                                                        <p>Return products at doorstep and get refund in seconds.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="feature-box">
                                                        <i className="mdi mdi-basket" />
                                                        <h6 className="text-info">Lowest price guaranteed</h6>
                                                        <p>Get difference refunded if you find it cheaper anywhere else.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="pdpt-bg">
                                            <div className="pdpt-title">
                                                <h4>Product Details</h4>
                                            </div>
                                            <div className="pdpt-body scrollstyle_4">
                                                <div className="pdct-dts-1 short-desc">
                                                    {parse(product.desc)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : "Loading"
                        }
                    </div>
                </section>
            </div>
        )
    }
}

export default connect(null, { addToCart })(Singleproduct);