import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const naledi = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Naledi Mmekwa</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/NalediMmekwa/Naledi11.jpg',
                                'img/NalediMmekwa/Naledi112.jpg'
                            ]}/>
    </div>
    )
}

export default naledi;