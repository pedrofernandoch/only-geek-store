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
                            <div>
                                <span>
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-location"></use>
                                    </svg>
                                </span>
                                Av. Trab. São Carlense, 400 - Centro, São Carlos - SP, 13566-590. Brazil
                            </div>
                            <div>
                                <span>
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-envelop"></use>
                                    </svg>
                                </span>
                                contact@onlygeek.com
                            </div>
                            <div>
                                <span>
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-phone"></use>
                                    </svg>
                                </span>
                                +55 (16)3356-9570
                            </div>
                            <div>
                                <span>
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-paperplane"></use>
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
                    <div class="footer-bottom__box">

                    </div>
                </div>
            </div>
            /*<div>
                <section className="section-padding footer bg-white border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <h4 className="mb-5 mt-0"><a className="logo" href="index.html"><img src="img/logo-footer.png" alt="CitwaShop" /></a></h4>
                                <p className="mb-0"><a className="text-dark" href="/"><i className="mdi mdi-phone" /> +61 525 240 310</a></p>
                                <p className="mb-0"><a className="text-dark" href="/"><i className="mdi mdi-cellphone-iphone" /> 12345 67890, 56847-98562</a></p>
                            </div>
                            <div className="col-lg-2 col-md-2">
                                <h6 className="mb-4">TOP CITIES </h6>
                                <ul>
                                    <li><a href="/">New Delhi</a></li>
                                    <li><a href="/">Bengaluru</a></li>
                                    <li><a href="/">Hyderabad</a></li>
                                    <li><a href="/">Kolkata</a></li>
                                    <li><a href="/">Gurugram</a></li>
                                    <ul>
                                    </ul></ul></div>
                            <div className="col-lg-2 col-md-2">
                                <h6 className="mb-4">CATEGORIES</h6>
                                <ul>
                                    <li><a href="/">Vegetables</a></li>
                                    <li><a href="/">Grocery &amp; Staples</a></li>
                                    <li><a href="/">Breakfast &amp; Dairy</a></li>
                                    <li><a href="/">Soft Drinks</a></li>
                                    <li><a href="/">Biscuits &amp; Cookies</a></li>
                                    <ul>
                                    </ul></ul></div>
                            <div className="col-lg-2 col-md-2">
                                <h6 className="mb-4">ABOUT US</h6>
                                <ul>
                                    <li><a href="/">Company Information</a></li>
                                    <li><a href="/">Careers</a></li>
                                    <li><a href="/">Store Location</a></li>
                                    <li><a href="/">Affillate Program</a></li>
                                    <li><a href="/">Copyright</a></li>
                                    <ul>
                                    </ul></ul></div>
                            <div className="col-lg-3 col-md-3">
                                <h6 className="mb-4">Download App</h6>
                                <div className="app">
                                    <a href="/"><img src="img/google.png" alt="teste" /></a>
                                    <a href="/"><img src="img/apple.png" alt="teste" /></a>
                                </div>
                                <h6 className="mb-3 mt-4">GET IN TOUCH</h6>
                                <div className="footer-social">
                                    <a className="btn-facebook" href="/"><i className="mdi mdi-facebook" /></a>
                                    <a className="btn-twitter" href="/"><i className="mdi mdi-twitter" /></a>
                                    <a className="btn-instagram" href="/"><i className="mdi mdi-instagram" /></a>
                                    <a className="btn-whatsapp" href="/"><i className="mdi mdi-whatsapp" /></a>
                                    <a className="btn-messenger" href="/"><i className="mdi mdi-facebook-messenger" /></a>
                                    <a className="btn-google" href="/"><i className="mdi mdi-google" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >*/
        )
    }
}