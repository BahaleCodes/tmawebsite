import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const thabo = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Thabo Badirwang</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/ThaboBadirwang/Thabo.jpg',
                                'img/ThaboBadirwang/Thabo(2).jpg'
                            ]}/>
    </div>
    )
}

export default thabo;