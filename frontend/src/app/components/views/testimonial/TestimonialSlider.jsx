import React, { Component } from 'react'
import Slider from "react-slick";
import Testimonial from './Testimonial';
import testimonialData from './testimonialData'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial-slider.css";
export default class Testimonialslider extends Component {

    generateTestimonialComponents() {
        var testimonialComponents = [];
        for (var i = 0; i < testimonialData.length; i++) {
            testimonialComponents.push(
                <div key={i}>
                    <Testimonial title={testimonialData[i].title} bigTitle={testimonialData[i].bigTitle}
                        description={testimonialData[i].description} imgName={testimonialData[i].imgName} imgAlt={testimonialData[i].imgAlt} />
                </div>
            )
        }
        return testimonialComponents;
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="hero">
                <ul className="glide__slides">
                    <Slider {...settings}>
                        {this.generateTestimonialComponents()}
                    </Slider>
                </ul>
            </div>
        )
    }
}
