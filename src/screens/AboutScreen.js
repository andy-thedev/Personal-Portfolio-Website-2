import React, { useState } from 'react';

import { useSwipeable } from 'react-swipeable';

import { BsChevronUp } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';
import { VscEyeClosed } from 'react-icons/vsc';

import SectionBorder from '../components/SectionBorder';

import about_center_strip from '../img/background/about_center_strip.jpg';
import about_left_strip from '../img/background/about_left_strip.jpg';

import signature from '../img/signature.png';
import signature_black from '../img/signature_black.png';

function AboutScreen (props) {
    const [mobileModalVisible, setMobileModalVisible] = useState(false);

    const swipeHandler = useSwipeable({
        onSwipedDown: () => props.history.push("/"),
        onSwipedUp: () => props.history.push("/skills"),
        onTap: () => setMobileModalVisible(true),
    })

    return <section className="about animated">
        <SectionBorder/>
        <img {...swipeHandler} src={about_center_strip} alt="center strip" className="centered strip"/>
        <img src={about_left_strip} alt="left strip" className="side strip"/>
        <div className="split right">
            <div className="centered">
                <a href="#start-of-scroll">
                    <div className="content-scroll-arrow" >
                        <BsChevronUp/>
                    </div>
                </a>
                <div className="content-scroll animated">
                    <p id="start-of-scroll"> 
                        Hi, I'm Andy Jung, <br/>
                        a software developer based in Toronto.
                    </p>
                    <p className="space">
                        I graduated from the University of Toronto in 2020 with a Bachelor of Science, 
                        specializing in statistical data mining and machine learning.
                    </p>
                    <p className="space">
                        After practising theoretical studies in university, it was in my best interest to
                        gain practical, applicative abilities that could turn my abstract ideas into working products.
                        So naturally, I began practising web development.
                    </p>
                    <p className="space">
                        In any project, my first priority is to program in efficient, well-structured, working means. However, I believe
                        considering both sides of the underlying, and visual spectrums provide a better understanding of the overall project,
                        allowing myself to be a better working gear in any collaborative environment.
                    </p>
                    <p className="space" id="end-of-scroll">
                        It is expected that functionalities work. However, the pivotal deciding factors of
                        an individual selecting one option over the other is often, in the detail. With this in mind,
                        I seek to become an irreplaceable programmer that considers perfection in
                        both front, and back ends of every final product.
                    </p>
                    <img src={signature} alt="andy jung's signature" style={{ width: "100%" }}/>
                </div>
                <a href="#end-of-scroll">
                    <div className="content-scroll-arrow" style={{ marginTop: "0.5rem" }}>
                        <BsChevronDown/>
                    </div>
                </a>
            </div>
        </div>
        {mobileModalVisible && <div className="modal-background animated">
            <button onClick={() => setMobileModalVisible(false)} className="close-modal-button"><VscEyeClosed/></button>
            <div className="modal mobile">
                <div className="modal-content mobile">
                    <p id="start-of-scroll"> 
                        Hi, I'm Andy Jung, <br/>
                        a software developer based in Toronto.
                    </p>
                    <p className="space">
                        I graduated from the University of Toronto in 2020 with a Bachelor of Science, 
                        specializing in statistical data mining and machine learning.
                    </p>
                    <p className="space">
                        After practising theoretical studies in university, it was in my best interest to
                        gain practical, applicative abilities that could turn my abstract ideas into working products.
                        So naturally, I began practising web development.
                    </p>
                    <p className="space">
                        In any project, my first priority is to program in efficient, well-structured, working means. However, I believe
                        considering both sides of the underlying, and visual spectrums provide a better understanding of the overall project,
                        allowing myself to be a better working gear in any collaborative environment.
                    </p>
                    <p className="space" id="end-of-scroll">
                        It is expected that functionalities work. However, the pivotal deciding factors of
                        an individual selecting one option over the other is often, in the detail. With this in mind,
                        I seek to become an irreplaceable programmer that considers perfection in
                        both front, and back ends of every final product.
                    </p>
                    <img src={signature_black} alt="andy jung's signature" style={{ width: "100%", marginTop: "2rem" }}/>
                </div>
            </div>
        </div>}
    </section>
}

export default AboutScreen;