import React, { Component } from 'react';

import ImageSlider from '../../../components/ImageSlider/ImageSlider';

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
                    'img/RemofilweBadise/badise3.jpg',
                    'img/RemofilweBadise/Badise5.jpg',
                    'img/RemofilweBadise/Badise6.jpg',
                    'img/RemofilweBadise/Badise7.jpg',
                    'img/RemofilweBadise/Badise8.jpg'
                ]} />
            </div>
        )
    }
}

export default RemofilweBadise;