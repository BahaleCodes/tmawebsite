import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

class pabalelo extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                'img/PabaleloMotlhabedi/Pabalelo.jpg',
                                'img/PabaleloMotlhabedi/Pabalelo2.jpg',
                                'img/PabaleloMotlhabedi/Pabalelo3.jpg',
                                'img/PabaleloMotlhabedi/Pabalelo4.jpg',
                                'img/PabaleloMotlhabedi/Pabalelo5.jpg',
                                'img/PabaleloMotlhabedi/Pabalelo6.jpg'
                            ]}/>
            </div>
        )
    }
}

export default pabalelo;