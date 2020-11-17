import React from 'react';

function Main(){
    return(
        <div className="page">
            <h2>Web Development</h2>
            <p>I started my programming world like most programmers with creating websites. I have to say till now I find this very pleasant. Especially after I found <b>React</b>. It’s a lovely framework and it’s nice to work with. Because I really like making my own <b>UI</b> designs and web development is very simple to start creating <b>front-end</b> it’s a great place where I can show a bit of myself. </p>
            <p>A good example of my website is this portfolio. I wrote it and designed it by myself. I wanted to keep this website simple because it's made mainly for HR people who will evaluate me. And I know they are very busy and don't have much time for reading. That's why I <b>bolded</b> many keywords so the most important elements should be more visible.</p>
            

            <ul><span>Knowladge: </span>
                <li>HTML </li>
                <li>CSS</li>     
                <li>JavaScript</li>     
                <li>React</li>     
                <li>Wordpress</li>        
            </ul>

            <ul><span>Tools: </span>
                <li>Vs Code</li>       
            </ul>

            <ul><span>My other websites: </span>
                <li> <a href="https://github.com/mrozowski/react_website" target="_blank" rel="noopener noreferrer"> Another React website</a></li>       
                <li> <a href="https://github.com/mrozowski/angular_website" target="_blank" rel="noopener noreferrer">Business landing page in Angular</a> </li>       
                <li> <a href="https://github.com/mrozowski/website_college_project" target="_blank" rel="noopener noreferrer">College project with PHP</a> </li>       
            </ul>

            
        </div>  
    );
}

export default Main;