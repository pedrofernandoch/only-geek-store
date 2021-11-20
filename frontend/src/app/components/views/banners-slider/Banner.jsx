import React, { Component } from 'react'
export default class Banner extends Component {
    render() {
        return (
            <li>
                <div className="hero__center">
                    <div className="hero__left">
                        <span>{this.props.title}</span>
                        <h1>{this.props.bigTitle}</h1>
                        <p>{this.props.description}</p>
                        <a href="#products"><button className="hero__btn">SHOP NOW</button></a>
                    </div>
                    <div className="hero__right">
                        <img className="banner" src={`img/banners/${this.props.imgName}`} alt={this.props.imageAlt} />
                    </div>
                </div>
            </li>
        )
    }
}
