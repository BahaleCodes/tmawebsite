import React, { Component } from 'react';

import ImageSlider from '../../../components/ImageSlider/ImageSlider';

class bokamoso extends Component {
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
                    'img/BokamosoSebokolodi/Bokamoso(7).jpg',
                    'img/BokamosoSebokolodi/BokamosoS(8).jpg',
                    'img/BokamosoSebokolodi/BokamosoS(9).jpg',
                    'img/BokamosoSebokolodi/BokamosoS(10).jpg',
                    'img/BokamosoSebokolodi/BokamosoS(11).jpg',
                    'img/BokamosoSebokolodi/BokamosoS(12).jpg',
                    'img/BokamosoSebokolodi/BokamosoS(13).jpg',
                    'img/BokamosoSebokolodi/BokamosoS(14).jpg',
                    'img/BokamosoSebokolodi/BokamosoS(15).jpg'
                ]} />
            </div>
        )
    }
}

export default bokamoso;