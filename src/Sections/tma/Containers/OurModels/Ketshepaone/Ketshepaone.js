import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const ketshepaone = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Ketshepaone Direng</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/KetshepaoneDireng/ketshepaone(2).jpg',
                                'img/KetshepaoneDireng/ketshepaone.jpg'
                            ]}/>
    </div>
    )
}

export default ketshepaone;