import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const nalediS = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Naledi Sebokolodi</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/NalediSebokolodi/mbali.jpg',
                                'img/NalediSebokolodi/mbali(2).jpg'
                            ]}/>
    </div>
    )
}

export default nalediS;