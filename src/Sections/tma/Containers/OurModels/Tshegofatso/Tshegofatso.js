import React, { Component } from 'react';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

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
                                'img/TshegofatsoTshepe/Tshegofatso3.jpg'
                            ]}/>
            </div>
        )
    }
}
export default tshegofatso;