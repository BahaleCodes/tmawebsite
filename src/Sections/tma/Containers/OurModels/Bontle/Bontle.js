import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const bontle = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Bontle Mokgosi</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/BontleMokgosi/Bontle.jpg',
                                'img/BontleMokgosi/Bontle2.jpg'
                            ]}/>
    </div>
    )
}

export default bontle;