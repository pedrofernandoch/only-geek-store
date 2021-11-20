import React, { Component } from 'react'
import Bannerslider from '../banners-slider/BannersSlider';
import Testimonialslider from '../testimonial/TestimonialSlider';
import Collection from '../collection/Collection';
import GeekNewsSlider from '../geekNews/GeekNewsSlider';
import Products from '../products/Products';

export default class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                <Bannerslider />
                <Collection />
                <Products />
                <Testimonialslider />
                <GeekNewsSlider />
            </div>
        )
    }
}
