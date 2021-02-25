import React, { useEffect, useRef } from 'react';

import img0 from '../../img/projects/restaurantWebsite/img0.jpg';

function RestaurantWebsite (props) {
    const top = useRef(null);

    useEffect(() => {
        top.current.scrollIntoView();
    })

    return <div className="animated" ref={top}>
        <img src={img0} alt="sample code of the project" className="project_img" id="start-of-scroll"
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
            <a href="https://github.com/andy-thedev/Bootstrap-Restaurant-Website" target="_blank" rel="noopener noreferrer">In this Github link</a>
        </p>
    </div>
}

export default RestaurantWebsite;