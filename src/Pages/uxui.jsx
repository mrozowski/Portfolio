import React from 'react';
import MyAndroidProject from '../Pictures/androProject.png';
import Fuddi from '../Pictures/fuddi.png';

function Main(){
    return(
        <div className="page">
            <h2>UX/UI  Designing</h2>
            <p>I was thinking about how can I combine my passion for art and programming. One of the answers I came up with is UX and UI designing. It combines art and analytic thinking. Having these two things helps with designing <b>intuitive</b> and <b>good-looking interfaces</b> for customers, designing <b>functionality</b>, understanding the <b>target group</b>, and what do they want. Of course, there is no programming however, it's very useful to understand if my design will not cause any problems during code implementation.</p>            
            
            <p><i>You can check some of my art work <a href="#pic-0">below</a>.</i></p>
            
            <h3>Experience:</h3>
            <p className="desc"><a href="https://fuddi.pl/" target="_blank" rel="noreferrer">Fuddi</a> - it's a platform that I'm creating with my friends. The platform where people can buy fresh food products like eggs, milk, vegetables, jam, etc. directly from farmers and craftsmen.</p>
            <ul><span>Mainly I was helping with:  </span>
                <li>Building lean and business model canvas </li>
                <li>Designing functionality </li>             
                <li>Creating customer journey </li>             
                <li>Designing UI for mobile app  </li>             
                <li>Making Graphics </li>             
            </ul>

            <ul><span>Skills: </span>
                <li>Artistic sense   </li>       
                <li>Knowladge of color theory</li>       
                <li>Illustrator</li>       
                <li>Photoshop</li>       
                <li>Adobe XD, Figma</li>          
                <li>Prototiping</li>       
                <li>Knowladge of Lean Model Canvas</li>       
            </ul>


            <div id="pic-0" className="show-case"><img src={MyAndroidProject} alt="My android social media app design" width="63%"/></div>
            <div className="show-case"><img src={Fuddi} alt="Fuddi mobile app design" width="80%"/></div>

            
        </div>  
    );
}

export default Main;