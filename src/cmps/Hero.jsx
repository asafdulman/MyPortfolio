import { animateScroll as scroll } from "react-scroll";
import { Animated } from "react-animated-css";


export function Hero() {

    function scrollToPoint() {
        scroll.scrollTo(950);
    }

    return (
        <div className="hero">
            <Animated animationIn="bounceInDown" animationOut="zoomOutDown" animationInDuration={1500} animationOutDuration={1000} isVisible={true}>
                <div className="heading">
                    <h2>Hello, I'm <span>Asaf Dulman.</span> </h2>
                    <h2>I'm a full-stack web developer</h2>
                    <button onClick={() => { scrollToPoint() }}>View my work <i className="fas fa-arrow-right arrow-right"></i></button>
                </div>
            </Animated>

            <div class="diagonal-hero-bg">
                <div class="stars">
                    <div class="small"></div>
                    <div class="medium"></div>
                    <div class="big"></div>
                </div>
            </div>
            {/* 
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div> */}
        </div>
    )
}
