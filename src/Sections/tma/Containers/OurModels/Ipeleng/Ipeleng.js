import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const ipeleng = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Ipeleng Pelele</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/IpelengPelele/Ipeleng.jpg',
                                'img/IpelengPelele/Ipeleng(2).jpg',
                                'img/IpelengPelele/ipeleng2.jpg',
                                'img/IpelengPelele/ipeleng3.jpg'
                            ]}/>
    </div>
    )
}

export default ipeleng;