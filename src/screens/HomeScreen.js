import React from 'react';

import { useSwipeable } from 'react-swipeable';
import SectionBorder from '../components/SectionBorder';

import home_strip from '../img/background/home_strip.jpg';

function HomeScreen (props) {

    const swipeHandler = useSwipeable({
        onSwipedDown: () => props.history.push("/contact"),
        onSwipedUp: () => props.history.push("/about")
    })

    return <section className="home">
        <SectionBorder></SectionBorder>
        <img {...swipeHandler} src={home_strip} alt="center strip" className="centered strip"></img>
    </section>
}

export default HomeScreen;