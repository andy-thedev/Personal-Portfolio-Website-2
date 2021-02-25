import React, { useEffect, useRef } from 'react';

import img0 from '../../img/projects/indivisualWebsite/img0.jpg';

function IndivisualWebsite (props) {
    const top = useRef(null);

    useEffect(() => {
        top.current.scrollIntoView();
    })

    return <div className="animated" ref={top}>
        <p id="start-of-scroll">
            <a href="https://www.indivisualiv.com" target="_blank" rel="noopener noreferrer">www.indivisualiv.com</a>
        </p>
        <img src={img0} alt="sample code of the project" className="project_img"
            onClick={() => props.openModal(img0)}/>
        <p className="space">
            Frontend:<br/>
            HTML, CSS, BootStrap, JS, JQuery
        </p>
        <h2 className="space">
            More info:
        </h2>
        <p id="end-of-scroll">
            Code and documentation:
        </p>
        <p>
            <a href="https://github.com/andy-thedev/IV-Website-Template" target="_blank" rel="noopener noreferrer">In this Github link</a>
        </p>
    </div>
}

export default IndivisualWebsite;