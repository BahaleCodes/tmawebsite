import React, { Component } from 'react';

import ImageSlider from '../../../Components/ImageSlider/ImageSlider';

class miguela extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                'img/MiguelaMlambo/Miguela.jpg',
                                'img/MiguelaMlambo/Miguela2.jpg',
                                'img/MiguelaMlambo/Miguela3.jpg',
                                'img/MiguelaMlambo/Miguela4.jpg',
                                'img/MiguelaMlambo/Miguela5.jpg',
                                'img/MiguelaMlambo/Miguela6.jpg'
                            ]}/>
            </div>
        )
    }
}
export default miguela;