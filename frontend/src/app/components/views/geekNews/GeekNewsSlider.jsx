import React, { Component } from 'react'
import Slider from "react-slick";
import GeekNews from './GeekNews';
import geekNewsData from './geekNewsData'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./geek-news.css";
export default class GeekNewsSlider extends Component {

    generateGeekNewsComponents() {
        var geekNewsComponents = [];
        for (var i = 0; i < geekNewsData.length; i++) {
            geekNewsComponents.push(
                <div key={i}>
                    <GeekNews title={geekNewsData[i].title} bigTitle={geekNewsData[i].bigTitle}
                        description={geekNewsData[i].description} imgName={geekNewsData[i].imgName} imgAlt={geekNewsData[i].imgAlt} />
                </div>
            )
        }
        return geekNewsComponents;
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        };

        return (
            <section class="section news" id="news">
                <div class="container">
                    <div class="title__container">
                        <div class="section__titles">
                            <div class="section__title active">
                                <span class="dot"></span>
                                <h1 class="primary__title">Geek News</h1>
                            </div>
                        </div>
                    </div>
                    <div class="news__container">
                        <div class="glide" id="glide_5">
                            <div class="glide__track" data-glide-el="track">
                                <ul className="glide__slides">
                                    <Slider {...settings}>
                                        {this.generateGeekNewsComponents()}
                                    </Slider>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
           </section>   
        )
    }
}

