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
        <section className={"ImageSlider"}>
            <div className={"ImageSliderController"}>
                <div >
                <section>
                    <div>
                        <img className={"img-responsive"} src={images[currentSlide]} />
                    </div>
                </section>
            </div>
                <h3 className={"span-P"} onClick={previous}>PREV</h3>
                <h3 className={"span-N"} onClick={next}>NEXT</h3>
            </div>
        </section>
    );
};