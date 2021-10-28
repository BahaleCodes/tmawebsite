import React from 'react'

import Slideshow from '../../Components/Slideshow/Slideshow';

const Workshops = (props) => {
    return (
        <div id="workshop" className="text-center">
            <div className="section-title">
                <h2>
                    Workshops
                </h2>
                <div className="container">
                    <div className="row">

                        <h1>Beauty and brains is not water and oil</h1>
                        <div className="col-xs-12 col-md-6">
                            <div className="about-text">
                                <h3>
                                    {
                                        props.data
                                            ? props.data.paragraph
                                            : 'loading...'
                                    }
                                </h3>
                                <p>Guest Speakers :</p>
                                <div className="list-style">
                                    <ul>
                                        {props.data
                                            ? props.data.speakers.map(
                                                (d, i) =>
                                                    <h4 key={`${d}-${i}`}>
                                                        {d}
                                                    </h4>
                                            )
                                            : 'loading'}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <Slideshow images={[
                                'https://firebasestorage.googleapis.com/v0/b/memorypics-cd4a8.appspot.com/o/tma%2Fwork1.jpg?alt=media&token=26b03085-a271-4dc6-8075-b7e7007880e0',
                                'https://firebasestorage.googleapis.com/v0/b/memorypics-cd4a8.appspot.com/o/tma%2Fwork2.jpg?alt=media&token=6174217f-bea2-4481-986a-c19b2b14922c'
                            ]} />
                            {/* <img src={'img/work.jpg'} className="img-responsive" alt=""/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workshops;