import React from 'react';
import Helmet from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const refentse = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Refentse Phutieagae</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/Refentse/IMG_8650.jpg',
                                'img/Refentse/IMG_8653.jpg'
                            ]}/>
    </div>
    )
}

export default refentse;