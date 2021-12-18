import React, { Component } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/header/Header'
import Copyright from './components/copyright/Copyright'
import Footer from './components/footer/Footer'
import Home from './components/views/home/Home'
import NotFound from './components/views/not-found/NotFound'
import Messages from '../utils/messages/Messages'
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
                    <Messages />
                </div>
        )
    }
}