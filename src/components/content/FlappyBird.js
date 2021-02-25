import React, { useEffect, useRef } from 'react';

import flappybird from '../../videos/flappyBird/flappybird.mp4'

import mask from '../../img/projects/flappyBird/mask.jpg';

function FlappyBird (props) {
    const top = useRef(null);

    useEffect(() => {
        top.current.scrollIntoView();
    })

    return <div className="animated" ref={top}>
        <p id="start-of-scroll">
            "Flappy Bird" is a side-scrolling game released in 2013, 
            where the player controls a bird, and attempts to fly between 
            green pipes without hitting them.
        </p>
        <p>
            Despite its simplistic mechanic 
            and design, the game is renown for its high level of difficulty, 
            and addictiveness.
        </p>
        <p>
            In this project, I recreated "Flappy Bird", and implemented a 
            neural network algorithm utilizing NEAT (Neuroevolution of augmenting 
            topologies), so that the bird learns how to progress through 
            the game endlessly, without colliding into the surrounding obstacles.
        </p>
        <video controls className="project_video">
            <source src={flappybird} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <p className="space">
            Language: Python<br/>
            Libraries: PyGame, NEAT, os, random <br/>
            Reference: techwithtim
        </p>
        <p className="space"> Visuals: </p>
        <p>
            Images of the various components in the game, such as the background, pipes,
            base, and birds, were downloaded and imported from an open, external online 
            source as PNG files. 
        </p>
        <p> The Environment: </p>
        <p>
            The foreground moves at a constant rate, while the background remains stationary
            to simulate parallax scrolling. 
            The different states of velocity simulate an illusion of depth, and new 
            foreground/pipes are generated once the previous have reached a certain distance.
        </p>
        <p> Movement: </p>
        <p>
            The bird remains stationary while the pipes, and foreground move towards the bird,
            which creates the illusion of the bird "moving" forward,.
        </p>
        <p> The Bird: </p>
        <p>
            The bird, unless falling, simulate flapping by rotating through three states of 
            wing motion. The bird also tilts up and down depending on its displacement status and velocity
            (More details <a href="#end-of-scroll">below</a>)
        </p>
        <p className="space"> The Game: </p>
        <p>
            When the game starts, the bird, pipe, and base objects(OOP) are created.
            The mask function, provided by the pygame library, detects the exact pixel 
            coordiate outlines of each element(PNG image file), which allows for specific
            overlap examinations between the bird, and its surrounding objects. In this
            manner, we are able to precisely detect collision, if one does occur.
        </p>
        <img src={mask} alt="sample code of the project" className="project_img"
            onClick={() => props.openModal(mask)}/>
        <p>
            Collision with the sky and base can simply be calculated by addressing the bird's current
            y-coordinate. However, pipes, that are generated with random heights, continuously require 
            offset calculation.
        </p>
        <p>
            Offset calculates the distance between two given mask's top-left corner coordinates.
            This information is then utilized by PyGame's overlap function to accurately detect collision.
        </p>
        <p className="space"> The Rules: </p>
        <p>
            To maneuver through the game, the bird may choose to "jump", utilizing its
            built-in OOP function at a fixed velocity, or fall by doing nothing. If the
            bird does not collide with any obstacles, it automatically "moves" forward
            at a constant rate.
        </p>
        <p>
            If the bird maneuvers between the incoming pipes successively, the bird gains
            one point, whereas if the bird hits the top of the screen, the ground, or
            any of the incoming pipes, the game will end.
        </p>
        <p className="space"> The AI: </p>
        <p>
            The neural network configuration was done through the NEAT library, which
            operates by the given specifications of the config-feedforward.txt file.
        </p>
        <p>
            Following these specifications, (ie: fitness threshold, population size, and 
            mutation rate, etc.) the NEAT algorithm generates numerous mutations of neural networks,
            until one with an acceptable fitness threshold (See Below: "How the AI was 
            motivated") has been reached.
        </p>
        <p>
            In perspective of the given game and mission, a generation of a fixed number of 
            birds is generated, each varying in neural network structure. These birds are
            then sent to play the game, until all birds of the generation have either
            collided, or one reaches the fitness threshold. If all birds of the generation 
            have died without reaching the fitness threshold, the longest surviving birds 
            of the tested generation are mutated, and sent as a new generation. 
            This process is then repeated, until a bird reaches the fitness threshold. 
        </p>
        <p className="space">How the AI was Motivated:</p>
        <p>
            Each bird is encouraged to move forward, and move between the pipes, utilizing
            a fitness score.
        </p>
        <p>
            The Fitness Score:
        </p>
        <p>
            Every frame the bird moves forward (ie: does
            not collide with obstacles), it is given a small increase in fitness score, to
            encourage the AI from colliding (especially with the sky and the ground). 
        </p>
        <p>
            If the bird successfully maneuvers past the incoming pipes, it is given a significant 
            increase in fitness score, and its fitness is deducted when it collides 
            with a pipe.
        </p>
        <p>
            To prevent the NEAT algorithm from mutating infinitely, or excessively,
            even when a "fit" bird has been found, an upper limit to the fitness score is 
            pre-designated in the config-feedforward.txt file. This threshold is simply
            the standard for when a "fit" bird has been found.
        </p>
        <p className="space">
            Outcome:
        </p>
        <p>
            "Perfect bird" achieved in max. 4 generations, each generation with population
            size 20. Resulting bird survived for 48 hours without collision.
        </p>
        <p>
            (Since the game is so simple, it was actually possible to consistently achieve a "perfect" 
            bird in one generation with a population size of about 100. However, to demonstrate the 
            progressiveness of the NEAT method, I chose a population size of 20.)
        </p>
        <h2 className="space">
            More info:
        </h2>
        <p id="end-of-scroll">
            Code and documentation:
        </p>
        <p>
            <a href="https://github.com/dnjsxo1860/Flappy-Bird-AI" target="_blank" rel="noopener noreferrer">In this Github link</a>
        </p>
        <p className="space"></p>
    </div>
}

export default FlappyBird;