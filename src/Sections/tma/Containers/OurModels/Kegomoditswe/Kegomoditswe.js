import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const kegomoditswe = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Kegomoditswe Nageng</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/KegomoditsweNageng/kegomoditswe.jpg',
                                'img/KegomoditsweNageng/kegomoditswe2.jpg',
                                'img/KegomoditsweNageng/kegomoditswe3.jpg'
                            ]}/>
        </div>
    )
}

export default kegomoditswe;