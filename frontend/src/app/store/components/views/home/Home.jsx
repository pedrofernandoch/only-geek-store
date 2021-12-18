import React, { Component } from 'react'
import BannersSlider from '../banners-slider/BannersSlider';
import Collection from '../collection/Collection';
import ProductList from '../product-list/ProductList';
import Testimonialslider from '../testimonial/TestimonialSlider';
import GeekNewsSlider from '../geek-news/GeekNewsSlider';
import Facility from '../../facility/Facility';

export default class Home extends Component {
    render() {
        return (
            <div>
                <BannersSlider />
                <main id="main">
                    <div className="container">
                        <Collection />
                        <ProductList />
                    </div>
                    <Testimonialslider />
                    <GeekNewsSlider />
                    <Facility />
                </main>
            </div>
        )
    }
}
