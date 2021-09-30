import React, { Component } from 'react';

import ImageSlider from '../../../Components/ImageSlider/ImageSlider';

class tuelo extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                    'img/Tuelo/IMG_8573.jpg',
                                    'img/Tuelo/IMG_8575.jpg',
                                    'img/Tuelo/IMG_8615.jpg',
                                    'img/Tuelo/tuelo.jpg',
                                    'img/Tuelo/tuelo2.jpg',
                                    'img/Tuelo/tuelo3.jpg',
                                    'img/Tuelo/tuelo4.jpg'
                                ]}/>
            </div>
        )
    }
}

export default tuelo;