import React from 'react';

import img0 from '../../img/projects/restaurantWebsite/img0.jpg';

function RestaurantWebsite (props) {
    return <div className="animated">
        <img src={img0} alt="sample code of the project" className="project_img" id="start-of-scroll"
            onClick={() => props.openModal(img0)}/>
        <p className="space" id="end-of-scroll">
            Frontend:<br/>
            HTML, CSS, BootStrap, JS, JQuery
        </p>
    </div>
}

export default RestaurantWebsite;