import React, { Component } from 'react';
// import rootRoutes from './components/web/rootRoutes';
import NotFound from './not-found/NotFound';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header/Header';
import Facility from './components/facility/Facility';
import Copyright from './components/copyright/Copyright';
import Footer from './components/footer/Footer';
import Home from './components/views/home/Home';
import Login from './components/views/checkout/login';
import Register from './components/views/checkout/register';
import Singleproduct from './components/views/single-product/SingleProduct';
// import Checkout from './components/views/checkout';
// import PrivateRoute from '../PrivateRoute';
// import Productview from '../web/views/product';
// import Shopdetails from './views/shop-details';
// import Complete from './views/checkout/complete';
// import Account from './views/account';
// import Failed from './views/checkout/failed';

export default class App extends Component {
    render() {
        console.log('App.js');
        return (
            <Provider store={store}>
                <div className="App">
                    <NotificationContainer />
                    <Header />
                    <BrowserRouter>
                        <Routes>
                            <Route exact path='/' element={<Home />} />
                            <Route exact path='/login' element={<Login />} />
                            <Route exact path='/register' element={<Register />} />
                            <Route exact path='/p/:slug/:id' element={<Singleproduct />} />
                            {/* <PrivateRoute path='/checkout' element={<Checkout />} /> */}
                            {/*
                            <Route exact path='/shop/:slug' element={<Shopdetails />} />
                            <Route path='/product/catalogsearch/result' element={<Productview />} /> 
                            <PrivateRoute path='/order/success' element={<Complete />} /> 
                            <PrivateRoute path='/order/failed' element={<Failed}  />/>  
                            <PrivateRoute path='/account' element={<Account} /> />*/}
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                    <Facility />
                    <Footer />
                    <Copyright />
                </div>
            </Provider>
        );
    }
}