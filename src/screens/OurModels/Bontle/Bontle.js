import React, { Component } from 'react';

import ImageSlider from '../../../components/ImageSlider/ImageSlider';

class bontle extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                    'img/BontleMokgosi/Bontle.jpg',
                    'img/BontleMokgosi/Bontle2.jpg',
                    'img/BontleMokgosi/Bontle3.jpg',
                    'img/BontleMokgosi/Bontle4.jpg',
                    'img/BontleMokgosi/Bontle5.jpg',
                    'img/BontleMokgosi/Bontle6.jpg'
                ]} />
            </div>
        )
    }
}

export default bontle;