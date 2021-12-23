import React, { Component } from 'react'

import classes from './FonmmHeader.module.css'; 

class Slide extends Component {
    render() {
        let slideStyle = { backgroundImage: `url( ${this.props.background})` };
        return (
            <div
                className={classes.slider__slide}
                data-active={this.props.active}
                style={slideStyle}
            >
            </div>
        );
    }
}

class FonmmHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSlide: 0,
            interval: 3,
            autoplay: true,
            slides: [
                "img/FONMM/winners1.jpg",
                "img/FONMM/winners2.jpg",
                "img/FONMM/winners3.jpg",
                "img/FONMM/winners4.jpg",
                "img/FONMM/winners5.jpg",
                "img/FONMM/winners6.jpg",
                "img/FONMM/winners7.jpg",
                "img/FONMM/winners8.jpg"
            ]
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            if (this.state.autoplay) {
                this.nextSlide();
            }
        }, this.state.interval * 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    pause() {
        this.setState({ autoplay: false });
    }

    resume() {
        this.setState({ autoplay: true });
    }

    prevSlide() {
        let slide = this.state.activeSlide - 1 < 0
            ? this.state.slides.length - 1
            : this.state.activeSlide - 1;
        this.setState({
            activeSlide: slide
        });
    }

    nextSlide() {
        let slide = this.state.activeSlide + 1 < this.state.slides.length
            ? this.state.activeSlide + 1
            : 0;
        this.setState({
            activeSlide: slide
        });
    }

    render() {
        return (
            <div id='homeSlider' onMouseEnter={this.pause.bind(this)} onMouseLeave={this.resume.bind(this)}>
                {this.state.slides.map((slide, index) => {
                    return (
                        <Slide
                            background={slide}
                            active={index === this.state.activeSlide}
                        />
                    );
                })}
            </div>
        );
    }
}

export default FonmmHeader;