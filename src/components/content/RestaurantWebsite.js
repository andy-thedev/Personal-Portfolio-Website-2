import React from 'react';

import img0 from '../../img/projects/restaurantWebsite/img0.jpg';

function RestaurantWebsite (props) {
    return <div>
        <div className="content-scroll" style={{textAlign: "center", width:"80%"}}>
            <img src={img0} alt="sample code of the project" className="project_img" id="start-of-scroll"></img>
            <p className="space" id="end-of-scroll">
                Frontend:<br/>
                HTML, CSS, BootStrap, JS, JQuery
            </p>
        </div>
    </div>
}

export default RestaurantWebsite;