import React from 'react';
import Helmet from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const thato = () => {
    return (
        <div id="our-models" className="text-center">
            
            <Helmet>
                <title>Thato Motsatsi</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                    'img/ThatoMotsatsi/IMG_8638.jpg',
                                    'img/ThatoMotsatsi/thatoM.jpg',
                                    'img/ThatoMotsatsi/thatoM(2).jpg',
                                    'img/ThatoMotsatsi/IMG_8638nw.jpg',
                                    
                                ]}/>
        </div>
    )
}

export default thato;