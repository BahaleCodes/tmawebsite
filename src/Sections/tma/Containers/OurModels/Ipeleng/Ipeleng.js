import React, { Component } from 'react';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

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
                                    'img/IpelengPelele/ipeleng6.jpg'
                                ]}/>
        </div>
        )
    }
}

export default ipeleng;