import React from 'react';

function ClothingPixelModel (props) {
    return <div className="animated">
        <p className="start-of-scroll">
            Program: Python
        </p>
        <p>
            Libraries: <br/>
            Tensorflow, Keras, Numpy, Matplotlib
        </p>
        <p className="space">
            Image classification is a popular domain for neural network implementation. 
            The complexity, and accuracy of neural networks allow for precise predictions 
            in classifying vague forms in images, such as the popular task of classifying 
            cats and dogs.
        </p>
        <p>
            In this project, pixel images of different types of clothings, such as 
            T-shirts, trousers, sandals, coats, and sneakers are predicted, with 
            an accuracy of 90% (Higher accuracy may be definitely achieved through 
            changing parameters, such as the number of neurons, epochs, and greater 
            abundance in data).
        </p>
        <p className="space"> 
            Outcome: <br/>
            Accuracy: 89.07% Loss: 0.2972
        </p>
        <p>
            Dataset: <br/>
            keras.datasets.fashion_mnist
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
            <a href="https://github.com/dnjsxo1860/Clothing-Pixel-Classification" target="_blank" rel="noopener noreferrer">In this Github link</a>
        </p>
        <p>
            Detailed explanations:<br/>
            Clothing_Pixel_Classification.py<br/> 
            (above each line of code)
        </p>
        <p>
            Table of Contents:<br/>
            README.md
        </p>
    </div>
}

export default ClothingPixelModel;