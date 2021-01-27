import React from 'react';

import img0 from '../../img/projects/indivisualWebsite/img0.jpg';

function IndivisualWebsite (props) {
    return <div>
        <div className="content-scroll" style={{textAlign: "center", width:"80%"}}>
            <p id="start-of-scroll">
                <a href="https://www.indivisualiv.com" target="_blank" rel="noopener noreferrer">www.indivisualiv.com</a>
            </p>
            <img src={img0} alt="sample code of the project" className="project_img"
                onClick={() => props.openModal(img0)}></img>
            <p className="space" id="end-of-scroll">
                Frontend:<br/>
                HTML, CSS, BootStrap, JS, JQuery
            </p>
        </div>
    </div>
}

export default IndivisualWebsite;