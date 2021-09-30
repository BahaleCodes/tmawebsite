import React, { Component } from 'react';

import ImageSlider from '../../../Components/ImageSlider/ImageSlider';

class karabo extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                'img/Karabo/IMG_8578.jpg',
                                'img/Karabo/IMG_8586nw.jpg',
                                'img/Karabo/IMG_8601.jpg',
                                'img/Karabo/karabo.jpg'
                            ]}/>
            </div>
        )
    }
}

export default karabo;