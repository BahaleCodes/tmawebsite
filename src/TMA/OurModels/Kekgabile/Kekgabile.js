import React, { Component } from 'react';

import ImageSlider from '../../../Components/ImageSlider/ImageSlider';

class kekgabile extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                'img/KekgabileMashaba/kekgabile.jpg',
                                'img/KekgabileMashaba/kekgabile2.jpg',
                                'img/KekgabileMashaba/kekgabile3.jpg',
                                'img/KekgabileMashaba/Kekgabile4.jpg',
                                'img/KekgabileMashaba/Kekgabile5.jpg',
                                'img/KekgabileMashaba/Kekgabile7.jpg',
                                'img/KekgabileMashaba/Kekgabile6.jpg',
                                'img/KekgabileMashaba/Kekgabile9.jpg'
                            ]}/>
        </div>
        )
    }
}

export default kekgabile;