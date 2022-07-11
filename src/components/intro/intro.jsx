import React from "react";
import './intro.css';
import laptop from '../../images/laptop.avif';

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, I am</h2>
                    <h1 className="i-name">Debadrita Bhattacharyya</h1>
                    <h3 className="i-am">I'm a</h3>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">CSE Undergrad</div>
                            <div className="i-title-item">Programmer</div>
                            <div className="i-title-item">Web Developer</div>
                        </div>
                    </div>
                    {/* <p className="i-desc">
                    I am pursuing Bachelors in Computer Science Engineering. I am an enthusiastic learner who is always ready to take up new challenges and learn new skills. I love to exchange ideas, spread knowledge and positivity. 
                    </p> */}
                </div>
            </div>
            <div className="i-right">
                <img src={laptop} alt="laptop-pic" className="i-img"/>
            </div>
        </div>
    );
}

export default Intro;
