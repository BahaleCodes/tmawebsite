import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

class bonoloS extends Component {
    render() {    
        const { state } = this.props.location;
        return (
            <div id="our-model" className="text-center">
                <div className="section-title">
                    <h2>Our Models</h2>
                    <h1>{state.name}</h1>
                </div>
                <ImageSlider images={[
                                'img/BonoloSaliwe/saliwe.jpg',
                                'img/BonoloSaliwe/saliwe2.jpg',
                                'img/BonoloSaliwe/saliwe3.jpg',
                                'img/BonoloSaliwe/saliwe4.jpg',
                                'img/BonoloSaliwe/saliwe5.jpg',
                                'img/BonoloSaliwe/saliwe6.jpg'
                            ]}/>
        </div>
        )
    }
}

export default bonoloS;