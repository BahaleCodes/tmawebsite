import React, { Component } from 'react';
import Helmet from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';
import pic1 from '../../../../../img/IMG_8638.jpg';
import pic2 from '../../../../../img/IMG_8638nw.jpg';

const thato = () => {
    return (
        <div id="our-models" className="text-center">
            
            <Helmet>
                <title>Thato Motsatsi</title>
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

export default thato;