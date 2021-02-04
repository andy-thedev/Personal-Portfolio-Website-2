import React, { useState } from 'react';

import { useSwipeable } from 'react-swipeable';

import { BsChevronUp } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';
import { VscEyeClosed } from 'react-icons/vsc';

import SectionBorder from '../components/SectionBorder';

import home_center_strip from '../img/background/home_center_strip.jpg';

function HomeScreen (props) {
    const [mobileModalVisible, setMobileModalVisible] = useState(false);

    const swipeHandler = useSwipeable({
        onSwipedDown: () => props.history.push("/contact"),
        onSwipedUp: () => props.history.push("/about"),
        onTap: () => setMobileModalVisible(true)
    })

    return <section className="home animated">
        <SectionBorder/>
        <img {...swipeHandler} src={home_center_strip} alt="center strip" className="centered strip"/>
        {mobileModalVisible && <div className="modal-background animated">
            <button onClick={() => setMobileModalVisible(false)} className="close-modal-button"><VscEyeClosed/></button>
            <div className="modal mobile" style={{alignItems: "center"}}>
                <div className="modal-content mobile">
                    <h2 style={{paddingTop: "0.5rem"}}> 
                        <BsChevronUp/>
                    </h2>
                    <h2>
                        Swipe Up/Down <br/>
                        to Navigate
                    </h2>
                    <h2>
                        <BsChevronDown/>
                    </h2>
                    <h2 id="end-of-scroll" style={{paddingTop: "0.5rem"}}>
                        Tap to Reveal <br/>
                        Content
                    </h2>
                </div>
            </div>
        </div>}
    </section>
}

export default HomeScreen;