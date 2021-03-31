import React, { Component } from "react";

import Slideshow from '../../../../Components/Slideshow/Slideshow';
import pic1 from '../../../../img/tah.jpg';
import pic2 from '../../../../img/slide/Slide1.jpeg';
import pic5 from '../../../../img/slide/Slide4.jpeg';
import pic6 from '../../../../img/slide/Slide5.jpeg';
import pic7 from '../../../../img/slide/Slide6.jpeg';
import pic8 from '../../../../img/slide/Slide7.jpeg';
import pic9 from '../../../../img/slide/Slide8.jpeg';
import './Home.css';

export class Home extends Component {
    render() {
        return (
            <div id="home" className="text-center">
                <div className="portfolio-item">
                    <Slideshow 
                        interval={3000}
                            images={[
                                pic1,
                                pic2,
                                pic5,
                                pic6,
                                pic7,
                                pic8,
                                pic9,
                            ]}/>
                        </div>
                </div>
        );
    }
}

export default Home;
