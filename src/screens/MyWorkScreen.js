import React from 'react';
import MyWorkScrollContent from '../components/MyWorkScrollContent';

function MyWorkScreen (props) {
    return <section className="mywork">
        <div className="section-border">
        </div>
        <div class="split right">
            <div class="centered">
                <MyWorkScrollContent></MyWorkScrollContent>
            </div>
        </div>
    </section>
}

export default MyWorkScreen;