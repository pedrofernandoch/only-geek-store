import React, { Component } from 'react'
import "./header.css"
import { setAdminSession } from '../../../../storeOrAdminActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class Header extends Component {

    render() {
        return (
            <div>
                <header id="header" className="header">
                    <div className="navigation">
                        <div className="container">
                            <nav className="nav">
                                <div className="nav__hamburger">
                                    <svg>
                                        <use xlinkHref="img/sprite.svg#icon-menu"></use>
                                    </svg>
                                </div>
                                <div className="nav__logo">
                                    <a href="/" className="scroll-link"><img src="img/onlyGeek/logo.png" alt="" /></a>
                                </div>

                                <div className="nav__menu">
                                    <div className="menu__top">
                                        <span className="nav__category">Only Geek</span>
                                        <a href="/" className="close__toggle">
                                            <svg>
                                                <use xlinkHref="img/sprite.svg#icon-cross"></use>
                                            </svg>
                                        </a>
                                    </div>
                                    <ul className="nav__list">
                                        <li className="nav__item">
                                            <a href="#header" className="nav__link scroll-link">Home</a>
                                        </li>
                                        <li className="nav__item">
                                            <a href="#category" className="nav__link scroll-link">Categories</a>
                                        </li>
                                        <li className="nav__item">
                                            <a href="#news" className="nav__link scroll-link">News</a>
                                        </li>
                                        <li className="nav__item">
                                            <a href="#facility" className="nav__link scroll-link">Facilities</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="nav__icons">

                                    <button className="icon__item" onClick={e => this.props.setAdminSession(true)}>
                                        Go to Admin
                                    </button>

                                    <a href="login.html" className="icon__item">
                                        <svg className="icon__user">
                                            <use xlinkHref="img/sprite.svg#icon-user"></use>
                                        </svg>
                                    </a>

                                    <a href="/" className="icon__item">
                                        <svg className="icon__search">
                                            <use xlinkHref="img/sprite.svg#icon-search"></use>
                                        </svg>
                                    </a>

                                    <a href="cart.html" className="icon__item">
                                        <svg className="icon__cart">
                                            <use xlinkHref="img/sprite.svg#icon-shopping-basket"></use>
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


const mapDispatchToProps = dispatch => bindActionCreators({
    setAdminSession,
}, dispatch)
export default connect(null, mapDispatchToProps)(Header)