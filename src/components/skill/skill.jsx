import React from "react";
import './skill.css';

const Skill = () => {
    return (
        <div>
            <div className="s">
                <div className="s-left">
                    <h1 className="s-skill">Skills</h1>
                        <ul className="s-skills-desc">
                            <li>Java</li>
                            <li>C / C++</li>
                            <li>Data Structures</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>Javascript</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>SQL</li>
                            <li>DBMS</li>
                            <li>OOPS Concept</li>
                            <li>Computer Networks</li>
                        </ul>
                </div>
                <div className="s-right">
                <h1 className="s-exp">Experience</h1>
                        <ul className="s-exp-desc">
                                <h3>Girl Script Summer of Code'22 <h5>(03/2022 - 05/2022)</h5></h3>
                                <p><h4>Open Source Contributor</h4>
                                    <li>Actively contributed some of my JS projects at <a className="s-link" href="https://github.com/ZeroOctave/ZeroOctave-Javascript-Projects" target="_blank" rel="noreferrer">ZeroOctave-Javascript-Projects</a> repository.</li> 
                                    <li>Gained knowledge on Git and GitHub.</li>
                                    <li>Ranked under Top 250 among 6000+ participants. </li>
                                </p>
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default Skill;
