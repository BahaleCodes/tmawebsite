import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const orefile = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Orefile Male</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/OrefileMale/Orefile.jpg',
                                'img/OrefileMale/Orefile2.jpg'
                            ]}/>
    </div>
    )
}

export default orefile;