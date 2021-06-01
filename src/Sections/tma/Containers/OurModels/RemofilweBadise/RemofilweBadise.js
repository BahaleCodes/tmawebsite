import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const RemofilweBadise = () => {
    return (
        
        <div id="our-models" className="text-center">

            <Helmet>
                <title>Remofilwe Dire</title>
            </Helmet>
            <h2>
                Our Models
			</h2>
            <ImageSlider images={[
                                    'img/RemofilweBadise/badise.jpg',
                                    'img/RemofilweBadise/badise2.jpg',
                                    'img/RemofilweBadise/badise3.jpg'
                                ]}/>
        </div>
    )
}

export default RemofilweBadise;