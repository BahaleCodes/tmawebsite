import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const melagries = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Melagries Mlambo</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/MelagriesMlambo/Melagries.jpg',
                                'img/MelagriesMlambo/Melagries2.jpg',
                                'img/MelagriesMlambo/Melagries3.jpg',
                                'img/MelagriesMlambo/Melagries4.jpg'
                            ]}/>
    </div>
    )
}

export default melagries;