import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const omphile = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Omphile Mahura</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/OmphileMahura/OmphileM.jpg',
                                'img/OmphileMahura/OmphileM2.jpg',
                                'img/OmphileMahura/OmphileM3.jpg',
                                'img/OmphileMahura/OmphileM4.jpg'
                            ]}/>
    </div>
    )
}

export default omphile;