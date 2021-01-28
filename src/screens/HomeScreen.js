import React from 'react';

import { useSwipeable } from 'react-swipeable';
import SectionBorder from '../components/SectionBorder';

import home_center_strip from '../img/background/home_center_strip.jpg';

function HomeScreen (props) {
    const swipeHandler = useSwipeable({
        onSwipedDown: () => props.history.push("/contact"),
        onSwipedUp: () => props.history.push("/about")
    })

    return <section className="home animated">
        <SectionBorder/>
        <img {...swipeHandler} src={home_center_strip} alt="center strip" className="centered strip"/>
    </section>
}

export default HomeScreen;