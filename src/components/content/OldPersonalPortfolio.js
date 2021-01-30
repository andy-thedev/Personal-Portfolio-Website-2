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
        <p className="space" id="end-of-scroll">
            Frontend:<br/>
            HTML, CSS, JS
        </p>
    </div>
}

export default OldPersonalPortfolio;