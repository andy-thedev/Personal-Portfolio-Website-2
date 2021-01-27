import React from 'react';

import img0 from '../../img/projects/eCommerceWebsite/img0.JPG';
import img1 from '../../img/projects/eCommerceWebsite/img1.JPG';

import addToCart from '../../videos/eCommerceWebsite/1add_to_cart.mp4'
import login from '../../videos/eCommerceWebsite/2login.mp4'
import sort from '../../videos/eCommerceWebsite/3sort.mp4'
import create from '../../videos/eCommerceWebsite/4create_product.mp4'
import editDelete from '../../videos/eCommerceWebsite/5edit_delete_product.mp4'

function ECommerceWebsite (props) {
    return <div>
        <div className="content-scroll" style={{textAlign: "center", width:"80%"}}>
            <img src={img0} id="start-of-scroll" className="project_img" alt="sample code of the project"
                onClick={() => props.openModal(img0)}></img>
            <p>
                This project demonstrates a fully functioning eCommerce website, 
                utilizing the MERN (MongoDB, Express, React, Node) stack.
            </p>
            <img src={img1} className="project_img" alt="Sidebar component"
                onClick={() => props.openModal(img1)}></img>
            <p>
                <i>Above: Sort by category component</i>
            </p>
            <p className="space">
                Front-end: ReactJS, HTML, CSS, Redux<br/>
                Back-end: NodeJS, ExpressJS<br/>
                Database: MongoDB<br/>
                Version Control: Git Bash
            </p>
            <p className="space">
                Feature 1:
            </p>
            <p>
                Add to cart functionality utilizing redux state management.
            </p>
            <p>
                Cart information is stored locally through js-cookie management, so
                users may navigate through different pages without losing their cart information.
            </p>
            <video controls className="project_video">
                <source src={addToCart} type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>
            <p className="space">
                Feature 2:
            </p>
            <p>
                Admin/User login controlled by JWT authentication. 
            </p>
            <p>
                User information is tokenized and verified with the database to safely
                record, and match login information.
            </p>
            <p>
                Users may update their information through the profile page, and 
                available functionalities differ depending on admin status 
                (ie: manage products, users). 
            </p>
            <p>
                Once logged in, user information is stored
                via cookie, with tokens that expire by the designated session timer. 
                During this time, users may navigate through different pages and return,
                without having to re-login.
            </p>
            <video controls className="project_video">
                <source src={login} type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>
            <p className="space">
                Feature 3:
            </p>
            <p>
                Users may sort the list of products by the categories offered on the left,
                and right components, by clothing type, brand, price, and arrival date.
            </p>
            <p>
                In case the user is on a different page, the user may use the hamburger
                on the top left, to instantly access the sort by category component.
            </p>
            <video controls className="project_video">
                <source src={sort} type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>
            <p className="space">
                Feature 4:
            </p>
            <p>
                Admins may create products by filling the required information on the
                modal, which automatically updates the list of products on the main page.
            </p>
            <p>
                Images are encoded and stored automatically in the database, removing the
                need to store the images locally.
            </p>
            <video controls className="project_video">
                <source src={create} type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>
            <p className="space">
                Feature 5:
            </p>
            <p>
                Admins may also edit, and delete products.
            </p>
            <p>
                Similar to products, admins may create/read/edit/delete users and user information.
                However, admins may not create another admin account through the interface,
                which was intentionally disabled due to potential security concerns. 
            </p>
            <p>
                No restarts or refreshes are needed to update rendering information.
                All changes to products and users are reflected instantaneously in display.
            </p>
            <video controls className="project_video">
                <source src={editDelete} type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>
            <h2 className="space">
                More info:
            </h2>
            <p id="end-of-scroll">
                Code and documentation:
            </p>
            <p>
                <a href="https://github.com/dnjsxo1860/KNN-Vehicle-Evaluation" target="_blank" rel="noopener noreferrer">In this Github link</a>
            </p>
            <p>
                Detailed explanations:<br/>
                KNN.py<br/> 
                (above each line of code)
            </p>
            <p>
                Table of Contents:<br/>
                README.md
            </p>
        </div>
    </div>
}

export default ECommerceWebsite;