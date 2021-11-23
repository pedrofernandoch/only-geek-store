import React, { Component } from 'react'
import GeekNews from './GeekNews';
import geekNewsData from './geekNewsData'
import "./geek-news.css";
export default class GeekNewsSlider extends Component {

    generateGeekNewsComponents() {
        var geekNewsComponents = [];
        for (var i = 0; i < geekNewsData.length; i++) {
            geekNewsComponents.push(
                <div key={i}>
                    <GeekNews title={geekNewsData[i].title} author={geekNewsData[i].author} link={geekNewsData[i].link}
                        text={geekNewsData[i].text} imgName={geekNewsData[i].imgName} imgAlt={geekNewsData[i].imgAlt} />
                </div>
            )
        }
        return geekNewsComponents;
    }

    render() {
        return (
            <section className="section news" id="news" >
                <div className="container">
                    <div className="title__container">
                        <div className="section__titles">
                            <div className="section__title active">
                                <span className="dot"></span>
                                <h1 className="primary__title">Geek News</h1>
                            </div>
                        </div>
                    </div>
                    <div className="news__container">
                        <div className="glide" id="glide_5">
                            <div className="glide__track" data-glide-el="track">
                                <ul className="glide__slides">
                                    {this.generateGeekNewsComponents()}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}