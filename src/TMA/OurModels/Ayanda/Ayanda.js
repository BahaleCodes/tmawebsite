import React, { Component } from 'react';

import ImageSlider from '../../../Components/ImageSlider/ImageSlider';

class ayanda extends Component{
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                    'img/AyandaMbali/ayanda.jpg',
                                    'img/AyandaMbali/ayanda(2).jpg'
                                ]}/>
            </div>
        )
    }
}

export default ayanda;