import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const izabella = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Izabela Mlambo</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/IzabelaMlambo/Izabella.jpg',
                                'img/IzabelaMlambo/Izabella2.jpg',
                                'img/IzabelaMlambo/izabella3.jpg'
                            ]}/>
    </div>
    )
}

export default izabella;