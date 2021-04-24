import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const jermaine = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Jermaine Setzin</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/JermaineSetzin/keenan.jpg',
                                'img/JermaineSetzin/keenan(2).jpg'
                            ]}/>
    </div>
    )
}

export default jermaine;