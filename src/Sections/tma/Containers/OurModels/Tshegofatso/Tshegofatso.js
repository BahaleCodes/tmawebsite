import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const tshegofatso = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Tshegofatso Tshepe</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/TshegofatsoTshepe/Tshegofatso.jpg',
                                'img/TshegofatsoTshepe/Tshegofatso1.jpg'
                            ]}/>
        </div>
    )
}

export default tshegofatso;