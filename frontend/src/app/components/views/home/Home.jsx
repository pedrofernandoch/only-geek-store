import React, { Component } from 'react'
import Bannerslider from '../banners-slider/BannersSlider';
import Testimonialslider from '../testimonial/TestimonialSlider';
import Collection from '../collection/Collection';
import GeekNewsSlider from '../geekNews/GeekNewsSlider';
//import Topsection from '../top-section/TopSection';
// import Bestofferbanner from './best-offers-banner';
// import Topstample from './top-stample';

export default class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                <Bannerslider />
                <Collection />
                <Testimonialslider />
                <GeekNewsSlider />
                {/* <Topsection /> */}
                {/*<<Bestofferbanner />
                <Topstample />*/}
            </div>
        )
    }
}
