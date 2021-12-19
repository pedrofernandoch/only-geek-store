import React, { Component } from 'react'

class ProductList extends Component {

    render() {
        return (
            <section className="category__section section" id="category">
                <div className="tab__list">
                    <div className="title__container tabs">
                        <div className="section__titles category__titles ">
                            <div className="section__title filter-btn active" data-id="All Products">
                                <span className="dot"></span>
                                <h1 className="primary__title">All Products</h1>
                            </div>
                        </div>
                        <div className="section__titles">
                            <div className="section__title filter-btn" data-id="Anime">
                                <span className="dot"></span>
                                <h1 className="primary__title">Anime</h1>
                            </div>
                        </div>

                        <div className="section__titles">
                            <div className="section__title filter-btn" data-id="Games">
                                <span className="dot"></span>
                                <h1 className="primary__title">Games</h1>
                            </div>
                        </div>

                        <div className="section__titles">
                            <div className="section__title filter-btn" data-id="Series">
                                <span className="dot"></span>
                                <h1 className="primary__title">Series</h1>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="category__container" data-aos="fade-up" data-aos-duration="1200">
                    <div className="category__center"></div>
                </div>
            </section >
        )
    }
}
export default ProductList