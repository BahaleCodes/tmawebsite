import React, { Component } from 'react';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

class thato extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                    'img/ThatoMotsatsi/thatoM.jpg',
                                    'img/ThatoMotsatsi/IMG_8638.jpg',
                                    'img/ThatoMotsatsi/thatoM(2).jpg',
                                    'img/ThatoMotsatsi/IMG_8638nw.jpg',
                                    'img/ThatoMotsatsi/thatoM1.jpg',
                                    'img/ThatoMotsatsi/thatoM2.jpg',
                                    'img/ThatoMotsatsi/thatoM3.jpg',
                                    'img/ThatoMotsatsi/thatoM4.jpg',
                                    'img/ThatoMotsatsi/ThatoM5.jpg',
                                    'img/ThatoMotsatsi/ThatoM6.jpg',
                                    'img/ThatoMotsatsi/ThatoM7.jpg',
                                    'img/ThatoMotsatsi/ThatoM8.jpg',
                                    'img/ThatoMotsatsi/ThatoM9.jpg',
                                    'img/ThatoMotsatsi/ThatoM10.jpg'
                                    
                                ]}/>
            </div>
        )
    }
}

export default thato;