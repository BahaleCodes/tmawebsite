import React, { useState, useEffect } from 'react';

import classes from './ImageSlider.module.css';

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
        <section id="imageSlider" className={classes.ImageSlider}>
            <div className={classes.ImageSliderController}>
                <div >
                <section>
                    <div>
                        <img loading='lazy' alt='Taahirah Modeling Academy Slider' className={classes.img_responsive_sl} src={images[currentSlide]} />
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