import React from 'react';

import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

import SectionBorder from '../components/SectionBorder';

import skills_center_strip from '../img/background/skills_center_strip.jpg';
import skills_right_strip from '../img/background/skills_right_strip.jpg';

function SkillsScreen (props) {
    return <section className="skills">
        <SectionBorder></SectionBorder>
        <img src={skills_center_strip} alt="center strip" className="centered strip"></img>
        <img src={skills_right_strip} alt="right strip" className="strip"></img>
        <div class="split left">
            <div class="centered">
                <a href="#start-of-scroll">
                    <div className="content-scroll-arrow" >
                        <BsChevronUp/>
                    </div>
                </a>
                <div className="content-scroll" style={{textAlign: "right"}}>
                    <div className="skill-list">
                        <div>
                            <p>
                                Language:<br/>
                                Python, Java, R
                            </p>
                            <p className="space">
                                Front End:<br/>
                                HTML, CSS,<br/>
                                BootStrap,<br/>
                                JavaScript, JQuery,<br/>
                                ReactJS, Redux
                            </p>
                            <p className="space">
                                Back End:<br/>
                                NodeJS, ExpressJS,
                                Socket.IO<br/>
                            </p>
                            <p className="space">
                                Database:<br/>
                                MongoDB, MySQL
                            </p>
                            <p className="space">
                                Version Control:<br/>
                                Git Bash
                            </p>
                            <p className="space">
                                Machine Learning:<br/>
                                TensorFlow, Keras,<br/>
                                Sklearn, Pandas,<br/>
                                Numpy,<br/>
                                Jupyter Notebook
                            </p>
                            <p className="space">
                                Design (Adobe):<br/>
                                Photoshop/Illustrator
                            </p>
                        </div>
                        <div style={{marginLeft:"2rem"}}>
                            <p>
                                Language:<br/>
                                English/Korean
                            </p>
                            <p className="space">
                                Website:<br/>
                                Design<br/>
                                Build<br/>
                                Optimization<br/>
                                Google SEO <br/>
                            </p>
                            <p className="space">
                                Data Science:<br/>
                                Preprocessing<br/>
                                Cleaning<br/>
                            </p>
                            <p className="space">
                                Testing<br/>
                                Visualization<br/>
                            </p>
                            <p className="space">
                                <nobr>Neural Network</nobr><br/>
                                NEAT<br/>
                            </p>
                            <p className="space">
                                Linear Reg.<br/>
                                Logistic Reg.<br/>
                                kNN<br/>
                                k-Means<br/>
                                SVM<br/>
                            </p>
                            <p className="space">
                                <nobr>Decision Tree</nobr><br/>
                                <nobr>Random Forest</nobr><br/>
                            </p>
                        </div>
                    </div>
                </div>
                <a href="#end-of-scroll">
                    <div className="content-scroll-arrow">
                        <BsChevronDown/>
                    </div>
                </a>
            </div>
        </div>
    </section>
}

export default SkillsScreen;