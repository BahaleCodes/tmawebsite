import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';
import pic1 from '../../../../../img/IMG_8578.jpg';
import pic2 from '../../../../../img/IMG_8586nw.jpg';
import pic3 from '../../../../../img/IMG_8601.jpg';

const karabo = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Karabo Sefatsa</title>
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

export default karabo;