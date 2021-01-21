import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

function Project4 (props) {
    return <div>
        <div className="content-scroll" style={{textAlign: "center", width:"80%"}}>
            <p>
                Program: Python
            </p>
            <p>
                Libraries: <br/>
                Scikit-learn
            </p>
            <p className="space">
                Utilizing the algorithm, Support Vector Machine, This model takes patients' 
                breast cancer characteristics, such as mean radius, mean texture, mean 
                perimeter, mean area, etc. to determine if the cancer is malignant or 
                benign.
            </p>
            <p className="space"> 
                Outcome: <br/>
                Accuracy: 93.86%
            </p>
            <p>
                Dataset: innate sklearn dataset
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
                <a href="https://github.com/dnjsxo1860/SVM-Cancer-Assessment-Algorithm" target="_blank" rel="noopener noreferrer">In this Github link</a>
            </p>
            <p>
                Detailed explanations:<br/>
                svm.py<br/> 
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

export default Project4;