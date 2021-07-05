import React, { Component } from 'react';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

class RemofilweBadise extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                    'img/RemofilweBadise/badise.jpg',
                                    'img/RemofilweBadise/badise2.jpg',
                                    'img/RemofilweBadise/badise3.jpg'
                                ]}/>
            </div>
        )
    }
}

export default RemofilweBadise;