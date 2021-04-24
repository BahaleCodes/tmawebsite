import React, { Component } from 'react'

class Workshops extends Component{
    render() {
        return(
            <div id="workshop" className="text-center">
                <div className="section-title">
                    <h2>
                        Workshops
                    </h2>
                    <div className="container">
                        <div className="row">

                            <h1>Beauty and brains is not water and oil</h1>
                            <div className="col-xs-12 col-md-6">
                                <div className="about-text">
                                    <h3>
                                        {
                                            this.props.data 
                                            ? this.props.data.paragraph 
                                            : 'loading...'
                                        }
                                    </h3>
                                    <div className="list-style">
                                        <ul>
                                            {this.props.data 
                                                ? this.props.data.skills.map(
                                                    (d, i) => 
                                                        <h4  key={`${d}-${i}`}>
                                                            {d}
                                                        </h4>
                                                    ) 
                                                : 'loading'}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <img src={'img/work.jpg'} className="img-responsive" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Workshops;