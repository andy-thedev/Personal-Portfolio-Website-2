import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

function Project5 (props) {
    return <div>
        <div className="content-scroll" style={{textAlign: "center", width:"80%"}}>
            <p>
                Program: Python
            </p>
            <p>
                Libraries: <br/>
                Pandas, Numpy, Scikit-learn, Matplotlib, Pickle
            </p>
            <p className="space">
                Utilizing linear regression, this model takes two grades, the study time, 
                number of failures, and absences of a high school student, and attempts to 
                predict his/her final grade.
            </p>
            <p>
                The training dataset of students' information was 
                collected from the UCI (University of California, Irvine) machine learning 
                repository, an archive containing 557 datasets.
            </p>
            <p className="space"> 
                Outcome: <br/>
                Accuracy: 92%
            </p>
            <p>
                Dataset: <br/>
                student-mat.csv, UCI <br/>
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
                <a href="https://github.com/dnjsxo1860/Linear-Regression-Grade-Predictor" target="_blank" rel="noopener noreferrer">In this Github link</a>
            </p>
            <p>
                Detailed explanations:<br/>
                Regression1.py<br/> 
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

export default Project5;