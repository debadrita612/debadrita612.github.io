import React from "react";
import './about.css';
import programmer from '../../images/programmer.png';

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={programmer} alt="programmer" className="a-img"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                    <p className="a-desc">
                    I am a final year undergraduate in Computer Science Engineering. An enthusiastic learner who is always ready to take up new challenges and learn new skills. I have a deep interest in Web development. I love to exchange ideas, spread knowledge and positivity. 
                    </p>
                <h1 className="a-edu">Education</h1>
                    <ul className="a-edu-desc">
                        <li>B.Tech in Computer Science Engineering 
                            <p>CGPA = 9.62 (Upto 5th Sem)</p></li>
                        <li>12th - Bholananda National Vidyalaya (CBSE) 
                            <p>Score : 94% (PCM)</p></li>
                        <li>10th - Modern English Academy (ICSE) 
                            <p>Score : 97.2%</p></li>
                    </ul>
            </div>
        </div>
    );
}

export default About;
