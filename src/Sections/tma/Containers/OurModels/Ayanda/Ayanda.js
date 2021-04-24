import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const ayanda = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Ayanda Mbali</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/AyandaMbali/ayanda.jpg',
                                'img/AyandaMbali/ayanda(2).jpg'
                            ]}/>
    </div>
    )
}

export default ayanda;