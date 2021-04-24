import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const bonoloS = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Bonolo Saliwe</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/BonoloSaliwe/saliwe.jpg',
                                'img/BonoloSaliwe/saliwe2.jpg'
                            ]}/>
    </div>
    )
}

export default bonoloS;