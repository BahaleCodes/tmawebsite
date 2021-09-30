import React, { Component } from 'react';

import ImageSlider from '../../../Components/ImageSlider/ImageSlider';

class orefile extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                    'img/OrefileMale/Orefile.jpg',
                    'img/OrefileMale/Orefile2.jpg',
                    'img/OrefileMale/Orefile3.jpg',
                    'img/OrefileMale/Orefile4.jpg',
                    'img/OrefileMale/Orefile5.jpg',
                    'img/OrefileMale/Orefile7.jpg',
                    'img/OrefileMale/Orefile8.jpg',
                    'img/OrefileMale/Orefile9.jpg',
                    'img/OrefileMale/Orefile10.jpg',
                    'img/OrefileMale/Orefile11.jpg',
                    'img/OrefileMale/Orefile12.jpg',
                    'img/OrefileMale/Orefile6.jpg',
                    'img/OrefileMale/Orefile14.jpg',
                    'img/OrefileMale/Orefile15.jpg'
                ]} />
            </div>
        )
    }
}

export default orefile;