import React, { useState } from 'react';

import { useSwipeable } from 'react-swipeable';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { VscEyeClosed } from 'react-icons/vsc';

import SectionBorder from '../components/SectionBorder';

import skills_center_strip from '../img/background/skills_center_strip.jpg';
import skills_right_strip from '../img/background/skills_right_strip.jpg';

function SkillsScreen (props) {
    const [mobileModalVisible, setMobileModalVisible] = useState(false);

    const swipeHandler = useSwipeable({
        onSwipedDown: () => props.history.push("/about"),
        onSwipedUp: () => props.history.push("/mywork"),
        onTap: () => setMobileModalVisible(true)
    })

    return <section className="skills animated">
        <SectionBorder/>
        <img {...swipeHandler} src={skills_center_strip} alt="center strip" className="centered strip"/>
        <img src={skills_right_strip} alt="right strip" className="side strip"/>
        <div className="split" style={{left: "-1%"}}>
            <div className="centered">
                <a href="#start-of-scroll">
                    <div className="content-scroll-arrow">
                        <BsChevronUp/>
                    </div>
                </a>
                <div className="content-scroll animated">
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
                                JavaScript, <br/>
                                JQuery,<br/>
                                ReactJS, Redux
                            </p>
                            <p className="space">
                                Back End:<br/>
                                NodeJS, <br/>
                                ExpressJS,<br/>
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
                        <div style={{marginLeft:"2rem", marginRight: "2rem"}}>
                            <p>
                                <small className="korean">
                                    언어:<br/>
                                    파이쏜, 자바, R
                                </small>
                            </p>
                            <p className="space">
                                <small className="korean">
                                    프론트엔드:<br/>
                                    HTML, CSS, <br/>
                                    부트스트랩 <br/>
                                    자바스크립트,<br/> 
                                    제이쿼리 <br/>
                                    리액트JS, 리덕스
                                </small>
                            </p>
                            <p className="space">
                                <small className="korean">
                                    백엔드:<br/>
                                    노드JS <br/>
                                    익스프레스JS<br/>
                                    소켓.IO
                                </small>
                            </p>
                            <p className="space">
                                <small className="korean">
                                    데이터베이스:<br/>
                                    몽고DB, 마이SQL
                                </small>
                            </p>
                            <p className="space">
                                <small className="korean">
                                    버전 관리 시스템:<br/>
                                    Git Bash
                                </small>
                            </p>
                            <p className="space">
                                <small className="korean">
                                    머신러닝:<br/>
                                    텐서플로우, 케라스,<br/>
                                    Sklearn, 판다스,<br/>
                                    넘파이,<br/>
                                    주피터 노트북
                                </small>
                            </p>
                            <p className="space">
                                <small className="korean">
                                    디자인 (아도비):<br/>
                                    포토샵/일러스트레이터
                                </small>
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
        {mobileModalVisible && <div className="modal-background animated">
            <button onClick={() => setMobileModalVisible(false)} className="close-modal-button"><VscEyeClosed/></button>
            <div className="modal mobile">
                <div className="modal-content mobile">
                    <p>
                        Language:<br/>
                        Python, Java, R
                    </p>
                    <p className="space">
                        Front End:<br/>
                        HTML, CSS,<br/>
                        BootStrap,<br/>
                        JavaScript, <br/>
                        JQuery,<br/>
                        ReactJS, Redux
                    </p>
                    <p className="space">
                        Back End:<br/>
                        NodeJS, <br/>
                        ExpressJS,<br/>
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
                    <p className="space">
                        <small className="korean">
                            언어:<br/>
                            파이쏜, 자바, R
                        </small>
                    </p>
                    <p className="space">
                        <small className="korean">
                            프론트엔드:<br/>
                            HTML, CSS, <br/>
                            부트스트랩 <br/>
                            자바스크립트,<br/> 
                            제이쿼리 <br/>
                            리액트JS, 리덕스
                        </small>
                    </p>
                    <p className="space">
                        <small className="korean">
                            백엔드:<br/>
                            노드JS <br/>
                            익스프레스JS<br/>
                            소켓.IO
                        </small>
                    </p>
                    <p className="space">
                        <small className="korean">
                            데이터베이스:<br/>
                            몽고DB, 마이SQL
                        </small>
                    </p>
                    <p className="space">
                        <small className="korean">
                            버전 관리 시스템:<br/>
                            Git Bash
                        </small>
                    </p>
                    <p className="space">
                        <small className="korean">
                            머신러닝:<br/>
                            텐서플로우, 케라스,<br/>
                            Sklearn, 판다스,<br/>
                            넘파이,<br/>
                            주피터 노트북
                        </small>
                    </p>
                    <p className="space">
                        <small className="korean">
                            디자인 (아도비):<br/>
                            포토샵/일러스트레이터
                        </small>
                    </p>
                </div>
            </div>
        </div>}
    </section>
}

export default SkillsScreen;