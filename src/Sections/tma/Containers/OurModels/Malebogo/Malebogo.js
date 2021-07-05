import React, { Component } from 'react';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

class malebogo extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                'img/MalebogoMashetla/Malebo.jpg',
                                'img/MalebogoMashetla/Malebo(2).jpg',
                                'img/MalebogoMashetla/Malebo2.jpg',
                                'img/MalebogoMashetla/Malebo(4).jpg',
                                'img/MalebogoMashetla/Malebo(5).jpg',
                                'img/MalebogoMashetla/Malebo(6).jpg'
                            ]}/>
    </div>
        )
    }
}

export default malebogo;