import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const jennifer = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Jennifer Gaegane</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/JenniferGaegane/Jennifer.jpg',
                                'img/JenniferGaegane/Jennifer2.jpg'
                            ]}/>
    </div>
    )
}

export default jennifer;