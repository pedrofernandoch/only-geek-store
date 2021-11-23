import React, { Component } from 'react'
import Banner from './Banner';
import bannerData from './bannerData'
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
        return (
            <div className="hero">
                <div className="glide" id="glide_1">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            {this.generateBannerComponents()}
                        </ul>
                    </div>
                    <div className="glide__bullets" data-glide-el="controls[nav]">
                        <button className="glide__bullet" data-glide-dir="=0"></button>
                        <button className="glide__bullet" data-glide-dir="=1"></button>
                        <button className="glide__bullet" data-glide-dir="=2"></button>
                        <button className="glide__bullet" data-glide-dir="=2"></button>
                    </div>

                    <div className="glide__arrows" data-glide-el="controls">
                        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                            <svg>
                                <use xlinkHref="img/sprite.svg#icon-arrow-left2"></use>
                            </svg>
                        </button>
                        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                            <svg>
                                <use xlinkHref="img/sprite.svg#icon-arrow-right2"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
