import React from 'react';
import AboutScrollContent from '../components/AboutScrollContent';

function AboutScreen (props) {
    return <section className="about">
        <div className="section-border">
            <div class="split right">
                <div class="centered">
                    <AboutScrollContent></AboutScrollContent>
                </div>
            </div>
        </div>
    </section>
}

export default AboutScreen;