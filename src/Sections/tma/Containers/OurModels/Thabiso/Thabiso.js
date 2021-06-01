import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const thabiso = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Thabiso Makoto</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/ThabisoMakoto/thabiso.jpg',
                                'img/ThabisoMakoto/thabiso2.jpg',
                                'img/ThabisoMakoto/thabiso3.jpg'
                            ]}/>
    </div>
    )
}

export default thabiso;