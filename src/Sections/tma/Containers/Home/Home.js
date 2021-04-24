import React, { Component } from "react";

import Slideshow from '../../../../Components/Slideshow/Slideshow';

export class Home extends Component {
    render() {
        return (
            <div id="home" className="text-center">
                <div className="portfolio-item">
                    <Slideshow 
                        interval={3000}
                            images={[
                                'img/Group/IMG_8277.jpg',
                                'img/tah.jpg',
                                'img/slide/Slide4.jpeg',
                                'img/slide/Slide5.jpeg',
                                'img/Group/IMG_8256.jpg',
                                'img/slide/Slide6.jpeg',
                                'img/slide/Slide8.jpeg',
                            ]}/>
                        </div>
                </div>
        );
    }
}

export default Home;
