import React, { Component } from 'react';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

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
                            ]}/>
            </div>
        )
    }
}

export default kitso;