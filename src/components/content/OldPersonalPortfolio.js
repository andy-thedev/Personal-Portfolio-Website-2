import React, { useEffect, useRef } from 'react';

import img0 from '../../img/projects/oldPersonalPortfolio/img0.jpg'

function OldPersonalPortfolio (props) {
    const top = useRef(null);

    useEffect(() => {
        top.current.scrollIntoView();
    })

    return <div className="animated" ref={top}>
        <img src={img0} id="start-of-scroll" className="project_img" alt="sample code of the project"
            onClick={() => props.openModal(img0)}/>
        <p className="space">
            Frontend:<br/>
            HTML, CSS, JS
        </p>
        <h2 className="space">
            More info:
        </h2>
        <p id="end-of-scroll">
            Code and documentation:
        </p>
        <p>
            <a href="https://github.com/andy-thedev/Personal-Portfolio-Website-1" target="_blank" rel="noopener noreferrer">In this Github link</a>
        </p>
    </div>
}

export default OldPersonalPortfolio;