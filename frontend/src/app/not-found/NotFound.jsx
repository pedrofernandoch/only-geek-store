import React, { Component } from 'react';

export default class NotFound extends Component {
    render() {
        return (
            <section className="not-found-page section-padding" style={{ paddingTop: "50px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto text-center  pt-4 pb-5" style={{ marginTop: '3rem' }}>
                            <h1><img className="img-fluid" src="/img/404.png" alt={404} /></h1>
                            <h1 style={{ color: "white" }}>Sorry! Page not found.</h1>
                            <p className="land">Unfortunately the page you are looking for has been moved or deleted.</p>
                            <div className="mt-5">
                                <a href="/" className="btn btn-lg" style={{ backgroundColor: "var(--orange)" }}><i className="mdi mdi-home" /> GO TO HOME PAGE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
