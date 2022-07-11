import React from "react";
import './project.css';

const Project = ({img, link, title, desc}) => {
    return(
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>
            <p className="p-title">{title}</p>
            <p className="p-desc">{desc}</p>
            </div>
        </div>
    );
}

export default Project;
