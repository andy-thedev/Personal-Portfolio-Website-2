import React, { useEffect, useRef } from 'react';

function GradeRegressionModel (props) {
    const top = useRef(null);

    useEffect(() => {
        top.current.scrollIntoView();
    })

    return <div className="animated" ref={top}>
        <p id="start-of-scroll">
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
    </div>
}

export default GradeRegressionModel;