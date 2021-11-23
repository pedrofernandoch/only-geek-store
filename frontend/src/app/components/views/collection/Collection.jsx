import React, { Component } from 'react'
import "./collection.css"

export default class Collection extends Component {
    render() {
        return (
            <section id="collection" className="section collection">
                <div className="collection__container" data-aos="fade-up" data-aos-duration="1200">
                    <div className="collection__box">
                        <div className="img__container">
                            <img className="collection_02" src="img/collection/goku_adidas.png" alt="Goku with Adidas Clothes" />
                        </div>
                        <div className="collection__content">
                            <div className="collection__data">
                                <span>New releases in all sizes</span>
                                <h1>CLOTHES</h1>
                                <a href="#products">SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className="collection__box">
                        <div className="img__container">
                            <img className="collection_01" src="img/collection/spider-man.png" alt="Spider Man" />
                        </div>
                        <div className="collection__content">
                            <div className="collection__data">
                                <span>Games for all devices</span>
                                <h1>GAMES</h1>
                                <a href="#products">SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
