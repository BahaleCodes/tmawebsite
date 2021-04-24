import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const miguela = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Miguela Mlambo</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/MiguelaMlambo/Miguela.jpg',
                                'img/MiguelaMlambo/Miguela2.jpg'
                            ]}/>
    </div>
    )
}

export default miguela;