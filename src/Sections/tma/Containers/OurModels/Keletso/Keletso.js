import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const keletso = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Keletso Jonas</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/KeletsoJonas/keletso.jpg',
                                'img/KeletsoJonas/keletso(2).jpg'
                            ]}/>
    </div>
    )
}

export default keletso;