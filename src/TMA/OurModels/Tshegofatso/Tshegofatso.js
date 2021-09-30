import React, { Component } from 'react';

import ImageSlider from '../../../Components/ImageSlider/ImageSlider';

class tshegofatso extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                'img/TshegofatsoTshepe/Tshegofatso.jpg',
                                'img/TshegofatsoTshepe/Tshegofatso1.jpg',
                                'img/TshegofatsoTshepe/Tshegofatso2.jpg',
                                'img/TshegofatsoTshepe/Tshegofatso3.jpg',
                                'img/TshegofatsoTshepe/Tshegofatso4.jpg',
                                'img/TshegofatsoTshepe/Tshegofatso5.jpg',
                                'img/TshegofatsoTshepe/Tshegofatso11.jpg',
                                'img/TshegofatsoTshepe/Tshegofatso7.jpg',
                                'img/TshegofatsoTshepe/Tshegofatso8.jpg',
                                'img/TshegofatsoTshepe/Tshegofatso9.jpg',
                                'img/TshegofatsoTshepe/Tshegofatso10.jpg',
                                'img/TshegofatsoTshepe/Tshegofatso12.jpg',
                                'img/TshegofatsoTshepe/Tshegofatso13.jpg',
                                'img/TshegofatsoTshepe/Tshegofatso14.jpg'
                            ]}/>
            </div>
        )
    }
}
export default tshegofatso;