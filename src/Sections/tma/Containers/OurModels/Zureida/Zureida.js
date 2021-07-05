import React, { Component } from 'react';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

class zureida extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                'img/ZureidaLeepo/zureida.jpg',
                                'img/ZureidaLeepo/zureida(2).jpg',
                                'img/ZureidaLeepo/zureida2.jpg'
                            ]}/>
            </div>
        )
    }
}

export default zureida;