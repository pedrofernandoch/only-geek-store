import React, { Component } from 'react'
import "./header.css"

class Header extends Component {

    render() {
        return (
            <div>
                <header id="header" class="header">
                    <div class="navigation">
                        <div class="container">
                            <nav class="nav">
                                <div class="nav__hamburger">
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-menu"></use>
                                    </svg>
                                </div>
                                <div class="nav__logo">
                                    <a href="/" class="scroll-link"><img src="images/onlyGeek/logo.png" alt="" /></a>
                                </div>

                                <div class="nav__menu">
                                    <div class="menu__top">
                                        <span class="nav__category">Only Geek</span>
                                        <a href="/" class="close__toggle">
                                            <svg>
                                                <use xlinkHref="./images/sprite.svg#icon-cross"></use>
                                            </svg>
                                        </a>
                                    </div>
                                    <ul class="nav__list">
                                        <li class="nav__item">
                                            <a href="#header" class="nav__link scroll-link">Home</a>
                                        </li>
                                        <li class="nav__item">
                                            <a href="#category" class="nav__link scroll-link">Categories</a>
                                        </li>
                                        <li class="nav__item">
                                            <a href="#news" class="nav__link scroll-link">News</a>
                                        </li>
                                        <li class="nav__item">
                                            <a href="#contact" class="nav__link scroll-link">Contact</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="nav__icons">
                                    <a href="login.html" class="icon__item">
                                        <svg class="icon__user">
                                            <use xlinkHref="./images/sprite.svg#icon-user"></use>
                                        </svg>
                                    </a>

                                    <a href="/" class="icon__item">
                                        <svg class="icon__search">
                                            <use xlinkHref="./images/sprite.svg#icon-search"></use>
                                        </svg>
                                    </a>

                                    <a href="cart.html" class="icon__item">
                                        <svg class="icon__cart">
                                            <use xlinkHref="./images/sprite.svg#icon-shopping-basket"></use>
                                        </svg>
                                        <span id="cart__total">2</span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
export default Header