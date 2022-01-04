import React, { Component } from 'react';

import ImageSlider from '../../../components/ImageSlider/ImageSlider';

class lerato extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                'img/LeratoPhologane/LeratoP.jpg',
                                'img/LeratoPhologane/LeratoP2.jpg',
                                'img/LeratoPhologane/LeratoP3.jpg',
                                'img/LeratoPhologane/LeratoP4.jpg'
                            ]}/>
            </div>
        )
    }
}

export default lerato;