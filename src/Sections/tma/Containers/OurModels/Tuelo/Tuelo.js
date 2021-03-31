import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';
import pic1 from '../../../../../img/IMG_8573.jpg';
import pic2 from '../../../../../img/IMG_8575.jpg';
import pic3 from '../../../../../img/IMG_8615.jpg';

const tuelo = () => {
    return (
        <div id="our-models" className="text-center">
            
            <Helmet>
                <title>Tuelo Perez</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                    pic1,
                                    pic2,
                                    pic3
                                ]}/>
        </div>
    )
}

export default tuelo;