import React, { Component } from 'react'
export default class GeekNews extends Component {
    render() {
        return (
            <li className="glide__slide">
                <div className="new__card">
                    <div className="card__header">
                        <img src={`img/news/${this.props.imgName}`} alt={this.props.imageAlt} />
                    </div>
                    <div className="card__footer">
                        <h3>{this.props.title}</h3>
                        <span>{this.props.author}</span>
                        <p>{this.props.text}</p>
                        <a target="_blank" rel="noreferrer" href={this.props.link}><button>Read More</button></a>
                    </div>
                </div>
            </li>
        )
    }
}
