import React, { useState, useEffect } from 'react';

import classes from './Slideshow.module.css';

export default function Slideshow({images=[], interval=3000}){
    const [thumbnails, setThumnails] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});
    const [nextSlideStyle, setNextSlideStyle] = useState({});
    const [previousSlideStyle, setPreviousSlideStyle] = useState({});

    useEffect(() => {
        setThumnails(images);

        setCurrentSlideStyle({
            backgroundImage: "url('"+images[currentSlide]+"')",
            backgroundPosition: 'center',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: '95rem',
            display: 'block',
            maxWidth: '100%',
            // height: 'auto',
        });
        if(currentSlide>0){
            setPreviousSlideStyle({
                backgroundImage: "url('"+images[currentSlide-1]+"')"
            });
        }else{
            setPreviousSlideStyle({
                backgroundImage: "url('"+images[images.length-1]+"')"
            });
        }

        if(currentSlide === images.length-1){
            setNextSlideStyle({
                backgroundImage: "url('"+images[0]+"')"
            });
        }else{
            setNextSlideStyle({
                backgroundImage: "url('"+images[currentSlide+1]+"')"
            });
        } 

        const loop = setInterval(()=>{
            if(currentSlide === images.length-1){
                setCurrentSlide(0);
            }else{
                setCurrentSlide(currentSlide+1);
            }
        }, interval);
        return () => clearInterval(loop);  
    }, [images, currentSlide, interval]);

    return (
        <section className={classes.Slideshow}>
            <div >
                <div >
                    <div >
                        <img loading='lazy' alt='Slideshow' className="img-responsive" src={images[currentSlide]} />
                    </div>
                </div>
            </div>
        </section>
    );
};