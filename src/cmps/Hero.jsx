import { animateScroll as scroll } from "react-scroll";
import { Animated } from "react-animated-css";


export function Hero() {

    function scrollToPoint() {
        //big screen
        if (window.screen.width >= 1900) {
            scroll.scrollTo(950);
            //iphone 6/7/8 plus
        } else if (window.screen.width <= 450 && window.screen.width >= 401 && window.screen.height >= 710 && window.screen.height <= 799) {
            scroll.scrollTo(750);
        }
        else if (window.screen.width <= 450 && window.screen.width >= 401 && window.screen.height >= 800) {
            scroll.scrollTo(825);
        }

        //iphoneX
        else if (window.screen.width <= 400 && window.screen.height >= 710) {
            scroll.scrollTo(820);
        }
        //iphone 6/7/8
        else if (window.screen.width <= 400) {
            scroll.scrollTo(680);
        }
        //laptop
        else {
            scroll.scrollTo(630);
        }
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
        </div>
    )
}
