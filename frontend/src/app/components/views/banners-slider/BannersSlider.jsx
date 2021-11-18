import React, { Component } from 'react'
import Slider from "react-slick";
import Banner from './Banner';
import bannerData from './bannerData'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banners-slider.css";
export default class Bannerslider extends Component {

    generateBannerComponents() {
        var bannerComponents = [];
        for (var i = 0; i < bannerData.length; i++) {
            bannerComponents.push(
                <div key={i}>
                    <Banner title={bannerData[i].title} bigTitle={bannerData[i].bigTitle}
                        description={bannerData[i].description} imgName={bannerData[i].imgName} imgAlt={bannerData[i].imgAlt} />
                </div>
            )
        }
        return bannerComponents;
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
                        {this.generateBannerComponents()}
                    </Slider>
                </ul>
            </div>
        )
    }
}
