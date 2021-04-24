import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const zureida = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Zureida Leepo</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/ZureidaLeepo/zureida.jpg',
                                'img/ZureidaLeepo/zureida(2).jpg'
                            ]}/>
    </div>
    )
}

export default zureida;