import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

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
                                    'img/RemofilweDire/IMG_8593.jpg',
                                    'img/RemofilweDire/IMG_8616.jpg'
                                ]}/>
        </div>
    )
}

export default remofilwe;