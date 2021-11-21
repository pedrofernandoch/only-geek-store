import React, { Component } from 'react'
import Login from '../../auth/login/Login';
//import { withRouter } from 'react-router-dom';
import Cartsidebar from '../views/cart-sidebar/CartSidebar';
import { GetUserLogin } from '../../components/services';
import "./header.css"

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '', userName: '', searchtxt: ''
        };
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    async componentDidMount() {
        let cookies = await GetUserLogin.isAuthenticate();
        this.setState({ token: cookies })
        let email = sessionStorage.getItem('email')
        if (email) {
            let user = await GetUserLogin.getCustomerDetail(email);
            if (user) {
                this.setState({ userName: user.data.firstName })
            }
        }
    }
    handleLogout = async (event) => {
        event.preventDefault();
        await GetUserLogin.logout();
    }
    handleClickSearch = event => {
        let { searchtxt } = this.state;
        this.props.history.push(`/product/catalogsearch/result/${searchtxt}`);
    }
    render() {
        let { token, userName, searchtxt } = this.state;
        console.log("Header");
        return (
            <div>
                <header id="header" className="header clearfix">
                    <nav className="navbar navbar-light navbar-expand-lg bg-faded osahan-menu">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/"> <img src="/img/onlyGeek/logo.png" alt="logo" /> </a>
                            <button className="navbar-toggler navbar-toggler-white" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="navbar-collapse" id="navbarNavDropdown">
                                <div className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto top-categories-search-main">
                                    <div className="top-categories-search" onSubmit={this.handleClickSearch}>
                                        <div className="input-group">
                                            <input className="form-control" placeholder="Search products" aria-label="Search products in Your City" type="text" name="searchtxt" value={searchtxt} onChange={(e) => this.handleChange(e)} />
                                            <span className="input-group-btn">
                                                <button className="btn btn-secondary" style={{ backgroundColor: "var(--orange)" }} type="submit" onClick={this.handleClickSearch}><i className="mdi mdi-file-find" /> Search</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-2 my-lg-0">
                                    <ul className="list-inline main-nav-right" >
                                        <li className="list-inline-item">
                                            <a href="/" data-target="#bd-example-modal" data-toggle="modal" className="btn btn-link" style={token ? { display: 'none' } : { display: 'block' }}><i className="mdi mdi-account-circle" /> Login/Sign Up</a>
                                            <div className="dropdown" style={token ? { display: 'block' } : { display: 'none' }}>
                                                <button className="btn btn-account dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    {userName}
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="/account/view"><i className="uil uil-apps" />Dashboard</a>
                                                    <a className="dropdown-item" href="/account/profile"><i className="mdi mdi-account-outline" aria-hidden="true"></i>My Profile</a>
                                                    <a className="dropdown-item" href="/account/wishlist"><i className="mdi mdi-heart-outline" aria-hidden="true"></i>Wish List</a>
                                                    <a className="dropdown-item" href="/account/order/list"><i className="mdi mdi-format-list-bulleted" aria-hidden="true"></i> Orders List</a>
                                                    <div className="dropdown-divider"></div>
                                                    <span className="dropdown-item" onClick={this.handleLogout}><i className="mdi mdi-lock" aria-hidden="true"></i> Logout</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-inline-item cart-btn">
                                            <Cartsidebar />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ul class="nav__list">
                                <li class="nav__item">
                                    <a href="#banner" class="nav__link scroll-link">Home</a>
                                </li>
                                <li class="nav__item">
                                    <a href="#products" class="nav__link scroll-link">Products</a>
                                </li>
                                <li class="nav__item">
                                    <a href="#news" class="nav__link scroll-link">News</a>
                                </li>
                                <li class="nav__item">
                                    <a href="#facility" class="nav__link scroll-link">Facilities</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <Login />
            </div>

        )
    }
}
export default Navigation