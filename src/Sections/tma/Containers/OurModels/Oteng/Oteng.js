import React, { Component } from 'react';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

class oteng extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                'img/OtengShuenyane/Oteng.jpg',
                                'img/OtengShuenyane/oteng2.jpg',
                                'img/OtengShuenyane/Oteng3.jpg',
                                'img/OtengShuenyane/Oteng4.jpg',
                                'img/OtengShuenyane/Oteng5.jpg',
                                'img/OtengShuenyane/Oteng6.jpg',
                                'img/OtengShuenyane/Oteng7.jpg'
                            ]}/>
            </div>
        )
    }
}
export default oteng;