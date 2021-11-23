import React, { Component } from 'react'
export default class Testimonial extends Component {
    render() {
        return (
            <li className="glide__slide">
                <div className="testimonial__box">
                    <div className="client__image">
                        <img src={`img/testimonial/${this.props.imgName}`} alt={this.props.imageAlt} />
                    </div>
                    <div className="client__info">
                        <h3>{this.props.name}</h3>
                        <br />
                        <span>{this.props.job}</span>
                    </div>
                    <br />
                    <p>{this.props.text}</p>
                </div>
            </li>
        )
    }
}
