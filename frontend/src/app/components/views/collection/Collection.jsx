import React, { Component } from 'react'
import "./collection.css"

export default class Collection extends Component {
    render() {
        return (
            <section id="collection" class="section collection">
                <div class="collection__container" data-aos="fade-up" data-aos-duration="1200">
                    <div class="collection__box">
                        <div class="img__container">
                            <img class="collection_02" src="img/collection/goku_adidas.png" alt="Goku with Adidas Clothes" />
                        </div>
                        <div class="collection__content">
                            <div class="collection__data">
                                <span>New releases in all sizes</span>
                                <h1>CLOTHES</h1>
                                <a href="#shop">SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                    <div class="collection__box">
                        <div class="img__container">
                            <img class="collection_01" src="img/collection/spider-man.png" alt="Spider Man" />
                        </div>
                        <div class="collection__content">
                            <div class="collection__data">
                                <span>Games for all devices</span>
                                <h1>GAMES</h1>
                                <a href="/">SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
