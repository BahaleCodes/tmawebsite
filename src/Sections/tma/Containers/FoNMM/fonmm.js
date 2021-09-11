import React from 'react';

const Fonmm = (props) => {
    return (
        <div>
            <div id='fonmm' className='text-center'>
                <div className='container'>
                    {/* <p>{props.data ? props.data.paragraph : 'loading...'}</p> */}
                    <div className='Cnt'>
                        <img src='img/face.jpg' className='img-responsive' alt='' />
                        <div className='abtContainer'>
                            <p>{props.data ? props.data.about1 : 'loading...'}</p>
                            <p>{props.data ? props.data.about2 : 'loading...'}</p>
                            <p>{props.data ? props.data.about3 : 'loading...'}</p>
                        </div>
                    </div>
                    {/* <h1>Requirements</h1> */}
                    <h1>Applications are currently closed.</h1>
                    <h4>Follow us on our social media pages to stay in the loop about the pageant.</h4>
                    <div className='Cnt1'>
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
                                                <i className="fa fa-linkedIn"></i>
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
                        {/* <ul>{
                            props.data
                                ? props.data.requirements.map(
                                    (d, i) =>
                                        <h4 key={`${d}-${i}`}>
                                            {d}
                                        </h4>
                                )
                                : 'loading...'
                        }</ul> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fonmm;