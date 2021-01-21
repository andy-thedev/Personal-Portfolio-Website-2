import React, {useState} from 'react';

import { BsChevronUp } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';

import SectionBorder from '../components/SectionBorder';

import IndivisualWebsite from '../components/content/IndivisualWebsite';
import ECommerceWebsite from '../components/content/ECommerceWebsite';
import FlappyBird from '../components/content/FlappyBird';
import MovieTextModel from '../components/content/MovieTextModel';
import ClothingPixelModel from '../components/content/ClothingPixelModel';
import VehicleKnnModel from '../components/content/VehicleKnnModel';
import GradeRegressionModel from '../components/content/GradeRegressionModel';
import CancerSvmModel from '../components/content/CancerSvmModel';

import indivisualWebsite_c from '../img/thumbnails/indivisualWebsite_c.jpg';
import eCommerceWebsite_c from '../img/thumbnails/eCommerceWebsite.jpg';
import flappyBird_c from '../img/thumbnails/flappyBird.jpg';
import movieTextModel_c from '../img/thumbnails/movieTextModel.jpg';
import clothingPixelModel_c from '../img/thumbnails/clothingPixelModel.jpg';
import vehicleKnnModel_c from '../img/thumbnails/vehicleKnnModel.jpg';
import gradeRegressionModel_c from '../img/thumbnails/gradeRegressionModel.jpg';
import cancerSvmModel_c from '../img/thumbnails/cancerSvmModel.jpg';

import indivisualWebsite_bw from '../img/thumbnails/indivisualWebsite_bw.jpg';
import eCommerceWebsite_bw from '../img/thumbnails/eCommerceWebsite_bw.jpg';
import flappyBird_bw from '../img/thumbnails/flappyBird_bw.jpg';
import movieTextModel_bw from '../img/thumbnails/movieTextModel_bw.jpg';
import clothingPixelModel_bw from '../img/thumbnails/clothingPixelModel_bw.jpg';
import vehicleKnnModel_bw from '../img/thumbnails/vehicleKnnModel_bw.jpg';
import gradeRegressionModel_bw from '../img/thumbnails/gradeRegressionModel_bw.jpg';
import cancerSvmModel_bw from '../img/thumbnails/cancerSvmModel_bw.jpg';

function MyWorkScreen (props) {
    const [work, setWork] = useState(indivisualWebsite_c);

    return <section className="mywork">
        <SectionBorder></SectionBorder>
        <div class="split right">
            <div className="content-scroll project-list">
                <img src={(work === eCommerceWebsite_c) ? eCommerceWebsite_c : eCommerceWebsite_bw}
                    onClick={() => setWork(eCommerceWebsite_c)} 
                    alt="E-Commerce Website" className="thumbnail_img"></img>
                <img src={(work === indivisualWebsite_c) ? indivisualWebsite_c : indivisualWebsite_bw}
                    onClick={() => setWork(indivisualWebsite_c)} 
                    alt="E-Commerce Website" className="thumbnail_img"></img>
                <img src={(work === flappyBird_c) ? flappyBird_c : flappyBird_bw}
                    onClick={() => setWork(flappyBird_c)}
                    alt="flappy bird AI" className="thumbnail_img"></img>
                <img src={(work === movieTextModel_c) ? movieTextModel_c : movieTextModel_bw}
                    onClick={() => setWork(movieTextModel_c)}
                    alt="Pixel Clothing Classification" className="thumbnail_img"></img>
                <img src={(work === clothingPixelModel_c) ? clothingPixelModel_c : clothingPixelModel_bw}
                    onClick={() => setWork(clothingPixelModel_c)}
                    alt="Vehicle Evaluator" className="thumbnail_img"></img>
                <img src={(work === vehicleKnnModel_c) ? vehicleKnnModel_c : vehicleKnnModel_bw} 
                    onClick={() => setWork(vehicleKnnModel_c)}
                    alt="SVM Cancer Assessment" className="thumbnail_img"></img>
                <img src={(work === gradeRegressionModel_c) ? gradeRegressionModel_c : gradeRegressionModel_bw} 
                    onClick={() => setWork(gradeRegressionModel_c)}
                    alt="Grade Predictor" className="thumbnail_img"></img>
                <img src={(work === cancerSvmModel_c) ? cancerSvmModel_c: cancerSvmModel_bw} 
                    onClick={() => setWork(cancerSvmModel_c)}
                    alt="Movie Review Classification" className="thumbnail_img"></img>
            </div>
        </div>
        <div className="split left">
            <div className="centered">
                <a href="#start-of-scroll">
                    <div className="content-scroll-arrow" style={{marginRight:"3rem", marginBottom: "1rem"}}>
                        <BsChevronUp/>
                    </div>
                </a>
                {
                    (work === eCommerceWebsite_c) ? <ECommerceWebsite></ECommerceWebsite> : 
                    (work === flappyBird_c) ? <FlappyBird></FlappyBird>:
                    (work === movieTextModel_c) ? <MovieTextModel></MovieTextModel>:
                    (work === clothingPixelModel_c) ? <ClothingPixelModel></ClothingPixelModel>:
                    (work === vehicleKnnModel_c) ? <VehicleKnnModel></VehicleKnnModel>:
                    (work === gradeRegressionModel_c) ? <GradeRegressionModel></GradeRegressionModel>:
                    (work === cancerSvmModel_c) ? <CancerSvmModel></CancerSvmModel>:
                    (work === indivisualWebsite_c) ? <IndivisualWebsite></IndivisualWebsite>:
                    <div>okok</div>
                }
                <a href="#end-of-scroll">
                    <div className="content-scroll-arrow" style={{marginRight:"3rem", marginTop: "1.5rem"}}>
                        <BsChevronDown/>
                    </div>
                </a>
            </div>
        </div>
    </section>
}

export default MyWorkScreen;