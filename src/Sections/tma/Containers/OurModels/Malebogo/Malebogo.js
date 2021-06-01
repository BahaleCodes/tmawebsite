import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const malebogo = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Malebogo Mashetla</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/MalebogoMashetla/Malebo.jpg',
                                'img/MalebogoMashetla/Malebo(2).jpg',
                                'img/MalebogoMashetla/Malebo2.jpg'
                            ]}/>
    </div>
    )
}

export default malebogo;