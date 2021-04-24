import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const bokamoso = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Bokamoso Sebokolodi</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/BokamosoSebokolodi/Bokamoso.jpg',
                                'img/BokamosoSebokolodi/Bokamoso(2).jpg'
                            ]}/>
    </div>
    )
}

export default bokamoso;