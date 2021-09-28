import React, { Component } from 'react';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

class jerome extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                    'img/JeromeMolamu/Jerome.jpg',
                    'img/JeromeMolamu/Jerome2.jpg',
                    'img/JeromeMolamu/Jerome3.jpg',
                    'img/JeromeMolamu/Jerome4.jpg',
                    'img/JeromeMolamu/Jerome5.jpg',
                    'img/JeromeMolamu/Jerome6.jpg',
                    'img/JeromeMolamu/Jerome8.jpg',
                    'img/JeromeMolamu/Jerome9.jpg',
                    'img/JeromeMolamu/Jerome10.jpg',
                    'img/JeromeMolamu/Jerome11.jpg',
                    'img/JeromeMolamu/Jerome12.jpg',
                    'img/JeromeMolamu/Jerome13.jpg',
                    'img/JeromeMolamu/Jerome14.jpg'
                ]} />
            </div>
        )
    }
}

export default jerome;