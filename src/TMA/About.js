import React, { useEffect, useState } from 'react';

import jsonData from '../data/data.json';
import Benefits from './Benefits/Benefits';
import FAQ from './FAQ/FAQ';
import Fitness from './Fitness/Fitness';
import Sponsors from './Sponsors/Sponsors';
import Workshops from './Workshops/Workshops';

const About = (props) => {
    const [tmaData, setTmaData] = useState({});
    useEffect(() => {
        setTmaData(jsonData);
    }, [])
    return (
        <div style={{
            marginTop: "-10rem"
        }} className='container'>
            <div className='text-center section-title'>
                <h2>About Us</h2>
            </div>
            <div className='col-md-12 body-padding'>
                <p>
                    {
                        tmaData.About
                            ? tmaData.About.paragraph
                            : 'loading...'
                    }
                </p>
                <div className="about-text">
                    {
                        tmaData.About
                            ? tmaData.About.sec2.map((d, i) => (
                                <div key={i}>
                                    <h3>{d.heading}</h3>
                                    <p>{d.body}</p>
                                </div>
                            ))
                            : 'loading...'
                    }
                </div>
            </div>
            <div className='col-md-12 body-padding'>
                <div className='text-center section-title'>
                    <h2>Our Projects</h2>
                </div>
                <h1>Face of Ngaka Modiri Moloma</h1>
                <div style={{padding: "2rem"}} className='img-container'>
                    <img alt='Face of Ngaka Modiri Molema' className='img-responsive' src='img/face.jpeg' />
                </div>
                <h1>Mr. and Mrs. United Nations North West</h1>
                <div style={{padding: "2rem"}} className='img-container'>
                    <img alt='Mr. and Mrs. United Nations North West' className='img-responsive' src='img/IMG_3083.jpg' />
                </div>
            </div>
            <div className='col-md-12 text-center body-padding'>
                <div className='container text-center'>
                    <div className='section-title'>
                        <h2>2021 year-end ceremony</h2>
                        <h3>2021 Has been a year worth celebrating and we definately are.</h3>
                        <h5>More information to be disclosed</h5>
                    </div>
                </div>
            </div>
            <Benefits data={tmaData.Benefits} />
            <Fitness data={tmaData.Fitness} />
            <Workshops data={tmaData.Workshops} />
            <FAQ data={tmaData.FAQ} />
            <Sponsors />
        </div>
    )
}

export default About;