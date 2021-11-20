import React, { Component } from 'react'
import "./footer.css"

export default class Footer extends Component {
    render() {
        console.log("Footer");
        return (
            <div id="footer" class="section footer">
                <div class="container">
                    <div class="footer__top">
                        <div class="footer-top__box">
                            <h3>EXTRAS</h3>
                            <a href="/">Brands</a>
                            <a href="/">Gift Certificates</a>
                            <a href="/">Affiliate</a>
                            <a href="/">Specials</a>
                            <a href="/">Site Map</a>
                        </div>
                        <div class="footer-top__box">
                            <h3>INFORMATION</h3>
                            <a href="/">About Us</a>
                            <a href="/">Privacy Policy</a>
                            <a href="/">Terms & Conditions</a>
                            <a href="/">Contact Us</a>
                            <a href="/">Site Map</a>
                        </div>
                        <div class="footer-top__box">
                            <h3>MY ACCOUNT</h3>
                            <a href="/">My Account</a>
                            <a href="/">Order History</a>
                            <a href="/">Wish List</a>
                            <a href="/">Newsletter</a>
                            <a href="/">Returns</a>
                        </div>
                        <div class="footer-top__box">
                            <h3>CONTACT US</h3>
                            <div class="footer-text">
                                <span>
                                    <svg>
                                        <use xlinkHref="img/sprite.svg#icon-location"></use>
                                    </svg>
                                </span>
                                Av. Trab. São Carlense,
                                400 - Centro, São Carlos -
                                SP, 13566-590. Brazil
                            </div>
                            <div class="footer-text">
                                <span>
                                    <svg>
                                        <use xlinkHref="img/sprite.svg#icon-envelop"></use>
                                    </svg>
                                </span>
                                contact @onlygeek.com
                            </div>
                            <div class="footer-text">
                                <span>
                                    <svg>
                                        <use xlinkHref="img/sprite.svg#icon-phone"></use>
                                    </svg>
                                </span>
                                +55 (16)3356-9570
                            </div>
                            <div class="footer-text">
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
                <div class="footer__bottom">
                    <div class="footer-bottom__box">
                    </div>
                </div>
            </div>
        )
    }
}