import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const pabalelo = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Pabalelo Motlhabedi</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/PabaleloMotlhabedi/Pabalelo.jpg',
                                'img/PabaleloMotlhabedi/Pabalelo2.jpg'
                            ]}/>
    </div>
    )
}

export default pabalelo;