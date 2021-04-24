import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const tlotlego = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Tlotlego Sephiri</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/TlotlegoSephiri/Tlotlego.jpg',
                                'img/TlotlegoSephiri/Tlotlego2.jpg'
                            ]}/>
    </div>
    )
}

export default tlotlego;