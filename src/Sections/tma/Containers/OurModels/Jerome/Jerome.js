import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const jerome = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Jerome Molamu</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/JeromeMolamu/Jerome.jpg'
                            ]}/>
        </div>
    )
}

export default jerome;