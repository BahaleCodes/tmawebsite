import React, { Component } from 'react'

class Benefits extends Component{
    render() {
        return(
            <div id="benefits" className="text-center">
                <div className="section-title">
                    <h2>
                        Benefits
                    </h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                            </div>
                                <div className="about-text">
                                    <h3>Benefits of being a TMA model</h3>
                                    <div className="list-style">
                                        <ul>
                                            {
                                                this.props.data 
                                                ? this.props.data.benefit.map(
                                                    (d, i) => 
                                                        <p  key={`${d}-${i}`}>{d}</p>
                                                    ) 
                                                : 'loading'
                                            }
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Benefits;