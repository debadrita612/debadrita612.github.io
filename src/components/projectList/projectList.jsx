import React from "react";
import './projectList.css';
import Project from '../project/project'
import {projects} from '../../data.js';

const ProjectList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Projects</h1>
                <p className="pl-desc">
                    I have hands-on experience in full stack web development projects. Check them out below. 
                </p>
            </div>
            <div className="pl-list">
                {projects.map((item) => (
                    <Project key={item.id} img={item.img} link={item.link} title={item.title} desc={item.desc}/>
                ))}
            </div>
        </div>
    );
}

export default ProjectList;
