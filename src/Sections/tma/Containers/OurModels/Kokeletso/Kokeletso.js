import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const kokeletso = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Kokeletso Pelele</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/KokeletsoPelele/Kokeletso.jpg',
                                'img/KokeletsoPelele/Kokeletso2.jpg',
                                'img/KokeletsoPelele/Kokeletso3.jpg'
                            ]}/>
    </div>
    )
}

export default kokeletso;