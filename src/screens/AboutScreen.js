import React from 'react';
import ScrollContent from '../components/ScrollContent';


function AboutScreen (props) {
    return <section className="about">
        <div className="section-border">
            <div class="split right">
                <div class="centered">
                    <ScrollContent></ScrollContent>
                </div>
            </div>
        </div>
    </section>
}

export default AboutScreen;