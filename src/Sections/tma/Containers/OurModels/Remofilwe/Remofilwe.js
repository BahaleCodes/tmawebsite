import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';
import pic1 from '../../../../../img/IMG_8593.jpg';
import pic2 from '../../../../../img/IMG_8616.jpg';

const remofilwe = () => {
    return (
        
        <div id="our-models" className="text-center">

            <Helmet>
                <title>Remofilwe Dire</title>
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

export default remofilwe;