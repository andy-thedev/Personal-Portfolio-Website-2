import React from 'react';

import { BsChevronUp } from 'react-icons/bs';
import {BsChevronDown} from 'react-icons/bs';

import SectionBorder from '../components/SectionBorder';

import about_center_strip from '../img/background/about_center_strip.jpg';
import about_left_strip from '../img/background/about_left_strip.jpg';

function AboutScreen (props) {
    return <section className="about">
        <SectionBorder></SectionBorder>
        <img src={about_center_strip} alt="center strip" className="centered strip"></img>
        <img src={about_left_strip} alt="left strip" className="side strip"></img>
        <div class="split right">
                <div class="centered">
                    <a href="#start-of-scroll">
                        <div className="content-scroll-arrow" >
                            <BsChevronUp/>
                        </div>
                    </a>
                    <div className="content-scroll">
                        <p id="start-of-scroll"> 
                            Hi, I'm Andy Jung, <br/>
                            a software developer based in Toronto.
                        </p>
                        <p className="space">
                            I graduated from the University of Toronto in 2020 with a Bachelor of Science, 
                            specializing in statistical data mining and machine learning.
                        </p>
                        <p className="space">
                            After practising theoretical studies in university, I knew I had to gain practical, 
                            applicative abilities that could turn abstract ideas into working products.
                            This was not only the next natural step, but the very reason for the
                            beginning of my coding career.
                        </p>
                        <p className="space">
                            From the school representative for visual arts, to a software engineer by
                            the end of university, it was always in my personal interest to become a programmer that utilizes 
                            the tools available in the most appropriate, efficient, and "elegant" way.
                        </p>
                        <p className="space">
                            This did not only mean perfection in optimization through technical means. My obsession for
                            optimal design and aesthetics have always driven my intentions in the mind of the user, towards 
                            end products that always differ in identity and worth, regardless of functionality.
                        </p>
                        <p className="space">
                            Even if my immediate role or duty do not coincide with considerations regarding design, I believe
                            considering both sides of the underlying, and visual spectrum provides a better understanding of the overall project,
                            allowing myself to be a better working gear in any collaborative environment.
                        </p>
                        <p className="space" id="end-of-scroll">
                            It is obvious, and expected that functionalities work. However, the pivotal deciding factors of
                            an individual selecting one option over the other is often, in the detail. With both eyes constantly seeking
                            knowledge through an open mind, I believe one day, that I could become an irreplaceable programmer that considers perfection in
                            both front, and back ends of every final product.
                        </p>
                    </div>
                    <a href="#end-of-scroll">
                        <div className="content-scroll-arrow" style={{ marginTop: "0.5rem" }}>
                            <BsChevronDown/>
                        </div>
                    </a>
                </div>
            </div>
    </section>
}

export default AboutScreen;