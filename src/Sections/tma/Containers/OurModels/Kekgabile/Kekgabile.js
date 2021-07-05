import React, { Component } from 'react';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

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
                                'img/KekgabileMashaba/kekgabile3.jpg'
                            ]}/>
        </div>
        )
    }
}

export default kekgabile;