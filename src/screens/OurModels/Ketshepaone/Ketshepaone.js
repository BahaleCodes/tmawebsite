import React, { Component } from 'react';

import ImageSlider from '../../../components/ImageSlider/ImageSlider';

class ketshepaone extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                'img/KetshepaoneDireng/ketshepaone(2).jpg',
                                'img/KetshepaoneDireng/ketshepaone.jpg',
                                'img/KetshepaoneDireng/ketshepaone2.jpg',
                                'img/KetshepaoneDireng/ketshepaone(4).jpg',
                                'img/KetshepaoneDireng/ketshepaone(5).jpg',
                                'img/KetshepaoneDireng/ketshepaone(6).jpg'
                            ]}/>
        </div>
        )
    }
}

export default ketshepaone;