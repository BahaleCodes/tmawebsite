import React from "react";

import Slideshow from '../../components/Slideshow/Slideshow';

const Home = () => {
    return (
        <div id="home" className="text-center">
            <div className="portfolio-item">
                <Slideshow
                    interval={3000}
                    images={[
                        'img/Group/IMG_8277.jpg',
                        'https://firebasestorage.googleapis.com/v0/b/memorypics-cd4a8.appspot.com/o/tma%2Ftah.jpg?alt=media&token=e7848720-83d9-4494-b69d-7aa40c19550d',
                        'img/slide/Slide4.jpeg',
                        'img/slide/Slide5.jpeg',
                        'img/Group/IMG_8256.jpg',
                        'img/slide/Slide6.jpeg',
                        'img/slide/Slide8.jpeg',
                        'img/slide/gp1.jpeg',
                        'img/slide/gp2.jpeg',
                        'img/slide/gp3.jpeg'
                    ]} />
            </div>
        </div>
    );
}

export default Home;
