import React, { Component } from 'react';

import ImageSlider from '../../../Components/ImageSlider/ImageSlider';

class refentse extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                'img/Refentse/IMG_8650.jpg',
                                'img/Refentse/IMG_8653.jpg'
                            ]}/>
            </div>
        )
    }
}

export default refentse;