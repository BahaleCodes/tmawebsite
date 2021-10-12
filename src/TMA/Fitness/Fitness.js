import React, { Component } from 'react'

class Fitness extends Component{
    render() {
        return(
            <div id="fitness" className="text-center">
                <div className="section-title">
                    <h2>
                        Fitness
                    </h2>
                    <div className="container">
                        <div className="row">
                                    <h1>A healthy body is a beautiful body</h1>
                            <div className="col-xs-12 col-md-6">
                                <img loading='lazy'src={"img/fitness.jpg"} className="img-responsive" alt=""/>
                            </div>
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
                                                {
                                                    this.props.data 
                                                    ? this.props.data.trainings.map(
                                                        (d, i) => 
                                                            <p  key={`${d}-${i}`}>
                                                                {d}
                                                            </p>) 
                                                    : 'loading'
                                                }
                                            </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fitness;