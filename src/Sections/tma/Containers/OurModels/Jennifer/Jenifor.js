import React, { Component } from 'react';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

class jennifer extends Component {
    render() {
        
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                'img/JenniferGaegane/Jennifer.jpg',
                                'img/JenniferGaegane/Jennifer2.jpg',
                                'img/JenniferGaegane/Jennifer3.jpg',
                                'img/JenniferGaegane/Jennifer5.jpg',
                                'img/JenniferGaegane/Jennifer6.jpg',
                                'img/JenniferGaegane/Jennifer7.jpg'
                            ]}/>
            </div>
        )
    }
}

export default jennifer;