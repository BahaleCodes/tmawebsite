import React, { Component } from 'react';

import ImageSlider from '../../../Components/ImageSlider/ImageSlider';

class omphile extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                'img/OmphileMahura/OmphileM.jpg',
                                'img/OmphileMahura/OmphileM2.jpg',
                                'img/OmphileMahura/OmphileM3.jpg',
                                'img/OmphileMahura/OmphileM4.jpg',
                                'img/OmphileMahura/OmphileM5.jpg',
                                'img/OmphileMahura/OmphileM6.jpg',
                                'img/OmphileMahura/OmphileM7.jpg',
                                'img/OmphileMahura/OmphileM9.jpg',
                                'img/OmphileMahura/OmphileM10.jpg',
                                'img/OmphileMahura/OmphileM11.jpg',
                                'img/OmphileMahura/OmphileM12.jpg',
                                'img/OmphileMahura/OmphileM14.jpg',
                                'img/OmphileMahura/OmphileM15.jpg',
                                'img/OmphileMahura/OmphileM16.jpg',
                                'img/OmphileMahura/OmphileM17.jpg',
                                'img/OmphileMahura/OmphileM18.jpg',
                                'img/OmphileMahura/OmphileM19.jpg',
                                'img/OmphileMahura/OmphileM20.jpg'
                            ]}/>
            </div>
        )
    }
}

export default omphile;