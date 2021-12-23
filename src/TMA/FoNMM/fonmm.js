import React from 'react';

const Fonmm = (props) => {
    return (
        <div>
            <div id='fonmm' className='text-center'>
                <div className='container'>
                    <div className='Cnt'>
                        <img
                            loading='lazy'
                            src='https://firebasestorage.googleapis.com/v0/b/memorypics-cd4a8.appspot.com/o/tma%2Fface.jpeg?alt=media&token=80357c29-27cf-4c3a-b91e-dbd240411c49`w'
                            className='img-responsive' alt='' />
                        <div className='abtContainer'>
                            <p>{props.data ? props.data.statement : 'loading...'}</p>
                        </div>
                    </div>
                    <h1 style={{ color: "white" }}>Applications are currently closed.</h1>
                    <h4>Follow us on our social media pages to stay in the loop about the pageant.</h4>
                    <br />
                    <h1>Click the link bellow to see the finalist</h1>
                    <a href={'/finalists'} className="btn btn-custom btn-lg">Finalist</a>
                    <div className='Cnt1 text-center'>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="social">
                                    <ul>
                                        <li>
                                            <a href={'https://www.facebook.com/Taahirah-Modeling-Academy-100298541503442/'} >
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={'https://www.linkedin.com/in/taahirah-zungu-95a194203/?originalSubdomain=za'} >
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={'https://www.instagram.com/taahirah_modeling_academy/?hl=en'} >
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fonmm;


{/* <p>{props.data ? props.data.about1 : 'loading...'}</p>
<p>{props.data ? props.data.about2 : 'loading...'}</p>
<p>{props.data ? props.data.about3 : 'loading...'}</p> */}