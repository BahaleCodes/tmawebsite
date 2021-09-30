import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../Components/ImageSlider/ImageSlider';

const thabo = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Thabo Badirwang</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                'img/ThaboBadirwang/Thabo.jpg',
                'img/ThaboBadirwang/Thabo(2).jpg',
                'img/ThaboBadirwang/Thabo2.jpg',
                'img/ThaboBadirwang/Thabo3.jpg',
                'img/ThaboBadirwang/Thabo4.jpg',
                'img/ThaboBadirwang/Thabo5.jpg',
                'img/ThaboBadirwang/Thabo6.jpg',
                'img/ThaboBadirwang/Thabo8.jpg',
                'img/ThaboBadirwang/Thabo9.jpg',
                'img/ThaboBadirwang/Thabo10.jpg',
                'img/ThaboBadirwang/Thabo11.jpg',
                'img/ThaboBadirwang/Thabo7.jpg',
                'img/ThaboBadirwang/Thabo13.jpg',
                'img/ThaboBadirwang/Thabo14.jpg'
            ]} />
        </div>
    )
}

export default thabo;