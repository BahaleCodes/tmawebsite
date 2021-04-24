import React from 'react';
import Helmet from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const kitso = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Kitso Kwenamore</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/KitsoKwenamore/IMG_8571.CR2.jpg',
                                'img/KitsoKwenamore/kitso.jpg',
                                'img/KitsoKwenamore/kitso(2).jpg',
                                'img/KitsoKwenamore/IMG_8664.jpg',
                            ]}/>
        </div>
    )
}

export default kitso;