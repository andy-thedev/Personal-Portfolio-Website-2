import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

function Project6 (props) {
    return <div>
        <div className="content-scroll" style={{textAlign: "center", width:"80%"}}>
            <p>
                Program: Python
            </p>
            <p>
                Libraries: <br/>
                Tensorflow, Keras, Numpy
            </p>

            <p className="space">
                Since about 2010, neural networks have been extremely successful in the 
                domain of Natural Language Processing (NLP). A neural network's 
                capabilities of interpreting extremely complex patterns has allowed for 
                the rapid development in neural network implementations for the tasks 
                related to NLP, which quickly melted into our daily lives. Some renown 
                examples are: Apple's SIRI, and automated video captions.
            </p>
            <p>
                In this project, the model takes a movie review (ie: .txt file), and 
                determines if the movie review is likely to be positive or negative 
                (a good movie experience/bad movie experience), determined by an embedding 
                layer of word vectors, and their respective angles.
            </p>

            <p className="space"> 
                Outcome: <br/>
                Accuracy: 88.72%
            </p>
            <p>
                Dataset: <br/>
                car.data, UCI <br/>
                (University of California, Irvine) <br/>
                machine learning repository
            </p>
            <p>
                Reference: techwithtim
            </p>

            <h2 className="space">
                More info:
            </h2>
            <p id="end-of-scroll">
                Code and documentation:
            </p>
            <p>
                <a href="https://github.com/dnjsxo1860/Movie-Review-Text-Classification" target="_blank" rel="noopener noreferrer">In this Github link</a>
            </p>
            <p>
                Detailed explanations:<br/>
                Text_Classification.py<br/> 
                (above each line of code)
            </p>
            <p>
                Table of Contents:<br/>
                README.md
            </p>
        </div>
        <a href="#end-of-scroll">
            <div className="content-scroll-arrow" style={{marginRight:"3rem"}}>
                <BsChevronDown/>
            </div>
        </a>
    </div>
}

export default Project6;