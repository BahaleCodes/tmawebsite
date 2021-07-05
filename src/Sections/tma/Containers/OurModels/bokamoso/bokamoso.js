import React, { Component } from 'react';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

class bokamoso extends Component{
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                    'img/BokamosoSebokolodi/Bokamoso.jpg',
                                    'img/BokamosoSebokolodi/Bokamoso(2).jpg',
                                    'img/BokamosoSebokolodi/Bokamoso(4).jpg',
                                    'img/BokamosoSebokolodi/Bokamoso(5).jpg',
                                    'img/BokamosoSebokolodi/Bokamoso(6).jpg',
                                    'img/BokamosoSebokolodi/Bokamoso(7).jpg'
                                ]}/>
            </div>
        )
    }
}

export default bokamoso;