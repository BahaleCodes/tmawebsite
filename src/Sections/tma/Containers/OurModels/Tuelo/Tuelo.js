import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const tuelo = () => {
    return (
        <div id="our-models" className="text-center">
            
            <Helmet>
                <title>Tuelo Perez</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                    'img/Tuelo/IMG_8573.jpg',
                                    'img/Tuelo/IMG_8575.jpg',
                                    'img/Tuelo/IMG_8615.jpg'
                                ]}/>
        </div>
    )
}

export default tuelo;