import React, { Component } from 'react'

class ProductList extends Component {

    render() {
        return (
            <section class="category__section section" id="category">
                <div class="tab__list">
                    <div class="title__container tabs">
                        <div class="section__titles category__titles ">
                            <div class="section__title filter-btn active" data-id="All Products">
                                <span class="dot"></span>
                                <h1 class="primary__title">All Products</h1>
                            </div>
                        </div>
                        <div class="section__titles">
                            <div class="section__title filter-btn" data-id="Anime">
                                <span class="dot"></span>
                                <h1 class="primary__title">Anime</h1>
                            </div>
                        </div>

                        <div class="section__titles">
                            <div class="section__title filter-btn" data-id="Games">
                                <span class="dot"></span>
                                <h1 class="primary__title">Games</h1>
                            </div>
                        </div>

                        <div class="section__titles">
                            <div class="section__title filter-btn" data-id="Series">
                                <span class="dot"></span>
                                <h1 class="primary__title">Series</h1>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="category__container" data-aos="fade-up" data-aos-duration="1200">
                    <div class="category__center"></div>
                </div>
            </section >
        )
    }
}
export default ProductList