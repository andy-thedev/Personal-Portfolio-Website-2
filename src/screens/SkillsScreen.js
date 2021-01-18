import React from 'react';
import {BsChevronDown} from 'react-icons/bs';

import SectionBorder from '../components/SectionBorder';

function SkillsScreen (props) {
    return <section className="skills">
        <SectionBorder></SectionBorder>
        <div class="split left">
                <div class="centered">
                    <div className="content-scroll" style={{textAlign: "right", marginLeft: "-1rem"}}>
                        <table>
                            <tr>
                                <td>
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
                                    <p className="space" id="end-of-scroll">
                                        Design (Adobe):<br/>
                                        Photoshop/Illustrator
                                    </p>
                                </td>
                                <td>
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
                                    {/* <p>
                                        Design (Adobe):<br/>
                                        Photoshop/Illustrator
                                    </p>
                                    <p className="space">
                                        Machine Learning:<br/>
                                        TensorFlow, Keras,<br/>
                                        Sklearn, Pandas,<br/>
                                        Numpy,<br/> 
                                        Jupyter Notebook
                                    </p>
                                    <p className="space">
                                        Version Control:<br/>
                                        Git Bash
                                    </p>
                                    <p className="space">
                                        Database:<br/>
                                        MongoDB, MySQL
                                    </p>
                                    <p className="space">
                                        Back End:<br/>
                                        NodeJS, ExpressJS,
                                        Socket.IO<br/>
                                    </p>
                                    <p className="space">
                                        Front End:<br/>
                                        HTML, CSS,<br/>
                                        BootStrap, JavaScript,<br/>
                                        JQuery, ReactJS,<br/>
                                        Redux, RESTful API
                                    </p>
                                    <p className="space" id="end-of-scroll">
                                        Language:<br/>
                                        Python, Java, R
                                    </p> */}
                                </td>
                            </tr>
                        </table>
                    </div>
                    <a href="#end-of-scroll">
                        <div className="content-scroll-arrow" style={{textAlign: "right", marginRight:"3.7rem"}}>
                            <BsChevronDown/>
                        </div>
                    </a>
                </div>
            </div>
    </section>
}

export default SkillsScreen;