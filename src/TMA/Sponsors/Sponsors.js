import React, {Component} from 'react';

class Sponsors extends Component {
    render() {
        return (
            <div id="sponsors" className="text-center">
                <div className="section-title" >
                    <h2>Sponsors</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="portfolio-item">
                                <div className="hover-bg">
                                    {" "}
                                    <a
                                    href={"https://www.mafihub.co.za/"}
                                    title="Mafikeng Digital Innovation Hub"
                                    data-lightbox-gallery="gallery1"
                                    >
                                    <div className="hover-text">
                                        <h4>MDIHub</h4>
                                    </div>
                                    <img
                                        src={'img/sponsors/IMG_2026.jpeg'}
                                        className="img-responsive"
                                        alt="Mafikeng Digital Innovation Hub"
                                    />{" "}
                                    </a>{" "}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="portfolio-item">
                                <div className="hover-bg">
                                    {" "}
                                    <a
                                    href={"https://www.facebook.com/Sholex-Lewix-Fashion-Designer-131503686999149/photos/"}
                                    title="Sholex Lewix Fashion Designer"
                                    data-lightbox-gallery="gallery1"
                                    >
                                    <div className="hover-text">
                                        <h4>Sholex Lewix</h4>
                                    </div>
                                    <img
                                        src={'img/sponsors/IMG_2037.jpeg'}
                                        className="img-responsive"
                                        alt="Sholex Lewix Fashion Designer"
                                    />{" "}
                                    </a>{" "}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="portfolio-item">
                                <div className="hover-bg">
                                    {" "}
                                    <a
                                    href={"https://www.facebook.com/lichibrandSA/"}
                                    title="Lichibrand Couture"
                                    data-lightbox-gallery="gallery1"
                                    >
                                    <div className="hover-text">
                                        <h4>Lichibrand</h4>
                                    </div>
                                    <img
                                        src={'img/sponsors/IMG_2036.jpeg'}
                                        className="img-responsive"
                                        alt="Lichibrand Couture"
                                    />{" "}
                                    </a>{" "}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="portfolio-item">
                                <div className="hover-bg">
                                    {" "}
                                    <a
                                    href={"/"}
                                    title="Da6lacknwhite Photography"
                                    data-lightbox-gallery="gallery1"
                                    >
                                    <div className="hover-text">
                                        <h4>Da6lacknwhite</h4>
                                    </div>
                                    <img
                                        src={'img/sponsors/IMG_2035.jpeg'}
                                        className="img-responsive"
                                        alt="Da6lacknwhite Photography"
                                    />{" "}
                                    </a>{" "}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="portfolio-item">
                                <div className="hover-bg">
                                    {" "}
                                    <a
                                    href={"/"}
                                    title="MK Media Production"
                                    data-lightbox-gallery="gallery1"
                                    >
                                    <div className="hover-text">
                                        <h4>MK Media Production (pty) ltd</h4>
                                    </div>
                                    <img
                                        src={'img/sponsors/IMG_5496.jpeg'}
                                        className="img-responsive"
                                        alt="Da6lacknwhite Photography"
                                    />{" "}
                                    </a>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sponsors;