import React from 'react';
import {BsChevronDown} from 'react-icons/bs';
import portfolio0 from '../img/thumbnails/portfolio-00.jpg'
import portfolio1 from '../img/thumbnails/portfolio-01.jpg'
import portfolio2 from '../img/thumbnails/portfolio-02.jpg'
import portfolio3 from '../img/thumbnails/portfolio-03.jpg'
import portfolio4 from '../img/thumbnails/portfolio-04.jpg'
import portfolio5 from '../img/thumbnails/portfolio-05.jpg'
import portfolio6 from '../img/thumbnails/portfolio-06.jpg'

function MyWorkScrollContent (props) {
    return <div>
        <div className="content-scroll" style={{textAlign: "right", marginLeft: "18rem"}}>
            <img src={portfolio0} alt="image" className="thumbnail_img"></img>
            <img src={portfolio1} alt="image" className="thumbnail_img"></img>
            <img src={portfolio2} alt="image" className="thumbnail_img"></img>
            <img src={portfolio3} alt="image" className="thumbnail_img"></img>
            <img src={portfolio4} alt="image" className="thumbnail_img"></img>
            <img src={portfolio5} alt="image" className="thumbnail_img"></img>
            <img src={portfolio6} alt="image" className="thumbnail_img"></img>
        </div>
    </div>
}

export default MyWorkScrollContent;