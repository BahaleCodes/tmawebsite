import React, { Component } from 'react';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

class bonolo extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                    'img/BonoloDingoko/bonolo.jpg',
                                    'img/BonoloDingoko/bonolo2.jpg',
                                    'img/BonoloDingoko/bonolo3.jpg',
                                    'img/BonoloDingoko/bonolo4.jpg',
                                    'img/BonoloDingoko/bonolo5.jpg',
                                    'img/BonoloDingoko/bonolo6.jpg'
                                ]}/>
            </div>
        )
    }
}

export default bonolo;