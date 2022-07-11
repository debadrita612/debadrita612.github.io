import React from "react";
import './skill.css';

const Skill = () => {
    return (
        <div>
            <div className="s">
                <div className="s-left">
                    <h1 className="s-skill">Skills</h1>
                        <ul className="s-skills-desc">
                            <li>C / C++</li>
                            <li>Data Structures</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>Javascript</li>
                            <li>React JS</li>
                        </ul>
                </div>
                <div className="s-right">
                <h1 className="s-exp">Experience</h1>
                        <ul className="s-exp-desc">
                            <li>
                                <h3>Girl Script Summer of Code' 22</h3>
                                <p><h4>Open Source Contributor</h4>
                                Actively contributed at <a className="s-link" href="https://github.com/ZeroOctave/ZeroOctave-Javascript-Projects" target="_blank" rel="noreferrer">ZeroOctave-Javascript-Projects</a>. Contributed some of my JS projects like Sticky Notes Application and Stopwatch Application to their repo.
                                </p>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default Skill;
