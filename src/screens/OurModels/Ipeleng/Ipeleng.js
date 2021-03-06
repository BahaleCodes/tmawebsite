import React, { Component } from 'react';

import ImageSlider from '../../../components/ImageSlider/ImageSlider';

class ipeleng extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                    'img/IpelengPelele/Ipeleng.jpg',
                    'img/IpelengPelele/Ipeleng(2).jpg',
                    'img/IpelengPelele/ipeleng2.jpg',
                    'img/IpelengPelele/ipeleng3.jpg',
                    'img/IpelengPelele/ipeleng4.jpg',
                    'img/IpelengPelele/ipeleng5.jpg',
                    'img/IpelengPelele/ipeleng6.jpg',
                    'img/IpelengPelele/ipeleng14.jpg',
                    'img/IpelengPelele/ipeleng8.jpg',
                    'img/IpelengPelele/ipeleng9.jpg',
                    'img/IpelengPelele/ipeleng10.jpg',
                    'img/IpelengPelele/ipeleng11.jpg',
                    'img/IpelengPelele/ipeleng12.jpg',
                    'img/IpelengPelele/ipeleng13.jpg'
                ]} />
            </div>
        )
    }
}

export default ipeleng;