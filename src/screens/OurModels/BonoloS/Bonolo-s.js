import React, { Component } from 'react';

import ImageSlider from '../../../components/ImageSlider/ImageSlider';

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
                                'img/BonoloSaliwe/saliwe6.jpg',
                                'img/BonoloSaliwe/Saliwe(1).jpg',
                                'img/BonoloSaliwe/Saliwe(3).jpg',
                                'img/BonoloSaliwe/Saliwe(4).jpg',
                                'img/BonoloSaliwe/Saliwe(5).jpg',
                                'img/BonoloSaliwe/Saliwe(6).jpg',
                                'img/BonoloSaliwe/Saliwe(7).jpg',
                                'img/BonoloSaliwe/Saliwe(4).jpg',
                                'img/BonoloSaliwe/Saliwe(9).jpg'
                            ]}/>
        </div>
        )
    }
}

export default bonoloS;