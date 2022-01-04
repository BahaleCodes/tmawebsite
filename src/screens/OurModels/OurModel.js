import React from "react";
import { Link } from 'react-router-dom';

const OurModel = (props) => {
    return (
        <div id='our-model' className="col-sm-6 col-md-4 col-lg-4">
            <div className="portfolio-item">
                <div className="hover-bg">
                    {" "}
                        <Link
                            to={{
                                pathname: `${props.link}`,
                                state: {
                                    name: `${props.name}`,
                                    pics: `${props.pics}`
                                }
                            }}
                            title={props.name}
                            data-lightbox-gallery="gallery1"
                            // href={props.link}
                            >
                                <div className="hover-text">
                                    <h4>
                                        {props.name}
                                    </h4>
                                </div>
                                <div className="img-container">
                                    <img 
                                        loading='lazy'
                                        src={props.pic}
                                        className="img-responsive"
                                        alt={props.name}
                                    />{" "}

                                </div>
                            </Link>{" "}
                </div>
            </div>
        </div>
    )
}

export default OurModel;