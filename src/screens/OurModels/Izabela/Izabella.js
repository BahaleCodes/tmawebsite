import React, { Component } from 'react';

import ImageSlider from '../../../components/ImageSlider/ImageSlider';

class izabella extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                    'img/IzabelaMlambo/Izabella.jpg',
                    'img/IzabelaMlambo/Izabella2.jpg',
                    'img/IzabelaMlambo/izabella3.jpg',
                    'img/IzabelaMlambo/Izabella3.jpg',
                    'img/IzabelaMlambo/Izabella4.jpg',
                    'img/IzabelaMlambo/Izabella5.jpg',
                    'img/IzabelaMlambo/izabella6.jpg',
                    'img/IzabelaMlambo/Izabella7.jpg',
                    'img/IzabelaMlambo/Izabella8.jpg',
                    'img/IzabelaMlambo/Izabella9.jpg'
                ]} />
            </div>
        )
    }
}

export default izabella;