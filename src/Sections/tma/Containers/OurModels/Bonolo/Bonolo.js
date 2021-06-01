import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const bonolo = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Bonolo Dingoko</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/BonoloDingoko/bonolo.jpg',
                                'img/BonoloDingoko/bonolo2.jpg',
                                'img/BonoloDingoko/bonolo3.jpg',
                                'img/BonoloDingoko/bonolo4.jpg'
                            ]}/>
    </div>
    )
}

export default bonolo;