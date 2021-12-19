import React, { Component } from 'react'
export default class Copyright extends Component {
    render() {
        return (
            <div>
                <section className="pt-4 pb-4 footer-bottom" style={{ paddingLeft: "36%" }}>
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-6 col-sm-6">
                                <p className="mt-1 mb-0">© Copyright 2021 <strong style={{ color: "var(--green-blue)" }}>Only Geek</strong>. All Rights Reserved<br />
                                    <small className="mt-0 mb-0">Made with love by Group 5
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}