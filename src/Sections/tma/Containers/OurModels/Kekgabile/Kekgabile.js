import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const kekgabile = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Kekgabile Mashaba</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/KekgabileMashaba/kekgabile.jpg',
                                'img/KekgabileMashaba/kekgabile2.jpg',
                                'img/KekgabileMashaba/kekgabile3.jpg'
                            ]}/>
    </div>
    )
}

export default kekgabile;