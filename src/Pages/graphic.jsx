import React from 'react';
import LogoFuddi from '../Pictures/logo_fuddi.png';
import Ursula from '../Pictures/Ursula.png';
import InfoGraphic from '../Pictures/infographic.png';

function Main(){
    return(
        <div className="page">
            <h2>Graphic Design </h2>
            <p>Graphic design and in general art is my <b>hobby</b>. I like creating good looking things that people can appreciate. After I bought a graphic tablet I started spending more time drawing on a computer. From <b>photo-editing</b> and <b>digital painting</b>, I went to creating <b>illustrations</b> and <b>logo</b>. For Fuddi I also started designing infographics that help people easier understand business ideas.</p>            
            
            <p><b>What is <a href="https://fuddi.pl/" target="_blank" rel="noopener noreferrer">Fuddi?</a> </b></p>
            <p className="desc">It is a platform that I'm creating with my friends where people can buy products directly from farmers. I made for our platform a logo and many illustrations like a roadmap and infographics.</p>

            <p><i>You can check some of my art work below and on my <a href="https://www.behance.net/szymonmrozowski/" target="_blank" rel="noopener noreferrer"> behance </a> page.</i></p>

            <ul><span>Skills: </span>
                <li>Artistic sense   </li>       
                <li>Knowladge of color theory</li>       
                <li>Illustrator</li>       
                <li>Photoshop</li>       
                <li>Making logo</li>       
                <li>Creating illustrations </li>               
            </ul>

            <div className="show-case"><img src={LogoFuddi} alt="Fuddi mobile app design" width="40%"/></div>
            <div className="show-case"><img src={InfoGraphic} alt="Fuddi mobile app design" width="75%"/></div>
            <div className="show-case"><img src={Ursula} alt="Fuddi mobile app design" width="35%"/></div>
            
            
            
        </div>  
    );
}

export default Main;