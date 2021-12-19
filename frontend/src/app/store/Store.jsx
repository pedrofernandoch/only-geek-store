import React, { Component } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/common/header/Header'
import Copyright from './components/common/copyright/Copyright'
import Footer from './components/common/footer/Footer'
import Home from './components/views/home/Home'
import NotFound from './components/views/not-found/NotFound'
import Messanger from '../utils/messages/Messanger'
export default class Store extends Component {

    render() {
        return (
                <div className="App">
                    <Header />
                    <BrowserRouter>
                        <Routes>
                            <Route exact path='/' element={<Home />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                    <br />
                    <Footer />
                    <Copyright />
                    <Messanger />
                </div>
        )
    }
}