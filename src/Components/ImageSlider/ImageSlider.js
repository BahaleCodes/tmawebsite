import React, { useState, useEffect } from 'react';

import './ImageSlider.css';

export default function ImageSlider({images=[]}){
    const [thumbnails, setThumnails] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});
    useEffect(() => {
        setThumnails(images);
        setCurrentSlideStyle({
            backgroundImage: "url('"+images[currentSlide]+"')",
            backgroundPosition: 'center',
            backgroundSize: '100% 750px',
            backgroundRepeat: 'no-repeat',
            height: 'auto',
        });
    }, [images, currentSlide]);

    function previous(){
        if(currentSlide>0){
            setCurrentSlide(currentSlide-1);
        }else{
            setCurrentSlide(thumbnails.length-1);
        }
    }

    function next(){
        if(currentSlide === thumbnails.length-1){
            setCurrentSlide(0);
        }else{
            setCurrentSlide(currentSlide+1);
        }
    }

    return (
        <section id="imageSlider" className={"ImageSlider"}>
            <div className={"ImageSliderController"}>
                <div >
                <section>
                    <div>
                        <img loading='lazy' className={"img-responsive-sl"} src={images[currentSlide]} />
                    </div>
                </section>
            </div>
                <div className='span-P' onClick={previous}>
                    <i className="fa fa-arrow-circle-left"></i>
                </div>
                <div className='span-N' onClick={next}>
                    <i className="fa fa-arrow-circle-right"></i>
                </div>
            </div>
        </section>
    );
};