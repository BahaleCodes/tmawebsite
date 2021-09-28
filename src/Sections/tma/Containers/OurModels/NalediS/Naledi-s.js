import React, { Component } from 'react';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

class nalediS extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                'img/NalediSebokolodi/mbali.jpg',
                                'img/NalediSebokolodi/mbali(2).jpg',
                                'img/NalediSebokolodi/mbali2.jpg',
                                'img/NalediSebokolodi/mbali(4).jpg',
                                'img/NalediSebokolodi/mbali(5).jpg',
                                'img/NalediSebokolodi/mbali(6).jpg',
                                'img/NalediSebokolodi/Mbali3.jpg',
                                'img/NalediSebokolodi/Mbali4.jpg',
                                'img/NalediSebokolodi/Mbali5.jpg',
                                'img/NalediSebokolodi/Mbali6.jpg',
                                'img/NalediSebokolodi/Mbali11.jpg',
                                'img/NalediSebokolodi/Mbali8.jpg',
                                'img/NalediSebokolodi/Mbali9.jpg',
                                'img/NalediSebokolodi/Mbali10.jpg'
                            ]}/>
            </div>
        )
    }
}
export default nalediS;