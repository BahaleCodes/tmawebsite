import React from 'react'

const Fitness = (props) => {
    return (
        <div id="fitness" className="text-center">
            <div className="section-title">
                <h2>
                    Fitness
                </h2>
                <div className="container">
                    <div className="row">
                        <h1>A healthy body is a beautiful body</h1>
                        <div className="col-xs-12 col-md-6">
                            <img
                                loading='lazy'
                                src={"https://firebasestorage.googleapis.com/v0/b/memorypics-cd4a8.appspot.com/o/tma%2Ffitness.jpg?alt=media&token=2ba12fee-9093-416a-b4d5-b4dcf8f387a1"}
                                className="img-responsive"
                                alt=""
                            />
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="about-text">
                                <h3>
                                    {
                                        props.data
                                            ? props.data.paragraph
                                            : 'loading...'
                                    }
                                </h3>
                                <div className="list-style">
                                    <ul>
                                        {
                                            props.data
                                                ? props.data.trainings.map(
                                                    (d, i) =>
                                                        <p key={`${d}-${i}`}>
                                                            {d}
                                                        </p>)
                                                : 'loading'
                                        }
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

export default Fitness;