import React, { Component } from 'react'
import "./testimonial-slider.css";
export default class Testimonial extends Component {
    render() {
        return (
            <li>

                <div className="hero__centertest">
                    <div className="hero__left">
                        <span>{this.props.title}</span>
                        <h1>{this.props.bigTitle}</h1>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="hero__right">
                        <img className="testimonial" src={`img/testimonial/${this.props.imgName}`} alt={this.props.imageAlt} />
                    </div>
                </div>

                {/*<div className="testimonial_box">
                    <div clas="client_image">
                        <img className="testimonial" src={`img/testimonial/${this.props.imgName}`} alt={this.props.imageAlt} />
                    </div>
                    <div class="client_info">
                        <span>{this.props.title}</span>
                        <p>{this.props.description}</p>
                        <span>{this.props.title}</span>
                        <h1>{this.props.bigTitle}</h1>
                    </div>
                </div>*/}
            </li>
        )
    }
}
