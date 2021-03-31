import React, { Component } from 'react';
import Helmet from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';
import pic1 from '../../../../../img/IMG_8571.CR2.jpg';
import pic2 from '../../../../../img/IMG_8664.jpg';

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
                                pic1,
                                pic2,
                            ]}/>
        </div>
    )
}

export default kitso;