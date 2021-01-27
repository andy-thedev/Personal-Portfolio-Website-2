import React from 'react';

import { useSwipeable } from 'react-swipeable';

import SectionBorder from '../components/SectionBorder';

import contact_center_strip from '../img/background/contact_center_strip.jpg';

function ContactScreen (props) {

    const swipeHandler = useSwipeable({
        onSwipedDown: () => props.history.push("/mywork"),
        onSwipedUp: () => props.history.push("/")
    })

    return <section className="contact">
        <SectionBorder></SectionBorder>
        <img {...swipeHandler} src={contact_center_strip} alt="center strip" className="centered strip"></img>
        <div className="split" style={{left: "-5%"}}>
            <div className="centered">
                <a href="https://www.linkedin.com/in/won-tae-jung/" className="contact-link">
                    LINKEDIN
                </a>
            </div>
        </div>
        <div className="split" style={{right: "-5%"}}>
            <div className="centered">
                <a href="https://github.com/dnjsxo1860" className="contact-link">
                    GITHUB
                </a>
            </div>
        </div>
    </section>
}

export default ContactScreen;