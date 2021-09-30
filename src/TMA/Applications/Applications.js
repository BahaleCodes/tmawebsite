import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Application.css';

class Applications extends Component{
    handleApply = (props) => {
        this.props.history.push("/models")
    }
    
    render() {
        return(
            <div id="applications" className="text-center">
                <div className="section-title">
                    <h2>
                        Applications
                    </h2>
                    <div className="container">
                        <div className="row">
                                <div className="about-text">
                                    <h3>Do you want to join the Academy?</h3>
                                    <br />
                                    <Link className="Apply" to="/application">Apply</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Applications;