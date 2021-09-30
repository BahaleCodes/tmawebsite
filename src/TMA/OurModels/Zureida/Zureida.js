import React, { Component } from 'react';

import ImageSlider from '../../../Components/ImageSlider/ImageSlider';

class zureida extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                'img/ZureidaLeepo/zureida.jpg',
                                'img/ZureidaLeepo/zureida(2).jpg',
                                'img/ZureidaLeepo/zureida2.jpg',
                                'img/ZureidaLeepo/Zureida3.jpg',
                                'img/ZureidaLeepo/Zureida4.jpg',
                                'img/ZureidaLeepo/Zureida5.jpg',
                                'img/ZureidaLeepo/Zureida6.jpg',
                                'img/ZureidaLeepo/Zureida7.jpg',
                                'img/ZureidaLeepo/Zureida8.jpg',
                                'img/ZureidaLeepo/Zureida9.jpg',
                                'img/ZureidaLeepo/Zureida10.jpg',
                                'img/ZureidaLeepo/Zureida12.jpg',
                                'img/ZureidaLeepo/face.jpg',
                                'img/ZureidaLeepo/Zureida14.jpg',
                                'img/ZureidaLeepo/Zureida15.jpg'
                            ]}/>
            </div>
        )
    }
}

export default zureida;