import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const oteng = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Oteng Shuenyane</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/OtengShuenyane/Oteng.jpg',
                                'img/OtengShuenyane/oteng2.jpg'
                            ]}/>
    </div>
    )
}

export default oteng;