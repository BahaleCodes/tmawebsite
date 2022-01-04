import React from 'react';

const sections = () => {
    return(
        <div className={"text-center"}>
            <div className="container" >
                <div className="row">
                    {/* <div className="col-sm-4 col-md-4 col-lg-6"> */}
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                {" "}
                                <a
                                    title="Taahirah Modeling Academy"
                                    data-lightbox-gallery="gallery1"
                                    href={"/tma"}
                                    >
                                    <div className="hover-text">
                                        <h4>Taahirah Modeling Academy</h4>
                                    </div>
                                    <img
                                        loading='lazy'
                                        src={'img/TMAlogo.jpeg'}
                                        className="img-responsive"
                                        alt="Project Title"
                                    />{" "}
                                </a>{" "}
                            </div>
                            {/* </div> */}
                        </div>
                        {/* <div className="col-sm-4 col-md-4 col-lg-6">
                            <div className="portfolio-item">
                                <div className="hover-bg">
                                    {" "}
                                    <a
                                        title="TMA Charity Foundation"
                                        data-lightbox-gallery="gallery1"
                                        href={"/charity"}
                                        >
                                        <div className="hover-text">
                                            <h4>TMA Charity Foundation</h4>
                                        </div>
                                        <img
                                            src={'img/TMAlogoCharity.jpeg'}
                                            className="img-responsive"
                                            alt="Project Title"
                                        />{" "}
                                    </a>{" "}
                                </div>
                            </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default sections;