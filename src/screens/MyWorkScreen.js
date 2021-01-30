import React, {useState} from 'react';

import { useSwipeable } from 'react-swipeable';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { VscEyeClosed } from 'react-icons/vsc';

import mywork_center_strip from '../img/background/mywork_center_strip.jpg';

import SectionBorder from '../components/SectionBorder';

import IndivisualWebsite from '../components/content/IndivisualWebsite';
import ECommerceWebsite from '../components/content/ECommerceWebsite';
import RestaurantWebsite from '../components/content/RestaurantWebsite';
import FlappyBird from '../components/content/FlappyBird';
import MovieTextModel from '../components/content/MovieTextModel';
import ClothingPixelModel from '../components/content/ClothingPixelModel';
import VehicleKnnModel from '../components/content/VehicleKnnModel';
import GradeRegressionModel from '../components/content/GradeRegressionModel';
import CancerSvmModel from '../components/content/CancerSvmModel';
import OldPersonalPortfolio from '../components/content/OldPersonalPortfolio';

import indivisualWebsite_c from '../img/thumbnails/indivisualWebsite_c.jpg';
import eCommerceWebsite_c from '../img/thumbnails/eCommerceWebsite_c.jpg';
import restaurantWebsite_c from '../img/thumbnails/restaurantWebsite_c.jpg';
import flappyBird_c from '../img/thumbnails/flappyBird_c.jpg';
import movieTextModel_c from '../img/thumbnails/movieTextModel_c.jpg';
import clothingPixelModel_c from '../img/thumbnails/clothingPixelModel_c.jpg';
import vehicleKnnModel_c from '../img/thumbnails/vehicleKnnModel_c.jpg';
import gradeRegressionModel_c from '../img/thumbnails/gradeRegressionModel_c.jpg';
import cancerSvmModel_c from '../img/thumbnails/cancerSvmModel_c.jpg';
import oldPersonalPortfolio_c from '../img/thumbnails/oldPersonalPortfolio_c.jpg';

import indivisualWebsite_bw from '../img/thumbnails/indivisualWebsite_bw.jpg';
import eCommerceWebsite_bw from '../img/thumbnails/eCommerceWebsite_bw.jpg';
import restaurantWebsite_bw from '../img/thumbnails/restaurantWebsite_bw.jpg';
import flappyBird_bw from '../img/thumbnails/flappyBird_bw.jpg';
import movieTextModel_bw from '../img/thumbnails/movieTextModel_bw.jpg';
import clothingPixelModel_bw from '../img/thumbnails/clothingPixelModel_bw.jpg';
import vehicleKnnModel_bw from '../img/thumbnails/vehicleKnnModel_bw.jpg';
import gradeRegressionModel_bw from '../img/thumbnails/gradeRegressionModel_bw.jpg';
import cancerSvmModel_bw from '../img/thumbnails/cancerSvmModel_bw.jpg';
import oldPersonalPortfolio_bw from '../img/thumbnails/oldPersonalPortfolio_bw.jpg';

function MyWorkScreen (props) {

    const [work, setWork] = useState(indivisualWebsite_c);

    const [image, setImage] = useState('');

    const [modalVisible, setModalVisible] = useState(false);
    const [mobileModalVisible, setMobileModalVisible] = useState(false);
    const [mobileModalWorkVisible, setMobileModalWorkVisible] = useState(false);

    const swipeHandler = useSwipeable({
        onSwipedDown: () => props.history.push("/skills"),
        onSwipedUp: () => props.history.push("/contact")
    })

    const openMobileModalWork = (work) => {
        setMobileModalWorkVisible(true);
        setWork(work);
    }

    const closeMobileModalWork = () => {
        setMobileModalWorkVisible(false);
    }

    const openModal = (img) => {
        setImage(img);
        setModalVisible(true);
    }

    const closeModal = () => {
        setImage('');
        setModalVisible(false);
    }

    const dummyHandler = () => {
        return null;
    }

    return <section className="mywork animated">
        <SectionBorder/>
        <img {...swipeHandler} src={mywork_center_strip} alt="center strip" className="centered strip"
            onClick={() => setMobileModalVisible(true)}/>
        <div className="split right">
            <div className="content-scroll project-list animated">
                <img src={(work === eCommerceWebsite_c) ? eCommerceWebsite_c : eCommerceWebsite_bw}
                    onClick={() => setWork(eCommerceWebsite_c)} 
                    alt="E-Commerce Website" className="thumbnail_img"/>
                <img src={(work === indivisualWebsite_c) ? indivisualWebsite_c : indivisualWebsite_bw}
                    onClick={() => setWork(indivisualWebsite_c)} 
                    alt="Indivisual Website" className="thumbnail_img"/>
                <img src={(work === restaurantWebsite_c) ? restaurantWebsite_c : restaurantWebsite_bw}
                    onClick={() => setWork(restaurantWebsite_c)} 
                    alt="Restaurant Website" className="thumbnail_img"/>
                <img src={(work === oldPersonalPortfolio_c) ? oldPersonalPortfolio_c: oldPersonalPortfolio_bw} 
                    onClick={() => setWork(oldPersonalPortfolio_c)}
                    alt="Old Personal Portfolio" className="thumbnail_img"/>
                <img src={(work === flappyBird_c) ? flappyBird_c : flappyBird_bw}
                    onClick={() => setWork(flappyBird_c)}
                    alt="flappy bird AI" className="thumbnail_img"/>
                <img src={(work === movieTextModel_c) ? movieTextModel_c : movieTextModel_bw}
                    onClick={() => setWork(movieTextModel_c)}
                    alt="Pixel Clothing Classification" className="thumbnail_img"/>
                <img src={(work === clothingPixelModel_c) ? clothingPixelModel_c : clothingPixelModel_bw}
                    onClick={() => setWork(clothingPixelModel_c)}
                    alt="Vehicle Evaluator" className="thumbnail_img"/>
                <img src={(work === vehicleKnnModel_c) ? vehicleKnnModel_c : vehicleKnnModel_bw} 
                    onClick={() => setWork(vehicleKnnModel_c)}
                    alt="SVM Cancer Assessment" className="thumbnail_img"/>
                <img src={(work === gradeRegressionModel_c) ? gradeRegressionModel_c : gradeRegressionModel_bw} 
                    onClick={() => setWork(gradeRegressionModel_c)}
                    alt="Grade Predictor" className="thumbnail_img"/>
                <img src={(work === cancerSvmModel_c) ? cancerSvmModel_c: cancerSvmModel_bw} 
                    onClick={() => setWork(cancerSvmModel_c)}
                    alt="Movie Review Classification" className="thumbnail_img"/>
            </div>
        </div>
        <div className="split" style={{left:"-1%"}}>
            <div className="centered style">
                <a href="#start-of-scroll">
                    <div className="content-scroll-arrow" style={{marginRight:"1.5rem", marginBottom: "1rem"}}>
                        <BsChevronUp/>
                    </div>
                </a>
                <div className="content-scroll animated" style={{textAlign: "center"}}>
                    {
                        (work === eCommerceWebsite_c) ? <ECommerceWebsite openModal={openModal.bind(this)}/> : 
                        (work === flappyBird_c) ? <FlappyBird openModal={openModal.bind(this)}/>:
                        (work === movieTextModel_c) ? <MovieTextModel/>:
                        (work === clothingPixelModel_c) ? <ClothingPixelModel/>:
                        (work === vehicleKnnModel_c) ? <VehicleKnnModel/>:
                        (work === gradeRegressionModel_c) ? <GradeRegressionModel/>:
                        (work === cancerSvmModel_c) ? <CancerSvmModel/>:
                        (work === indivisualWebsite_c) ? <IndivisualWebsite openModal={openModal.bind(this)}/>:
                        (work === restaurantWebsite_c) ? <RestaurantWebsite openModal={openModal.bind(this)}/>:
                        (work === oldPersonalPortfolio_c) ? <OldPersonalPortfolio openModal={openModal.bind(this)}/>:''
                    }
                </div>
                <a href="#end-of-scroll">
                    <div className="content-scroll-arrow" style={{marginRight:"1.5rem", marginTop: "1.5rem"}}>
                        <BsChevronDown/>
                    </div>
                </a>
            </div>
        </div>
        {modalVisible && <div onClick={() => closeModal()} className="modal-background animated">
            <div className="modal">
                <div className="modal-content">
                    <img src={image} alt="sample code of the project" className="modal_img"/>
                </div>
            </div>
        </div>}
        {mobileModalVisible && 
            <>
                {
                    mobileModalWorkVisible ? <button onClick={() => closeMobileModalWork()} className="close-modal-button" style={{color:"#ff0000"}}><VscEyeClosed/></button>:
                    <button onClick={() => setMobileModalVisible(false)} className="close-modal-button"><VscEyeClosed/></button>
                }
                {
                    mobileModalWorkVisible ? 
                        <div className="modal-background animated">
                            <div className="modal mobile">
                                <div className="modal-content mobile">
                                    {
                                        (work === eCommerceWebsite_c) ? <ECommerceWebsite openModal={dummyHandler.bind(this)}/> : 
                                        (work === flappyBird_c) ? <FlappyBird openModal={dummyHandler.bind(this)}/>:
                                        (work === movieTextModel_c) ? <MovieTextModel/>:
                                        (work === clothingPixelModel_c) ? <ClothingPixelModel/>:
                                        (work === vehicleKnnModel_c) ? <VehicleKnnModel/>:
                                        (work === gradeRegressionModel_c) ? <GradeRegressionModel/>:
                                        (work === cancerSvmModel_c) ? <CancerSvmModel/>:
                                        (work === indivisualWebsite_c) ? <IndivisualWebsite openModal={dummyHandler.bind(this)}/>:
                                        (work === restaurantWebsite_c) ? <RestaurantWebsite openModal={dummyHandler.bind(this)}/>:
                                        (work === oldPersonalPortfolio_c) ? <OldPersonalPortfolio openModal={dummyHandler.bind(this)}/>:''
                                    }
                                </div>
                            </div>
                        </div> :
                            <div className="modal-background animated">
                                <div className="modal mobile">
                                    <div className="modal-content mobile">
                                        <img src={eCommerceWebsite_c}
                                            onClick={() => openMobileModalWork(eCommerceWebsite_c)}
                                            alt="E-Commerce Website" className="thumbnail_img mobile"/>
                                        <img src={indivisualWebsite_c}
                                            onClick={() => openMobileModalWork(indivisualWebsite_c)} 
                                            alt="Indivisual Website" className="thumbnail_img mobile"/>
                                        <img src={restaurantWebsite_c}
                                            onClick={() => openMobileModalWork(restaurantWebsite_c)} 
                                            alt="Restaurant Website" className="thumbnail_img mobile"/>
                                        <img src={oldPersonalPortfolio_c} 
                                            onClick={() => openMobileModalWork(oldPersonalPortfolio_c)}
                                            alt="Old Personal Portfolio" className="thumbnail_img mobile"/>
                                        <img src={flappyBird_c}
                                            onClick={() => openMobileModalWork(flappyBird_c)}
                                            alt="flappy bird AI" className="thumbnail_img mobile"/>
                                        <img src={movieTextModel_c}
                                            onClick={() => openMobileModalWork(movieTextModel_c)}
                                            alt="Pixel Clothing Classification" className="thumbnail_img mobile"/>
                                        <img src={clothingPixelModel_c}
                                            onClick={() => openMobileModalWork(clothingPixelModel_c)}
                                            alt="Vehicle Evaluator" className="thumbnail_img mobile"/>
                                        <img src={vehicleKnnModel_c} 
                                            onClick={() => openMobileModalWork(vehicleKnnModel_c)}
                                            alt="SVM Cancer Assessment" className="thumbnail_img mobile"/>
                                        <img src={gradeRegressionModel_c} 
                                            onClick={() => openMobileModalWork(gradeRegressionModel_c)}
                                            alt="Grade Predictor" className="thumbnail_img mobile"/>
                                        <img src={cancerSvmModel_c}
                                            onClick={() => openMobileModalWork(cancerSvmModel_c)}
                                            alt="Movie Review Classification" className="thumbnail_img mobile"/>
                                    </div>
                                </div>
                            </div>  
                }
            </>

        }
        {/* {mobileModalVisible &&
            <div className="modal-background animated">
                {
                    mobileModalWorkVisible ? <button onClick={() => closeMobileModalWork()} className="close-modal-button" style={{color:"#ff0000"}}><VscEyeClosed/></button>:
                    <button onClick={() => setMobileModalVisible(false)} className="close-modal-button"><VscEyeClosed/></button>
                }
                <div className="modal mobile">
                    <div className="modal-content mobile">{
                        mobileModalWorkVisible ? 
                            <>
                                {
                                    (work === eCommerceWebsite_c) ? <ECommerceWebsite openModal={dummyHandler.bind(this)}/> : 
                                    (work === flappyBird_c) ? <FlappyBird openModal={dummyHandler.bind(this)}/>:
                                    (work === movieTextModel_c) ? <MovieTextModel/>:
                                    (work === clothingPixelModel_c) ? <ClothingPixelModel/>:
                                    (work === vehicleKnnModel_c) ? <VehicleKnnModel/>:
                                    (work === gradeRegressionModel_c) ? <GradeRegressionModel/>:
                                    (work === cancerSvmModel_c) ? <CancerSvmModel/>:
                                    (work === indivisualWebsite_c) ? <IndivisualWebsite openModal={dummyHandler.bind(this)}/>:
                                    (work === restaurantWebsite_c) ? <RestaurantWebsite openModal={dummyHandler.bind(this)}/>:
                                    (work === oldPersonalPortfolio_c) ? <OldPersonalPortfolio openModal={dummyHandler.bind(this)}/>:''
                                }
                            </>
                        : <>
                            <img src={eCommerceWebsite_c}
                                onClick={() => openMobileModalWork(eCommerceWebsite_c)}
                                alt="E-Commerce Website" className="thumbnail_img mobile"/>
                            <img src={indivisualWebsite_c}
                                onClick={() => openMobileModalWork(indivisualWebsite_c)} 
                                alt="Indivisual Website" className="thumbnail_img mobile"/>
                            <img src={restaurantWebsite_c}
                                onClick={() => openMobileModalWork(restaurantWebsite_c)} 
                                alt="Restaurant Website" className="thumbnail_img mobile"/>
                            <img src={oldPersonalPortfolio_c} 
                                onClick={() => openMobileModalWork(oldPersonalPortfolio_c)}
                                alt="Old Personal Portfolio" className="thumbnail_img mobile"/>
                            <img src={flappyBird_c}
                                onClick={() => openMobileModalWork(flappyBird_c)}
                                alt="flappy bird AI" className="thumbnail_img mobile"/>
                            <img src={movieTextModel_c}
                                onClick={() => openMobileModalWork(movieTextModel_c)}
                                alt="Pixel Clothing Classification" className="thumbnail_img mobile"/>
                            <img src={clothingPixelModel_c}
                                onClick={() => openMobileModalWork(clothingPixelModel_c)}
                                alt="Vehicle Evaluator" className="thumbnail_img mobile"/>
                            <img src={vehicleKnnModel_c} 
                                onClick={() => openMobileModalWork(vehicleKnnModel_c)}
                                alt="SVM Cancer Assessment" className="thumbnail_img mobile"/>
                            <img src={gradeRegressionModel_c} 
                                onClick={() => openMobileModalWork(gradeRegressionModel_c)}
                                alt="Grade Predictor" className="thumbnail_img mobile"/>
                            <img src={cancerSvmModel_c}
                                onClick={() => openMobileModalWork(cancerSvmModel_c)}
                                alt="Movie Review Classification" className="thumbnail_img mobile"/>
                        </>  
                    }</div>
                </div>
            </div>
        } */}
    </section>
}

export default MyWorkScreen;