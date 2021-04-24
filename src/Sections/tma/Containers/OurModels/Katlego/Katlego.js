import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const katlego = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Katlego Zungu</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/KatlegoZungu/katlego.jpg',
                                'img/KatlegoZungu/katlego(2).jpg'
                            ]}/>
    </div>
    )
}

export default katlego;