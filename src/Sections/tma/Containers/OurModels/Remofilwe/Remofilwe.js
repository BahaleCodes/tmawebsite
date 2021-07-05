import React, { Component } from 'react';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

class remofilwe extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                    'img/RemofilweDire/IMG_8593.jpg',
                                    'img/RemofilweDire/IMG_8616.jpg'
                                ]}/>
            </div>
        )
    }
}
export default remofilwe;