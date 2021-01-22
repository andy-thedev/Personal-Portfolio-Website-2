import React from 'react';

import SectionBorder from '../components/SectionBorder';

import home_strip from '../img/background/home_strip.jpg';

function HomeScreen (props) {
    return <section className="home">
        <SectionBorder></SectionBorder>
        <img src={home_strip} alt="center strip" className="centered strip"></img>
    </section>
}

export default HomeScreen;