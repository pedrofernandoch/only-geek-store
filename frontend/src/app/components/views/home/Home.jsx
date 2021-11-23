import React, { Component } from 'react'
import BannersSlider from '../banners-slider/BannersSlider';
import Collection from '../collection/Collection';
import Products from '../products/Products';
import Testimonialslider from '../testimonial/TestimonialSlider';
import GeekNewsSlider from '../geekNews/GeekNewsSlider';
import Facility from '../../facility/Facility';

export default class Home extends Component {
    render() {
        return (
            <div>
                <BannersSlider />
                <main id="main">
                    <div className="container">
                        <Collection />
                        <Products />
                    </div>
                    <Testimonialslider />
                    <GeekNewsSlider />
                    <Facility />
                </main>
            </div>
        )
    }
}
