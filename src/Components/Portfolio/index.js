import React from 'react';
import {useNavigate} from 'react-router-dom';


import Proj1 from '../../images/AIApplication.png';
import Proj2 from '../../images/blackjack.jpg';
import Proj3 from '../../images/ObjectCatcher.png';

import './portfolio.css';

const Portfolio = () => {
    let navigate = useNavigate();

    return (
        <body id="portfolio" class="port__tile">
            <h1 class="port__title">Projects</h1>
            <section class="port__grid">
                {/*Copy Paste Starts here */}
                <div class="proj">
                    <img src={Proj1}/>
                    <h3>Gator Space</h3>
                </div>
                {/*Copy Paste Ends here */}

                <div class="proj">
                    <img src={Proj2}/>
                    <h3>Blackjack</h3>
                </div>
                
                <div class="proj">
                    <img src={Proj3}/>
                    <h3>Object Catcher Game</h3>
                </div>

            </section>

            <button onClick={() => {navigate("/projects")}} class="port__btn">See More</button>
        </body>
    )
}

export default Portfolio;
