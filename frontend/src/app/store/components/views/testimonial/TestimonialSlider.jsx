import React, { Component } from 'react'
import Testimonial from './Testimonial';
import testimonialData from './testimonialData'
import "./testimonial-slider.css";
export default class Testimonialslider extends Component {

    generateTestimonialComponents() {
        var testimonialComponents = [];
        for (var i = 0; i < testimonialData.length; i++) {
            testimonialComponents.push(
                <div key={i}>
                    <Testimonial name={testimonialData[i].name} job={testimonialData[i].job}
                        text={testimonialData[i].text} imgName={testimonialData[i].imgName} imgAlt={testimonialData[i].imgAlt} />
                </div>
            )
        }
        return testimonialComponents;
    }

    render() {
        return (
            <section className="section testimonial" id="testimonial">
                <div className="testimonial__container">
                    <div className="glide" id="glide_4">
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                {this.generateTestimonialComponents()}
                            </ul>
                        </div>
                        <div className="glide__bullets" data-glide-el="controls[nav]">
                            <button className="glide__bullet" data-glide-dir="=0"></button>
                            <button className="glide__bullet" data-glide-dir="=1"></button>
                            <button className="glide__bullet" data-glide-dir="=2"></button>
                            <button className="glide__bullet" data-glide-dir="=3"></button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
