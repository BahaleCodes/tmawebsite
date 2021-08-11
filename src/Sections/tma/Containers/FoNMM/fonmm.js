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
                    <h1>Requirements</h1>
                    <div className='Cnt1'>
                        <ul>{
                            props.data
                                ? props.data.requirements.map(
                                    (d, i) =>
                                        <h4 key={`${d}-${i}`}>
                                            {d}
                                        </h4>
                                )
                                : 'loading...'
                        }</ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fonmm;