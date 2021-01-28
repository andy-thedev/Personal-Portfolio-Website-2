import React from 'react';

import img0 from '../../img/projects/oldPersonalPortfolio/img0.jpg'

function oldPersonalPortfolio (props) {
    return <div className="animated">
        <img src={img0} id="start-of-scroll" className="project_img" alt="sample code of the project"
            onClick={() => props.openModal(img0)}/>
        <p className="space" id="end-of-scroll">
            Frontend:<br/>
            HTML, CSS, JS
        </p>
    </div>
}

export default oldPersonalPortfolio;