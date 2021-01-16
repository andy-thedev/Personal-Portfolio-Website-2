import React from 'react';
import SkillsScrollContent from '../components/SkillsScrollContent';


function SkillsScreen (props) {
    return <section className="skills">
        <div className="section-border">
            <div class="split left">
                <div class="centered">
                    <SkillsScrollContent></SkillsScrollContent>
                </div>
            </div>
        </div>
    </section>
}

export default SkillsScreen;