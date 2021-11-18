import React, { Component } from 'react'
import "./geek-news.css";
export default class GeekNews extends Component {
    render() {
        return (
            <li class="glide__slide">
                <div class="new__card">
                    <div class="card__header">
                        <img className="banner" src={`img/news/${this.props.imgName}`} alt={this.props.imageAlt} />
                    </div>
                    <div class="card__footer">
                        <h3>{this.props.title}</h3>
                        <span>{this.props.bigTitle}</span>
                        <p>{this.props.description}</p>
                        <a target="_blank" rel="noreferrer" href="https://br.ign.com/demon-slayer/93368/news/demon-slayer-kimetsu-no-yaiba-temporada-2-data-estreia-lancamento-brasil">
                            <button>Read More</button>
                        </a>
                    </div>
                </div>
            </li>
        )
    }
}
