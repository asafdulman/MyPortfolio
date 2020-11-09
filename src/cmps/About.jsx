import React from 'react'
import profile from '../assets/img/profile.jpg'
import idea from '../assets/img/idea.svg'
import responsive from '../assets/img/responsive.svg'
import social from '../assets/img/social.svg'

export function About() {

    return (
        <div name="about" className="about-full">
        <div id="about" className="about-box">
            <h1 className="about-heading">Myself</h1>
            <div className="about-main">
                <div className="about-details">
                    <div className="about-details-img">
                        <img src={profile} alt="" />
                    </div>
                    <div className="about-details-description">
                        <p>B.A in behavioural sciences. Vast expereince in the Ad-tech world, and a sports junkie</p>
                        <p>Resourceful, always trying to think outside the box, A keen eye for the smallest of details and imperfections.</p>
                        <p>What i like most about Frontend Development? UI building with a pixel-perfect degree, implementing UX funcionalities and making things look great.</p>
                    </div>
                </div>
                <div className="about-skills">
                    <div className="skills-details">
                        <div className="img-box">
                            <img src={idea} alt="" />

                        </div>
                        <div className="skills-data-box">
                            <h3>Intuitive</h3>
                            <p>Strong preference for easy to use, intuitive UX/UI.</p>

                        </div>
                    </div>
                    <div className="skills-details">
                        <div className="img-box">
                            <img src={responsive} alt="" />

                        </div>
                        <div className="skills-data-box">
                            <h3>Responsive</h3>
                            <p>My layouts will work on any device, big or small.</p>

                        </div>
                    </div>
                    <div className="skills-details">
                        <div className="img-box">
                            <img src={social} alt="" />

                        </div>
                        <div className="skills-data-box">
                            <h3>Social</h3>
                            <p>Fun to work with. Is it important? Of course!</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

// import handleViewport from 'react-in-viewport';

// function Block(props) {
//   const { inViewport, forwardedRef } = props;
//   const color = inViewport ? '#217ac0' : '#ff9800';
//   const text = inViewport ? 'In viewport' : 'Not in viewport';
//   return (
//     <div className="viewport-block" ref={forwardedRef}>
//       <h3>{ text }</h3>
//       <div style={{ width: '400px', height: '300px', background: color }} />
//     </div>
//   );
// };

// const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

// function Component (props) { 
//   <div>
//     <ViewportBlock onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')} />
//   </div>
// }
