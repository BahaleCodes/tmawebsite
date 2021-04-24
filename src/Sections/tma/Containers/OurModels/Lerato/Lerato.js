import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const lerato = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Lerato Phologane</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/LeratoPhologane/LeratoP.jpg',
                                'img/LeratoPhologane/LeratoP2.jpg'
                            ]}/>
    </div>
    )
}

export default lerato;