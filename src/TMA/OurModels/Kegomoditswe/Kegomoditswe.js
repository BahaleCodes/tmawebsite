import React, { Component } from 'react';

import ImageSlider from '../../../Components/ImageSlider/ImageSlider';

class kegomoditswe extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                    <ImageSlider images={[
                                'img/KegomoditsweNageng/kegomoditswe.jpg',
                                'img/KegomoditsweNageng/kegomoditswe2.jpg',
                                'img/KegomoditsweNageng/kegomoditswe3.jpg',
                                'img/KegomoditsweNageng/kegomoditswe4.jpg',
                                'img/KegomoditsweNageng/kegomoditswe5.jpg',
                                'img/KegomoditsweNageng/kegomoditswe6.jpg'
                            ]}/>
            </div>
        )
    }
}

export default kegomoditswe;