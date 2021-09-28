import React, { Component } from 'react';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

class thabiso extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                'img/ThabisoMakoto/thabiso.jpg',
                                'img/ThabisoMakoto/thabiso2.jpg',
                                'img/ThabisoMakoto/thabiso3.jpg',
                                'img/ThabisoMakoto/thabiso4.jpg',
                                'img/ThabisoMakoto/thabiso5.jpg',
                                'img/ThabisoMakoto/thabiso6.jpg',
                                'img/ThabisoMakoto/Thabiso8.jpg',
                                'img/ThabisoMakoto/Thabiso9.jpg',
                                'img/ThabisoMakoto/Thabiso10.jpg',
                                'img/ThabisoMakoto/Thabiso11.jpg',
                                'img/ThabisoMakoto/Thabiso12.jpg',
                                'img/ThabisoMakoto/Thabiso13.jpg',
                                'img/ThabisoMakoto/Thabiso14.jpg',
                                'img/ThabisoMakoto/Thabiso16.jpg'
                            ]}/>
            </div>
        )
    }
}

export default thabiso;