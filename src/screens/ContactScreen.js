import React, { useState } from 'react';

import { useSwipeable } from 'react-swipeable';

import { VscEyeClosed } from 'react-icons/vsc';

import SectionBorder from '../components/SectionBorder';

import contact_center_strip from '../img/background/contact_center_strip.jpg';

function ContactScreen (props) {
    const [mobileModalVisible, setMobileModalVisible] = useState(false);

    const swipeHandler = useSwipeable({
        onSwipedDown: () => props.history.push("/mywork"),
        onSwipedUp: () => props.history.push("/"),
        onTap: () => setMobileModalVisible(true),
    })

    return <section className="contact animated">
        <SectionBorder/>
        <img {...swipeHandler} src={contact_center_strip} alt="center strip" className="centered strip"/>
        <div className="split" style={{left: "-5%"}}>
            <div className="centered">
                <a href="https://www.linkedin.com/in/won-tae-jung/" className="contact-link">
                    LINKEDIN
                </a>
            </div>
        </div>
        <div className="split" style={{right: "-5%"}}>
            <div className="centered">
                <a href="https://github.com/andy-thedev" className="contact-link">
                    GITHUB
                </a>
            </div>
        </div>
        {mobileModalVisible && <div className="modal-background animated">
            <button onClick={() => setMobileModalVisible(false)} className="close-modal-button"><VscEyeClosed/></button>
            <div className="modal mobile">
                <div className="modal-content mobile">
                    <a href="https://www.linkedin.com/in/won-tae-jung/" className="contact-link mobile">
                        LINKEDIN
                    </a>
                    <a href="https://github.com/andy-thedev" className="contact-link mobile">
                        GITHUB
                    </a>
                </div>
            </div>
        </div>}
    </section>
}

export default ContactScreen;