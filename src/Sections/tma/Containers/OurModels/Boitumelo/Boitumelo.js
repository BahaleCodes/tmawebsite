import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const boitumelo = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Boitumelo Mokgatlhe</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/BoitumeloMokgatlhe/BoitumeloM.jpg',
                                'img/BoitumeloMokgatlhe/BoitumeloM2.jpg'
                            ]}/>
    </div>
    )
}

export default boitumelo;