import React from 'react';
import {BsChevronDown} from 'react-icons/bs';

function ScrollContent (props) {
    return <div>
        <div className="content-scroll">
            <p> 
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
            <div className="content-scroll-arrow">
                <BsChevronDown/>
            </div>
        </a>
    </div>
}

export default ScrollContent;