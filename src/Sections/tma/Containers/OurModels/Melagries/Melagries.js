import React, { Component } from 'react';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

class melagries extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                'img/MelagriesMlambo/Melagries.jpg',
                                'img/MelagriesMlambo/Melagries2.jpg',
                                'img/MelagriesMlambo/Melagries3.jpg',
                                'img/MelagriesMlambo/Melagries4.jpg',
                                'img/MelagriesMlambo/Melagries5.jpg',
                                'img/MelagriesMlambo/Melagries6.jpg',
                                'img/MelagriesMlambo/Melagries7.jpg'
                            ]}/>
            </div>
        )
    }
}
export default melagries;