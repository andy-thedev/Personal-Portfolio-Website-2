import React, {useState} from 'react';

import SectionBorder from '../components/SectionBorder';
import Project0 from '../components/content/Project0';
import Project1 from '../components/content/Project1';

import project0_bw from '../img/thumbnails/project-000.jpg'
import project1_bw from '../img/thumbnails/project-010.jpg'
import project2_bw from '../img/thumbnails/project-020.jpg'
import project3_bw from '../img/thumbnails/project-030.jpg'
import project4_bw from '../img/thumbnails/project-040.jpg'
import project5_bw from '../img/thumbnails/project-050.jpg'
import project6_bw from '../img/thumbnails/project-060.jpg'

import project0 from '../img/thumbnails/project-00.jpg'
import project1 from '../img/thumbnails/project-01.jpg'
import project2 from '../img/thumbnails/project-02.jpg'
import project3 from '../img/thumbnails/project-03.jpg'
import project4 from '../img/thumbnails/project-04.jpg'
import project5 from '../img/thumbnails/project-05.jpg'
import project6 from '../img/thumbnails/project-06.jpg'

function MyWorkScreen (props) {
    const [work, setWork] = useState(project1);

    return <section className="mywork">
        <SectionBorder></SectionBorder>
        <div class="split right">
            <div className="content-scroll project-list">
                <img src={(work === project0) ? project0 : project0_bw}
                    onClick={() => setWork(project0)} 
                    alt="E-Commerce Website" className="thumbnail_img"></img>
                <img src={(work === project1) ? project1 : project1_bw}
                    onClick={() => setWork(project1)}
                    alt="flappy bird AI" className="thumbnail_img"></img>
                <img src={(work === project2) ? project2 : project2_bw}
                    onClick={() => setWork(project2)}
                    alt="Pixel Clothing Classification" className="thumbnail_img"></img>
                <img src={(work === project3) ? project3 : project3_bw}
                    onClick={() => setWork(project3)}
                    alt="Vehicle Evaluator" className="thumbnail_img"></img>
                <img src={(work === project4) ? project4 : project4_bw} 
                    onClick={() => setWork(project4)}
                    alt="SVM Cancer Assessment" className="thumbnail_img"></img>
                <img src={(work === project5) ? project5 : project5_bw} 
                    onClick={() => setWork(project5)}
                    alt="Grade Predictor" className="thumbnail_img"></img>
                <img src={(work === project6) ? project6: project6_bw} 
                    onClick={() => setWork(project6)}
                    alt="Movie Review Classification" className="thumbnail_img"></img>
            </div>
        </div>
        <div className="split left">
            <div className="centered">
                {(work === project0) ? <Project0></Project0> : 
                (work === project1) ? <Project1></Project1>:
                <div>okok</div>}
            </div>
        </div>
    </section>
}

export default MyWorkScreen;