import React, { Component } from 'react';

import ImageSlider from '../../../Components/ImageSlider/ImageSlider';

class kitso extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                'img/KitsoKwenamore/kitso.jpg',
                                'img/KitsoKwenamore/IMG_8571.CR2.jpg',
                                'img/KitsoKwenamore/kitso(2).jpg',
                                'img/KitsoKwenamore/IMG_8664.jpg',
                                'img/KitsoKwenamore/kitso2.jpg',
                                'img/KitsoKwenamore/Kitso3.jpg',
                                'img/KitsoKwenamore/Kitso4.jpg',
                                'img/KitsoKwenamore/Kitso5.jpg',
                                'img/KitsoKwenamore/Kitso6.jpg',
                                'img/KitsoKwenamore/Kitso7.jpg',
                                'img/KitsoKwenamore/Kitso9.jpg',
                                'img/KitsoKwenamore/Kitso10.jpg',
                                'img/KitsoKwenamore/Kitso11.jpg',
                                'img/KitsoKwenamore/Kitso12.jpg',
                                'img/KitsoKwenamore/Kitso13.jpg',
                                'img/KitsoKwenamore/Kitso14.jpg',
                                'img/KitsoKwenamore/Kitso15.jpg',
                                'img/KitsoKwenamore/Kitso16.jpg',
                                'img/KitsoKwenamore/Kitso17.jpg'
                            ]}/>
            </div>
        )
    }
}

export default kitso;