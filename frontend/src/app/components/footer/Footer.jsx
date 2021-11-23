import React, { Component } from 'react'
import "./footer.css"

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="section footer">
                <div className="container">
                    <div className="footer__top">
                        <div className="footer-top__box">
                            <h3>EXTRAS</h3>
                            <a href="#footer">Brands</a>
                            <a href="#footer">Gift Certificates</a>
                            <a href="#footer">Affiliate</a>
                            <a href="#footer">Specials</a>
                            <a href="#footer">Site Map</a>
                        </div>
                        <div className="footer-top__box">
                            <h3>INFORMATION</h3>
                            <a href="#footer">About Us</a>
                            <a href="#footer">Privacy Policy</a>
                            <a href="#footer">Terms & Conditions</a>
                            <a href="#footer">Contact Us</a>
                            <a href="#footer">Site Map</a>
                        </div>
                        <div className="footer-top__box">
                            <h3>MY ACCOUNT</h3>
                            <a href="#footer">My Account</a>
                            <a href="#footer">Order History</a>
                            <a href="#footer">Wish List</a>
                            <a href="#footer">Newsletter</a>
                            <a href="#footer">Returns</a>
                        </div>
                        <div className="footer-top__box">
                            <h3>CONTACT US</h3>
                            <div>
                                <span>
                                    <svg>
                                        <use xlinkHref="img/sprite.svg#icon-location"></use>
                                    </svg>
                                </span>
                                Av. Trab. São Carlense, 400 - Centro, São Carlos - SP, 13566-590. Brazil
                            </div>
                            <div>
                                <span>
                                    <svg>
                                        <use xlinkHref="img/sprite.svg#icon-envelop"></use>
                                    </svg>
                                </span>
                                contact@onlygeek.com
                            </div>
                            <div>
                                <span>
                                    <svg>
                                        <use xlinkHref="img/sprite.svg#icon-phone"></use>
                                    </svg>
                                </span>
                                +55 (16)3356-9570
                            </div>
                            <div>
                                <span>
                                    <svg>
                                        <use xlinkHref="img/sprite.svg#icon-paperplane"></use>
                                    </svg>
                                </span>
                                São Carlos - SP, Brazil
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer-bottom__box">
                    </div>
                    <div className="footer-bottom__box">
                    </div>
                </div>
            </footer >
        )
    }
}